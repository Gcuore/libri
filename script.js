document.addEventListener('DOMContentLoaded', () => {
  // Animate elements on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.book-card, .ai-container').forEach(el => {
    observer.observe(el);
  });

  // Search functionality
  const searchInput = document.querySelector('.search-input');
  const searchBtn = document.querySelector('.search-btn');

  searchBtn.addEventListener('click', () => {
    if (searchInput.value.trim()) {
      // Simulated search animation
      searchBtn.style.transform = 'scale(0.9)';
      setTimeout(() => {
        searchBtn.style.transform = 'scale(1)';
        alert('Ricerca in corso per: ' + searchInput.value);
      }, 200);
    }
  });

  // Add magical sparkle effect to book cards
  const addSparkle = (element) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    element.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  };

  let intervalId;
  document.querySelectorAll('.book-card').forEach(card => {
    card.addEventListener('mouseover', () => {
      intervalId = setInterval(() => addSparkle(card), 300);
    });

    card.addEventListener('mouseout', () => {
      clearInterval(intervalId);
    });
  });

  // Replace the preview button click handlers with new download menu functionality
  document.querySelectorAll('.preview-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent event bubbling
      
      // Remove any existing active menus
      document.querySelectorAll('.download-menu').forEach(menu => {
        menu.remove();
      });

      const bookCard = e.target.closest('.book-card');
      const bookTitle = bookCard.querySelector('h3').textContent;
      
      // Create download menu
      const menu = document.createElement('div');
      menu.className = 'download-menu';
      menu.innerHTML = `
        <button class="download-btn" data-format="epub">
          <svg viewBox="0 0 24 24">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
          </svg>
          Download EPUB
        </button>
        <button class="download-btn" data-format="pdf">
          <svg viewBox="0 0 24 24">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
          </svg>
          Download PDF
        </button>
        <button class="download-btn" data-format="txt">
          <svg viewBox="0 0 24 24">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
          </svg>
          Download MOBI
        </button>
        <button class="download-btn" data-format="mobi">
          <svg viewBox="0 0 24 24">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
          </svg>
          Download MOBI
        </button>
      `;

      bookCard.appendChild(menu);
      
      // Animate menu appearance
      requestAnimationFrame(() => {
        menu.classList.add('active');
      });

      // Add click handlers for download buttons
      menu.querySelectorAll('.download-btn').forEach(downloadBtn => {
        downloadBtn.addEventListener('click', (e) => {
          const format = e.target.closest('.download-btn').dataset.format;
          const downloadBtn = e.target.closest('.download-btn');
          
          if (bookTitle === 'Il Prigioniero di Azkaban') {
            if (format === 'epub') {
              window.location.href = 'https://github.com/Gcuore/libri/raw/refs/heads/main/Harry%20Potter%20e%20il%20Prigioniero%20di%20Azkaban%203%20(J.K.%20Rowling)%20(Z-Library).epub';
            } else if (format === 'pdf') {
              window.location.href = 'https://github.com/Gcuore/libri/raw/refs/heads/main/Harry%20Potter%20e%20il%20Prigioniero%20di%20Azkaban%203%20(J.K.%20Rowling)%20(Z-Library).pdf';
            } else if (format === 'mobi') {
              window.location.href = 'https://github.com/Gcuore/libri/raw/refs/heads/main/Harry%20Potter%20e%20il%20Prigioniero%20di%20Azkaban%203%20(J.K.%20Rowling)%20(Z-Library).mobi';
            } else if (format === 'mobi') {
              window.location.href = 'https://github.com/Gcuore/libri/raw/refs/heads/main/Harry%20Potter%20e%20il%20Prigioniero%20di%20Azkaban%203%20(J.K.%20Rowling)%20(Z-Library).mobi';
            }
          } else {
            alert(`Download iniziato per ${bookTitle} in formato ${format.toUpperCase()}`);
          }
          menu.remove();
        });
      });

      // Close menu when clicking outside
      const closeMenu = (e) => {
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
          menu.remove();
          document.removeEventListener('click', closeMenu);
        }
      };

      document.addEventListener('click', closeMenu);
    });
  });

  // AI Recommendations
  const recommendationsBtn = document.querySelector('.get-recommendations');
  recommendationsBtn.addEventListener('click', () => {
    // Simulated AI recommendation process
    recommendationsBtn.textContent = 'Analisi in corso...';
    recommendationsBtn.disabled = true;

    setTimeout(() => {
      recommendationsBtn.textContent = 'Ottieni Suggerimenti Personalizzati';
      recommendationsBtn.disabled = false;
      alert('Basandoci sui tuoi interessi, ecco alcuni suggerimenti personalizzati...');
    }, 2000);
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Add hover effect to book cards
  const bookCards = document.querySelectorAll('.book-card');
  bookCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
});
