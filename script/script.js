document.addEventListener('DOMContentLoaded', () => {
  // --- Hamburger Menu Logic ---
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.nav-links');

  if (menu) {
    menu.addEventListener('click', function () {
      menu.classList.toggle('is-active');
      menuLinks.classList.toggle('active');
    });
  }

  // --- Hero Animation Logic ---
  const hero = document.querySelector('.hero-content');
  const image = document.querySelector('.hero-image');

  if (hero && image) {
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
  }

  // --- Skills Progress Bar Animation ---
  const progressBars = document.querySelectorAll('.progress');

  const animateBars = () => {
    progressBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        // Only trigger once to avoid flickering
        if (!bar.dataset.animated) {
          const style = bar.getAttribute('style');
          if (style && style.includes('width:')) {
            const targetWidth = style.split('width: ')[1];
            bar.style.width = targetWidth;
            bar.dataset.animated = "true";
          }
        }
      }
    });
  };

  window.addEventListener('scroll', animateBars);
  setTimeout(animateBars, 300);
});