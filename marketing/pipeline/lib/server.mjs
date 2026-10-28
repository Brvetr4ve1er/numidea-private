// Tiny static HTTP server for rendering.
// Why HTTP and not file://: Chromium blocks CSS masks and webfonts on file://
// (BRAND.md, "Two traps this cost time on"), so the engravings and the fonts
// would silently fail to paint.
//
// Mounts:
//   /site/...  -> the public site's assets/ folder, READ-ONLY (GET/HEAD only).
//                 Videos reuse the site's own fonts.css, themes.css, fonts and
//                 engravings without copying them.
//   /...       -> this pipeline folder (videos, runtime, brand CSS).
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json', '.woff2': 'font/woff2', '.webp': 'image/webp',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
};

export function startServer({ root, mounts = {} }) {
  const table = Object.entries(mounts).sort((a, b) => b[0].length - a[0].length);
  const server = http.createServer((req, res) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405).end(); return; }
    let urlPath;
    try { urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname); }
    catch { res.writeHead(400).end(); return; }
    let base = root, rel = urlPath;
    for (const [prefix, dir] of table) {
      if (urlPath.startsWith(prefix)) { base = dir; rel = urlPath.slice(prefix.length); break; }
    }
    const file = path.resolve(base, '.' + path.sep + rel);
    if (!file.startsWith(path.resolve(base) + path.sep) && file !== path.resolve(base)) {
      res.writeHead(403).end(); return;
    }
    fs.stat(file, (err, st) => {
      if (err || !st.isFile()) { res.writeHead(404).end(); return; }
      res.writeHead(200, {
        'content-type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream',
        'content-length': st.size, 'cache-control': 'no-store',
      });
      if (req.method === 'HEAD') { res.end(); return; }
      fs.createReadStream(file).pipe(res);
    });
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      resolve({ url: `http://127.0.0.1:${port}`, close: () => new Promise((r) => server.close(r)) });
    });
  });
}
