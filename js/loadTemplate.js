function loadHTMLTemplate(selector, file) {
    const element = document.querySelector(selector);
    if (element) {
      fetch(file)
        .then(response => {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error("Template file not found: " + file);
          }
        })
        .then(data => {
          element.innerHTML = data;
          updateNavLinksToAbsolute();
        })
        .catch(error => {
          console.error("Error loading template:", error);
        });
    }
  }
  
  function updateNavLinksToAbsolute() {
    // Cari semua elemen <a> di dalam navbar
    const navLinks = document.querySelectorAll('nav a');
  
    // Dapatkan base URL dari lokasi root (origin) tanpa path tambahan
    const baseURL = window.location.origin;
  
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
  
      // Jika href bukan URL absolut dan tidak dimulai dengan "/"
      if (href && !href.startsWith('http') && !href.startsWith('/')) {
        // Gabungkan baseURL dengan href untuk membuatnya absolute
        const absoluteHref = baseURL + '/' + href;
        link.setAttribute('href', absoluteHref);
      } else if (href && href.startsWith('/')) {
        // Jika href sudah dimulai dengan "/", tambahkan baseURL di depan
        const absoluteHref = baseURL + href;
        link.setAttribute('href', absoluteHref);
      }
    });
  }
  