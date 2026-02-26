# glassett.co

Personal portfolio site for Andrew Glassett — Embedded Design Partner.

Built with plain HTML, CSS, and vanilla JavaScript. No frameworks, no build tools.

## Structure

```
├── index.html          # Homepage
├── work/
│   ├── apqc/           # Case study: APQC · Tag1
│   ├── coffee/         # Case study: Walmart · Keurig
│   ├── sony/           # Case study: Sony Music · The Orchard
│   └── tag1-brand/     # Case study: Tag1 Brand Extension
├── css/
│   ├── main.css        # Shared styles: reset, variables, nav, footer
│   ├── home.css        # Homepage-only styles
│   └── case-study.css  # Shared case study styles
└── js/
    └── main.js         # Hero animation + scroll fade observer
```

## Running locally

```bash
browser-sync start --server --files "**/*.html, css/*.css, js/*.js" --port 3000
```

Requires [browser-sync](https://browsersync.io/) (`npm install -g browser-sync`). The site will auto-reload on any file change.

## Design tokens

| Token | Value | Usage |
|---|---|---|
| `--ink` | `#264653` | Primary text + dark backgrounds |
| `--teal` | `#2A9D8F` | Accent, links, highlights |
| `--gold` | `#E9C46A` | Secondary accent |
| `--sand` | `#F4A261` | Warm accent |
| `--coral` | `#E76F51` | Warm accent |
| `--cream` | `#FAF7F2` | Page background |
