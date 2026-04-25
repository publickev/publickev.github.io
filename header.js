// header.js — inject the shared site header
(function () {
  const links = [
    { href: 'https://www.instagram.com/kevinwzhang', icon: 'https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico', label: 'Instagram' },
    { href: 'https://www.linkedin.com/in/kevwz/', icon: 'https://static.licdn.com/aero-v1/sc/h/akt4ae504epesldzj74dzred8', label: 'LinkedIn' },
    { href: 'https://github.com/kevwzhang', icon: 'https://github.githubassets.com/favicons/favicon.svg', label: 'GitHub' },
  ];

  const html = `
    <header class="site-header">
      <a href="index.html">
        <img class="avatar" src="images/bitmoji_square_transparent.png" alt="Kevin Zhang">
      </a>
      <a href="index.html" class="header-name">Kevin Zhang</a>
      <nav class="header-links">
        ${links.map(l => `
          <a href="${l.href}" class="header-link" target="_blank" rel="noopener">
            <img src="${l.icon}" alt="${l.label}">
            <span>${l.label}</span>
          </a>`).join('')}
      </nav>
    </header>`;

  document.body.insertAdjacentHTML('afterbegin', html);
})();
