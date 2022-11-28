import * as React from 'react';

export function Navbar() {
  const links: string[] = ['home', 'projects', 'writing', 'resume', 'contact'];

  return (
    <nav id="navbar">
      <header id="main-site-header">
        <h1>Andrew Barbour</h1>
        <h2>Software Engineer</h2>
      </header>
      <nav id="site-navbar">
        {links.map((link: string) => {
          const linkPath = link === 'home' ? '' : link;
          return (
            <a href={`https://andrewbarbour.com/${linkPath}`}>
              {link[0].toUpperCase() + link.slice(1)}
            </a>
          );
        })}
      </nav>
    </nav>
  );
}

export default Navbar;
