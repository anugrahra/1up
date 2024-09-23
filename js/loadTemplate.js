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
          updateNavLinksToAbsolute(); // Update after loading template
        })
        .catch(error => {
          console.error("Error loading template:", error);
        });
    }
  }
  
  function updateNavLinksToAbsolute() {
    // Cari semua elemen <a> di dalam navbar
    const navLinks = document.querySelectorAll('nav a');
  
    // Dapatkan base URL dari lokasi root
    const baseURL = window.location.origin;
  
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
  
      // Jika href adalah "/" atau relatif (tidak mulai dengan http/https), buat absolute
      if (href === "/") {
        link.setAttribute('href', baseURL); // Root of the current origin
      } else if (href && !href.startsWith('http')) {
        const absoluteHref = baseURL + (href.startsWith('/') ? href : '/' + href);
        link.setAttribute('href', absoluteHref);
      }
    });
  }
  