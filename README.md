# Trever's Treats 🍳

A modern cooking website built with [Astro](https://astro.build/), featuring recipes, how-tos, gear reviews, and a personal blog. Designed for food lovers, home cooks, and anyone interested in creative technology in the kitchen.

---

## Features

- 🥘 **Recipe Collection:** Browse and search delicious, easy-to-follow recipes.
- 🎥 **How-To Guides:** Step-by-step tutorials for kitchen techniques and skills.
- 🛠️ **Gear Reviews:** Honest reviews of kitchen tools and gadgets.
- 📝 **Blog:** Insights, stories, and tips from Trever.
- 🌗 **Dark/Light Mode:** Accessible, theme-toggle UI.
- 📱 **Responsive Design:** Works great on mobile, tablet, and desktop.
- 🔗 **Social Links:** Connect on Pinterest, Instagram, YouTube, TikTok, Patreon, Throne, and more.

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit [http://localhost:4321](http://localhost:4321) in your browser.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## Project Structure

- `src/components/` — Reusable UI components (Nav, Footer, RecipePreview, etc.)
- `src/pages/` — Astro pages (recipes, how-tos, blog, etc.)
- `src/content/` — Markdown/MDX content for recipes, blogs, gear, and more
- `public/assets/` — Images, videos, and static assets
- `src/styles/` — Global and component CSS

---

## TODO

- [ ] Set up deployment at `treats.treverberryman.com` (option 2: subdomain of personal site) for Trever's Treats.

---

## Branching Best Practices

This project follows a modern, professional branching strategy:

- **main**: Production branch. Only stable, deployable code. Protected—no direct commits, only merges from staging or release branches.
- **staging**: Pre-production branch. Used for QA, UAT, and final review before merging to main. Receives merges from dev.
- **dev**: Main development branch. All new features, bugfixes, and experiments branch off from here. Regularly merged into staging.
- **feature/xyz**: Short-lived branches for individual features or fixes. Merged into dev when complete.

**Usage:**
- Only merge to `main` from `staging`.
- Only merge to `staging` from `dev`.
- Only merge to `dev` from feature branches.

**Cleanup:**
- Remove or archive legacy branches (e.g., `master`, old feature branches) to keep the repo clean.
- Protect `main` and `staging` branches in your GitHub repo settings to prevent accidental direct commits.

This structure helps keep your codebase stable, organized, and easy for contributors to understand.

---

## Contributing

Contributions, suggestions, and feedback are welcome! Please open an issue or submit a pull request.

---

## License

[MIT](LICENSE)

---

## Acknowledgments

- Built with the help of the **Cursor AI editor** for code, design, and workflow guidance.
- Based on a template from [Astro's freely available templates](https://astro.build/themes/).
- **Trever's Treats** — Created with ❤️ by Trever Berryman
