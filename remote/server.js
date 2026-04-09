const express = require('express');
const http = require('http');
const { WebSocketServer } = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// Serve the entire project (index.html, editions, assets, etc.)
const projectRoot = path.join(__dirname, '..');
app.use(express.static(projectRoot));

// Serve control.html at /remote/control.html (already covered by static above)
// Also add a shortcut: /control → /remote/control.html
app.get('/control', (req, res) => res.redirect('/remote/control.html'));

// State
let presenter = null;   // ws connection of the presenter (spotlight.html)
const controllers = new Map(); // ws -> { name }
let currentSlide = 0;
let totalSlides = 0;

function broadcast(msg) {
  const data = JSON.stringify(msg);
  wss.clients.forEach(c => {
    if (c.readyState === 1) c.send(data);
  });
}

function sendControllerList() {
  const names = [...controllers.values()].map(c => c.name);
  broadcast({ type: 'controllers', names });
}

wss.on('connection', (ws) => {
  console.log('Nova conexao');

  ws.on('message', (raw) => {
    let msg;
    try { msg = JSON.parse(raw); } catch { return; }

    switch (msg.type) {
      // Presenter registers
      case 'presenter-join':
        presenter = ws;
        totalSlides = msg.totalSlides || 0;
        currentSlide = msg.currentSlide || 0;
        console.log(`Presenter conectado (${totalSlides} slides)`);
        ws.send(JSON.stringify({ type: 'role', role: 'presenter' }));
        sendControllerList();
        break;

      // Controller registers
      case 'controller-join':
        controllers.set(ws, { name: msg.name || 'Anonimo' });
        console.log(`Controller conectado: ${msg.name}`);
        ws.send(JSON.stringify({
          type: 'role', role: 'controller',
          currentSlide, totalSlides
        }));
        sendControllerList();
        break;

      // Navigation from controller
      case 'navigate':
        if (presenter && presenter.readyState === 1) {
          presenter.send(JSON.stringify({
            type: 'navigate',
            action: msg.action,
            slide: msg.slide,
            from: controllers.get(ws)?.name || '?'
          }));
        }
        break;

      // Action from controller (open screenshot, modal, etc.)
      case 'action':
        console.log(`Action: ${msg.action} de ${controllers.get(ws)?.name || '?'} | presenter=${!!presenter}`);
        if (presenter && presenter.readyState === 1) {
          presenter.send(JSON.stringify({
            type: 'action',
            action: msg.action,
            params: msg.params || {},
            from: controllers.get(ws)?.name || '?'
          }));
        }
        break;

      // Presenter reports slide change (sync all controllers)
      case 'slide-update':
        currentSlide = msg.currentSlide;
        wss.clients.forEach(c => {
          if (c !== ws && c.readyState === 1) {
            c.send(JSON.stringify({
              type: 'slide-update',
              currentSlide: msg.currentSlide,
              slideLabel: msg.slideLabel || '',
              slideActions: msg.slideActions || []
            }));
          }
        });
        break;
    }
  });

  ws.on('close', () => {
    if (ws === presenter) {
      presenter = null;
      console.log('Presenter desconectado');
      broadcast({ type: 'presenter-disconnected' });
    }
    if (controllers.has(ws)) {
      console.log(`Controller desconectado: ${controllers.get(ws).name}`);
      controllers.delete(ws);
      sendControllerList();
    }
  });
});

const PORT = process.env.PORT || 3030;
server.listen(PORT, () => {
  console.log(`\n  Tech Spotlight Server`);
  console.log(`  Hub:      http://localhost:${PORT}`);
  console.log(`  Spotlight: http://localhost:${PORT}/edition-02/spotlight.html`);
  console.log(`  Control:  http://localhost:${PORT}/control\n`);
});
