import * as React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import '../App.css';

export function Navbar() {
  const links: string[] = ['projects', 'writing', 'resume', 'contact'];

  return (
    <nav id="navbar">
      <header id="main-site-header">
        <Link to="/" id="home-link">
          <h1>Andrew Barbour</h1>
        </Link>
        <h2>Software Engineer</h2>
      </header>
      <nav id="site-navbar">
        {links.map((link: string) => {
          const linkPath = link === 'home' ? '/' : `/${link}`;
          return (
            <Link to={linkPath} key={link}>
              {link[0].toUpperCase() + link.slice(1)}
            </Link>
          );
        })}
      </nav>
      <div className="dark-mode">
        <svg
          enable-background="new 0 0 512 512"
          height="512px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          width="50px"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M349.852,343.15c-49.875,49.916-131.083,49.916-181,0c-49.916-49.918-49.916-131.125,0-181.021  c13.209-13.187,29.312-23.25,47.832-29.812c5.834-2.042,12.293-0.562,16.625,3.792c4.376,4.375,5.855,10.833,3.793,16.625  c-12.542,35.375-4,73.666,22.25,99.917c26.209,26.228,64.5,34.75,99.916,22.25c5.792-2.062,12.271-0.582,16.625,3.793  c4.376,4.332,5.834,10.812,3.771,16.625C373.143,313.838,363.06,329.941,349.852,343.15z M191.477,184.754  c-37.438,37.438-37.438,98.354,0,135.771c40,40.021,108.125,36.416,143-8.168c-35.959,2.25-71.375-10.729-97.75-37.084  c-26.375-26.354-39.333-61.771-37.084-97.729C196.769,179.796,194.039,182.192,191.477,184.754z"
            fill="#1D1D1B"
          />
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
