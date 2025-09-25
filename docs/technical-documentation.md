# Technical Documentation

## Architecture Overview

### File Structure
```
Assignment-1/Curriculum-Vitae/
├── index.html              # Main HTML document
├── css/
│   └── style.css           # All stylesheets (themes, responsive, components)
├── js/
│   └── script.js           # Client-side JavaScript functionality
├── assets/
│   └── DSC_7697 copy.jpg   # Profile image
└── docs/
    ├── ai-usage-report.md
    └── technical-documentation.md
```

### Technology Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Custom Properties (CSS Variables), CSS Grid, Flexbox
- **No Dependencies**: Zero external libraries or frameworks
- **Assets**: Inline SVG placeholders, optimized JPG profile image

## Implementation Details

### HTML Structure
- **Semantic HTML5**: Uses `<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`
- **Accessibility**: ARIA labels, landmarks, skip links, proper heading hierarchy
- **SEO**: Meta tags, structured data ready, semantic markup

### CSS Architecture

#### CSS Custom Properties (Variables)
```css
:root {
  --bg: #eef6ff;           /* Light theme background */
  --text: #0b1b34;         /* Text color */
  --primary: #7c3aed;      /* Primary accent */
  --primary-2: #22d3ee;    /* Secondary accent */
  --card: #ffffff;         /* Card background */
  --border: #cfe3ff;       /* Border color */
}

body.dark {
  --bg: #050816;           /* Dark theme background */
  --text: #e5e7eb;         /* Dark text */
  /* ... other dark theme variables */
}
```

#### Responsive Design
- **Mobile First**: Base styles target mobile devices
- **Breakpoints**: 700px (tablet), 1000px (desktop)
- **Grid System**: CSS Grid for main layout, Flexbox for components
- **Fluid Typography**: Responsive font sizes using relative units

#### Theme System
- **Light Theme**: Sky with clouds background using data URI SVG
- **Dark Theme**: Galaxy starfield with radial gradients
- **Persistence**: localStorage for theme preference
- **Smooth Transitions**: 200ms ease transitions between themes

### JavaScript Functionality

#### Theme Management
```javascript
// Theme persistence with localStorage
const saved = localStorage.getItem('theme');
const mode = saved || 'dark'; // Default to dark
body.classList.toggle('dark', mode === 'dark');
body.classList.toggle('light', mode === 'light');
```

#### Dynamic Content
- **Time-based Greeting**: Updates based on time of day
- **Form Validation**: Client-side validation with accessibility feedback
- **Year Display**: Automatically updates footer year

#### Event Handling
- **Theme Toggle**: Click handler with ARIA state management
- **Form Submission**: Prevent default, validate, show feedback
- **Responsive Images**: Object-fit and object-position for profile image

## Performance Considerations

### Optimization Strategies
- **No External Dependencies**: Zero third-party libraries
- **Inline Assets**: SVG placeholders embedded as data URIs
- **Minimal HTTP Requests**: Only 3 files (HTML, CSS, JS)
- **Efficient CSS**: Uses modern CSS features, minimal redundancy
- **Image Optimization**: Profile image compressed, proper sizing

### Loading Performance
- **Critical CSS**: Inline critical styles (if needed)
- **Font Loading**: Preconnect to Google Fonts, font-display: swap
- **Lazy Loading**: Not needed for current asset count

### Runtime Performance
- **CSS Transitions**: Hardware-accelerated transforms
- **Event Delegation**: Efficient event handling
- **Memory Management**: No memory leaks, clean event listeners

## Browser Support

### Tested Browsers
- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅

### Feature Support
- **CSS Grid**: 95%+ browser support
- **CSS Custom Properties**: 95%+ browser support
- **ES6+ JavaScript**: 95%+ browser support
- **Object-fit**: 95%+ browser support

## Accessibility Features

### WCAG 2.1 Compliance
- **Color Contrast**: Meets AA standards for both themes
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper ARIA labels and landmarks
- **Focus Management**: Visible focus indicators

### Implementation Details
```html
<!-- Skip link for keyboard users -->
<a href="#main" class="sr-only">Skip to content</a>

<!-- Proper heading hierarchy -->
<h1 id="about-title">Hi, I'm Abdulmajeed 👋</h1>
<h2 id="projects-title">Projects</h2>

<!-- ARIA labels for interactive elements -->
<button id="theme-toggle" aria-pressed="false">Light Mode</button>
```

## Security Considerations

### Client-Side Security
- **No External Scripts**: Reduces attack surface
- **Input Validation**: Client-side form validation
- **XSS Prevention**: No innerHTML usage, proper text content
- **HTTPS Ready**: All resources work over HTTPS

### Data Handling
- **No Server Communication**: Contact form is demo-only
- **Local Storage**: Only theme preference stored locally
- **No Sensitive Data**: No personal information in code

## Deployment

### Static Hosting
- **GitHub Pages**: Ready for deployment
- **Netlify**: Drag-and-drop deployment
- **Vercel**: Zero-config deployment
- **Any Static Host**: Works with any static file server

### Build Process
- **No Build Step**: Direct file serving
- **No Compilation**: Pure HTML/CSS/JS
- **No Bundling**: Single file per resource type

## Maintenance

### Code Organization
- **Modular CSS**: Logical section grouping
- **Clean JavaScript**: IIFE pattern for scope isolation
- **Documentation**: Comprehensive inline comments

### Future Enhancements
- **PWA Features**: Service worker, manifest
- **Performance Monitoring**: Web Vitals tracking
- **A/B Testing**: Theme preference analytics
- **Content Management**: Dynamic project loading

## Troubleshooting

### Common Issues
1. **Theme not persisting**: Check localStorage support
2. **Images not loading**: Verify file paths and permissions
3. **Styles not applying**: Check CSS file path and syntax
4. **JavaScript errors**: Check browser console for errors

### Debug Tools
- **Browser DevTools**: Inspect elements, debug JavaScript
- **Lighthouse**: Performance and accessibility auditing
- **WAVE**: Web accessibility evaluation

## Version History

### v1.0.0 (Current)
- Initial portfolio implementation
- Dark/light theme system
- Responsive design
- Accessibility features
- Project showcase
- Contact form (demo)

### Future Versions
- v1.1.0: PWA features, offline support
- v1.2.0: Dynamic content loading
- v2.0.0: Backend integration, real contact form
