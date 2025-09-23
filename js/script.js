// Greeting based on time of day
(function greet() {
  const hours = new Date().getHours();
  const h1 = document.querySelector('#about h1');
  if (!h1) return;
  let greeting = 'Hello';
  if (hours < 12) greeting = 'Good morning';
  else if (hours < 18) greeting = 'Good afternoon';
  else greeting = 'Good evening';
  h1.textContent = `${greeting}, I'm Abdulmajeed 👋`;
})();

// Theme toggle with persistence
(function theme() {
  const body = document.body;
  const btn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  // Force dark as default unless user explicitly saved a preference
  const mode = saved || 'dark';
  body.classList.toggle('dark', mode === 'dark');
  body.classList.toggle('light', mode === 'light');
  const isDark = mode === 'dark';
  btn.setAttribute('aria-pressed', isDark);
  btn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  btn.addEventListener('click', () => {
    const nextIsDark = !body.classList.contains('dark');
    body.classList.toggle('dark', nextIsDark);
    body.classList.toggle('light', !nextIsDark);
    btn.setAttribute('aria-pressed', nextIsDark);
    btn.textContent = nextIsDark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', nextIsDark ? 'dark' : 'light');
  });
})();

// Simple form validation feedback (no backend submit)
(function form() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      status.textContent = 'Please fill out all required fields correctly.';
      status.style.color = '#ef4444';
      return;
    }
    status.textContent = 'Thanks! Your message would be sent (demo only).';
    status.style.color = 'var(--primary)';
    form.reset();
  });
})();

// Set current year in footer
(function year() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();

