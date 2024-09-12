document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.getElementById('inverted-cursor');
    
    document.addEventListener('mousemove', (e) => {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      const mouseX = e.pageX - scrollX;
      const mouseY = e.pageY - scrollY;

      customCursor.style.left = `${mouseX - customCursor.offsetWidth / 2}px`;
      customCursor.style.top = `${mouseY - customCursor.offsetHeight / 2}px`;
    });
  
    const hoverTargets = document.querySelectorAll('#big-btn, #navbar a, #navbar span');
  
    hoverTargets.forEach(target => {
      target.addEventListener('mouseenter', () => {
        customCursor.classList.add('grow');
      });
  
      target.addEventListener('mouseleave', () => {
        customCursor.classList.remove('grow');
      });
    });
  });
  
