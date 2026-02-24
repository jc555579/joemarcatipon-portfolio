// Simple fade-in effect for the hero content
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-content');
  const image = document.querySelector('.hero-image');

  hero.style.opacity = '0';
  hero.style.transform = 'translateX(-20px)';
  image.style.opacity = '0';

  setTimeout(() => {
    hero.style.transition = 'all 0.8s ease-out';
    hero.style.opacity = '1';
    hero.style.transform = 'translateX(0)';

    image.style.transition = 'all 1s ease-out 0.2s';
    image.style.opacity = '1';
  }, 100);
});

document.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress');

  const animateBars = () => {
    progressBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        const targetWidth = bar.getAttribute('style').split('width: ')[1];
        bar.style.width = targetWidth;
      }
    });
  };

  // Run on scroll
  window.addEventListener('scroll', animateBars);
  // Run once on load
  setTimeout(animateBars, 300);
});