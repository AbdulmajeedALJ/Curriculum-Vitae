# Portfolio — Abdulmajeed Aljuhaymi

This is a responsive personal portfolio website with three main sections: About, Projects, and Contact. It supports dark/light themes, smooth scrolling, and includes a simple, client‑side validated contact form (no backend required).

## Table of Contents
- Project Description
- Features
- Tech
- Run Locally / Setup
- Screenshots
- Project Structure
- Accessibility & Performance
- AI Usage Summary
- Live Link (optional)
- Browser Support
- Contributing
- License
- Contact

## Project Description
- About Me: short bio and tagline with centered avatar.
- Projects: showcases three projects — FaceLite, ResumeIQ (resume score predictor), and MubarakBot.
- Contact: simple form (Name, Email, Message) with client‑side validation.
- Theme: dark mode (default) and light mode with a persistent toggle.

## Features
- About Me: brief intro and tagline with a centered avatar
- Projects: three sample projects with titles and descriptions
  - FaceLite: lightweight communication app to create accounts, add friends, and chat
  - Resume Score Predictor (ResumeIQ): AI‑assisted resume scoring based on skills/education/experience
  - MubarakBot: bot that sends Ramadan/Eid congratulation messages to contacts
- Contact: Name/Email/Message with basic validation (demo only)
- Theme: dark mode (default) and light mode with a toggle that remembers your choice

## Tech
- HTML5 semantic structure
- CSS Grid/Flexbox with responsive breakpoints
- Vanilla JavaScript for theme toggle, greeting, and form validation

## Run Locally
1. Open `index.html` in any modern browser.
2. Use the “Light Mode/Dark Mode” button in the top navigation to switch themes.

## Setup Instructions
No build step required.
- Option A: double‑click `index.html` to open in a browser.
- Option B: serve locally for better caching/paths:
  - Python: `python3 -m http.server` then open `http://localhost:8000/Assignment-1/Curriculum-Vitae/`
  - VS Code Live Server: open the folder and click “Go Live”.

## Screenshots
Add your own screenshots here:
- About section (light/dark)
- Projects grid
- Contact form

## Project Structure
```
Assignment-1/Curriculum-Vitae/
├─ index.html          # Semantic HTML (About, Projects, Contact)
├─ css/
│  └─ style.css        # Responsive styles, themes, components
├─ js/
│  └─ script.js        # Theme toggle, greeting, form validation
└─ docs/
   └─ ai-usage-report.md
```

## Accessibility & Performance
- Uses proper landmarks, labels, and `aria-*` where helpful.
- Color contrast considered for both themes.
- Responsive layout using CSS Grid/Flexbox.
- No heavy frameworks or large assets; inline SVG placeholders.

## AI Usage Summary
See `docs/ai-usage-report.md` for details. In short, AI was used to:
- Draft and refine HTML structure for accessibility and responsiveness
- Design CSS (galaxy dark theme, light sky theme) and fix cross‑browser issues
- Implement JS for theme persistence, time‑based greeting, and form validation
- Iterate on UI polish (nav spacing, button styles, project content)

## Live Link (optional)
If deployed (GitHub Pages/Netlify/Vercel), add the URL here.

## Browser Support
Tested on latest Chrome and Edge. Should work on modern Firefox/Safari.

## Contributing
Issues and pull requests are welcome for improvements and bug fixes.

## License
MIT — feel free to reuse with attribution.

## Contact
Abdulmajeed Aljuhaymi — add your preferred contact or portfolio link here.

## Notes
- The contact form does not send emails; it only validates and shows a confirmation message.
- Placeholder images in project cards are inline SVGs; swap them for real screenshots if available.
