#!/usr/local/bin/node

const esbuild = require('esbuild')


esbuild.build({
  entryPoints: ['src/app.tsx'],
  outdir: 'lib',
  define: {
    "process.env.NODE_ENV": "\"production\""
  },
  treeShaking: 'ignore-annotations'
}).catch(() => process.exit(1))