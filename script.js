// check for saved theme and icon on page load
if (localStorage.getItem('theme') === 'night') {
    document.documentElement.classList.add('night-mode');
    document.getElementById('toggle-mode').textContent = 'dark_mode';
} else {
    document.getElementById('toggle-mode').textContent = 'light_mode';
}

// toggle night mode and save preference
const toggleButton = document.getElementById('toggle-mode');
toggleButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('night-mode');
    
    if (document.documentElement.classList.contains('night-mode')) {
        localStorage.setItem('theme', 'night');
        toggleButton.textContent = 'dark_mode';
        localStorage.setItem('icon', 'dark_mode'); 
    } else {
        localStorage.setItem('theme', 'day');
        toggleButton.textContent = 'light_mode';
        localStorage.setItem('icon', 'light_mode');
    }
});

// restore icon from localStorage when the page is reloaded
const savedIcon = localStorage.getItem('icon');
if (savedIcon) {
    document.getElementById('toggle-mode').textContent = savedIcon
}

document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('#about');
    const leftSection = document.querySelector('#left');
    const rightSection = document.querySelector('#right');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('active');
                leftSection.classList.add('active');
                rightSection.classList.add('active');
            } else {
                aboutSection.classList.remove('active');
                leftSection.classList.remove('active');
                rightSection.classList.remove('active');
            }
        });
    }, {
        threshold: 0.1
    });
  
    observer.observe(aboutSection);
});


document.addEventListener('DOMContentLoaded', function() {
    const arrow = document.querySelector('#arrow-down span');
    let isScrolling;

    window.addEventListener('scroll', function() {
        arrow.style.opacity = '0';

        window.clearTimeout(isScrolling);

        isScrolling = setTimeout(function() {
            arrow.style.opacity = '1';
        }, 250); 
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const span = document.querySelector('#name span');
  

    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;

      const rotation = scrollPosition * 0.5;
  
      span.style.transform = `rotate(${rotation}deg)`;
    });
  });





