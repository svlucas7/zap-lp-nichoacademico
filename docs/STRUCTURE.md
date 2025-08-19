# Estrutura de Pastas e Arquivos

```
zap-lp-nicho-cerimonial/
├── assets/                # (opcional) arquivos estáticos extras
├── docs/                  # Documentação do projeto
│   └── STRUCTURE.md       # Explicação da estrutura
├── public/                # Arquivos públicos para deploy
│   ├── assets/            # Imagens e ícones
│   │   └── images/        # Todas as imagens usadas na LP
│   ├── main.js            # JS principal da landing page
│   └── sw.js              # Service Worker (PWA)
├── src/                   # Fontes do Tailwind/CSS customizado
│   └── input.css          # CSS base e componentes customizados
├── index.html             # Landing page principal
├── netlify.toml           # Configuração de build Netlify
├── package.json           # Dependências e scripts
├── postcss.config.js      # Configuração do PostCSS
├── tailwind.config.js     # Configuração do Tailwind
└── README.md              # Documentação principal
```

## Recomendações
- **Imagens**: mantenha todas em `public/assets/images/`.
- **JS**: centralize scripts em `public/main.js`.
- **CSS**: use `src/input.css` para customizações e componentes.
- **Documentação**: mantenha instruções e estrutura em `README.md` e `docs/`.
- **Backup**: arquivos como `index_backup.html` podem ser removidos do repositório final.

## Deploy
- O deploy no Netlify deve apontar para a raiz do projeto.
- O build do Tailwind gera o CSS final automaticamente.

## Portfólio
- Estrutura clara facilita manutenção e apresentação para recrutadores/clientes.
- Documente cada seção e componente com comentários explicativos.
