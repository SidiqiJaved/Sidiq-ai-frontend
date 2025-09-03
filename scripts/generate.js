import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { render } from '../dist/server/entry-server.js';

// Get dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes to pre-render
const routes = ['/', '/solutions', '/contact', '/figma-dev'];

async function generate() {
  const template = fs.readFileSync(
    path.resolve(__dirname, '../dist/client/index.html'),
    'utf-8'
  );

  // Create output directory
  const outDir = path.resolve(__dirname, '../dist/static');
  fs.mkdirSync(outDir, { recursive: true });

  // Generate static pages for each route
  for (const url of routes) {
    const { html } = await render(url);
    const targetFile = path.join(outDir, url === '/' ? 'index.html' : `${url.slice(1)}.html`);
    
    const fullHtml = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    
    // Ensure directory exists
    const targetDir = path.dirname(targetFile);
    fs.mkdirSync(targetDir, { recursive: true });
    
    fs.writeFileSync(targetFile, fullHtml);
    console.log(`Generated ${targetFile}`);
  }
}
