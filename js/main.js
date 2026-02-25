// Animate headline letter by letter
const headline = document.querySelector('.hero-headline');
const text = headline.innerHTML;

// Split text into characters while preserving HTML tags
const lines = text.split('<br>');
let charIndex = 0;

headline.innerHTML = lines.map(line => {
  // Handle the underline-gold span specially
  if (line.includes('underline-gold')) {
    const parts = line.split('<span class="underline-gold">');
    const before = parts[0];
    const rest = parts[1].split('</span>');
    const underlined = rest[0];
    const after = rest[1] || '';

    return (
      before.split('').map((char) => {
        if (char === ' ') return ' ';
        const delay = charIndex++ * 0.03;
        return `<span class="char" style="animation-delay: ${delay}s">${char}</span>`;
      }).join('') +
      '<span class="underline-gold">' +
      underlined.split('').map((char) => {
        if (char === ' ') return ' ';
        const delay = charIndex++ * 0.03;
        return `<span class="char" style="animation-delay: ${delay}s">${char}</span>`;
      }).join('') +
      '</span>' +
      after.split('').map((char) => {
        if (char === ' ') return ' ';
        const delay = charIndex++ * 0.03;
        return `<span class="char" style="animation-delay: ${delay}s">${char}</span>`;
      }).join('')
    );
  } else {
    return line.split('').map((char) => {
      if (char === ' ') return ' ';
      const delay = charIndex++ * 0.03;
      return `<span class="char" style="animation-delay: ${delay}s">${char}</span>`;
    }).join('');
  }
}).join('<br>');

// Fade-up on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Stagger siblings
document.querySelectorAll('.services-grid, .work-grid').forEach(grid => {
  grid.querySelectorAll('.fade-up').forEach((card, i) => {
    card.style.transitionDelay = `${i * 80}ms`;
  });
});
