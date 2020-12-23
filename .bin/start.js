#!/usr/local/bin/node

const esbuild = require('esbuild')

esbuild.serve({
  port: 8000,
}, {
  entryPoints: ['src/app.tsx'],
  bundle: true,
  outfile: 'app.js',
  define: {
    "process.env.NODE_ENV": "\"debug\""
  },
  loader: {
    ".css": 'css'
  },
  plugins: [
   
  ],
  treeShaking: 'ignore-annotations'
}).catch(() => process.exit(1))