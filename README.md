# Flavia Rodrigues — Pixel Portfolio

A retro, game-themed personal portfolio built with **React**, **Vite**, and **Tailwind CSS**.

It's set up to be easy to read and edit even if you're still learning —
every file is small, commented, and does one job.

## What's in each file

```
portfolio/
├── index.html              # loads the pixel fonts, mounts React
├── src/
│   ├── main.jsx             # starts the React app
│   ├── App.jsx              # lists the sections on the page, in order
│   ├── index.css            # global styles + Tailwind
│   ├── data.js               ⭐ EDIT THIS to change your content
│   └── components/
│       ├── Navbar.jsx        # top navigation bar
│       ├── Hero.jsx          # the intro "start screen"
│       ├── PixelCharacter.jsx# the animated pixel character + laptop
│       ├── About.jsx         # About Me section
│       ├── Skills.jsx        # skills inventory
│       ├── Projects.jsx      # project quest cards
│       ├── Education.jsx     # education + experience timeline
│       ├── Contact.jsx       # contact links
│       ├── Footer.jsx
│       └── SectionHeader.jsx # the "LEVEL 0X" heading used on every section
├── tailwind.config.js        # colors, fonts, and animations are defined here
└── package.json
```

**To update your info (bio, projects, education, links, etc.), you only need
to open `src/data.js`.** You don't need to touch any component file for
normal content changes.

**To change colors**, open `tailwind.config.js` and edit the hex values
under `theme.extend.colors`. Every component references those names
(`pink`, `green`, `cyan`, `purple`, `ivory`, `muted`) instead of raw hex
codes, so one change there updates the whole site.

## Running it on your own computer

You'll need [Node.js](https://nodejs.org) installed (any recent version).

```bash
# 1. Move into the project folder
cd portfolio

# 2. Install dependencies (only needed once)
npm install

# 3. Start the local dev server
npm run dev
```

Then open the link it prints (usually `http://localhost:5173`) in your
browser. The page auto-refreshes whenever you save a file.

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), click **Add New → Project**, and
   import that repository.
3. Vercel will auto-detect it as a **Vite** project — leave the default
   build settings (`npm run build`, output folder `dist`) and click **Deploy**.
4. You'll get a live `your-project.vercel.app` link once it finishes.

Any time you push new changes to GitHub, Vercel redeploys automatically.

## Notes on the pixel character

The animated character in the hero section (`PixelCharacter.jsx`) is built
entirely from plain `<div>`s — no image files. Each body part (head, hair,
arms, laptop screen, etc.) is one styled box, so you can resize, recolor,
or move any part by editing its `className`. The little code lines on the
laptop screen and the blinking eyes are done with CSS animations defined in
`tailwind.config.js` (look for `keyframes` and `animation`).
