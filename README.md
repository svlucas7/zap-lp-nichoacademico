# Zap Gráfica – Landing Page (Cerimonialistas)

Projeto da landing page responsiva feita com HTML5 + Tailwind CSS + JavaScript.

## Como funciona o build (Netlify)
- Já existe um `netlify.toml` configurado para:
  - `command = "npm run build"`
  - `publish = "."`
  - `NODE_VERSION = 20`
- O Tailwind é compilado na hospedagem (CI do Netlify) e o CSS final é gerado em `public/styles.css`.

## Estrutura
- `index.html` – Página única com todas as seções e textos solicitados
- `public/main.js` – Menu mobile, animações de entrada e feedback do formulário
- `src/input.css` – Fonte do Tailwind (usa @tailwind e @apply)
- `tailwind.config.js` – Paleta de cores: `zapGreen`, `zapOrange`, `zapBlue`
- `postcss.config.js`, `package.json`, `.gitignore`, `netlify.toml`

## Deploy no Netlify (passos)
1. Suba o repositório para o GitHub (branch `main`).
2. Em https://app.netlify.com > Add new site > Import from Git > escolha este repositório.
3. Build command: `npm run build` (já definido no `netlify.toml`). Publish directory: `.` (raiz do projeto).
4. Deploy. Ao finalizar, acesse a URL para ver a landing page.

## Observações
- Quando quiser trocar o formulário pelo RD Station, substitua o `<form id="orcamento-form">` no `index.html` pelo embed do RD.
- A página é mobile-first e utiliza animações suaves via Tailwind (transition/transform) e IntersectionObserver.
