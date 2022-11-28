import * as React from 'react';

export default function Footer() {
  function handleClick() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return (
    <footer id="site-footer">
      <div id="main-footer-wrapper">
        <span id="copyright-details">
          © {new Date().getFullYear()} designed & built by Andrew Barbour
        </span>
        <div id="back-to-top-wrapper">
          <a id="back-to-top-link" onClick={handleClick}>
            ↑ To Top
          </a>
        </div>
      </div>
    </footer>
  );
}
