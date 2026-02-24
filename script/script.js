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