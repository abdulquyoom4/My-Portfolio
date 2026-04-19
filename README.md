# Abdul Quyoom — Developer Portfolio

React + Vite + Tailwind CSS v3. Dark themed, fast, modular.

## Stack

- ⚡ Vite 5
- ⚛️ React 18
- 🎨 Tailwind CSS 3
- 🔤 Syne + Space Mono (Google Fonts)

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview   # preview production build locally
```

## Project Structure

```
portfolio-vite/
├── index.html               ← Vite entry (root level)
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css            ← Tailwind directives + custom utilities
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Customization

| File | What to edit |
|------|--------------|
| `components/Hero.jsx` | Name, tagline, description |
| `components/Projects.jsx` | Your projects, GitHub links |
| `components/Skills.jsx` | Tech stack |
| `components/Experience.jsx` | Education & work history |
| `components/Contact.jsx` | Email, LinkedIn, Resume URL |
| `tailwind.config.js` | Colors, fonts, theme tokens |

## Deploy on Vercel

```bash
# Push to GitHub, then:
# vercel.com → Import repo → Deploy
# Framework preset: Vite (auto-detected)
```

---

Built by Abdul Quyoom · [github.com/abdulquyoom4](https://github.com/abdulquyoom4)
