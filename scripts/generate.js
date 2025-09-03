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

  // Create output directory and clean it
  const outDir = path.resolve(__dirname, '../dist');
  fs.mkdirSync(outDir, { recursive: true });

  // Copy client assets
  const clientDir = path.resolve(__dirname, '../dist/client');
  if (fs.existsSync(clientDir)) {
    const files = fs.readdirSync(clientDir);
    for (const file of files) {
      const srcPath = path.join(clientDir, file);
      const destPath = path.join(outDir, file);
      if (file !== 'index.html') {
        fs.cpSync(srcPath, destPath, { recursive: true });
      }
    }
  }

  // Generate static pages for each route
  for (const url of routes) {
    const { html } = await render(url);
    const segments = url.split('/').filter(Boolean);
    
    // Determine target file path
    let targetFile;
    if (url === '/') {
      targetFile = path.join(outDir, 'index.html');
    } else {
      const dirPath = path.join(outDir, ...segments.slice(0, -1));
      fs.mkdirSync(dirPath, { recursive: true });
      targetFile = path.join(dirPath, 'index.html');
    }

    const fullHtml = template.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

    fs.writeFileSync(targetFile, fullHtml);
    console.log(`Generated ${targetFile}`);
  }

  // Create 404 page
  const notFoundHtml = template.replace(
    '<div id="root"></div>',
    '<div id="root"><h1>404 - Page Not Found</h1><p>The page you\'re looking for doesn\'t exist.</p></div>'
  );
  fs.writeFileSync(path.join(outDir, '404.html'), notFoundHtml);
  console.log('Generated 404.html');
}

generate().catch(console.error);
