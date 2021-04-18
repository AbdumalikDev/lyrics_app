import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const alphabet = Array.from(Array(26))
    .map((e, i) => i + 65)
    .map((x) => String.fromCharCode(x));

  const links = ['News', 'Top Charts', ...alphabet];

  return (
    <header>
      <div className='brandName'>
        <Link to='/' className='nav-link'>
          Mix Lyrics <i className='fas fa-music'></i>
        </Link>
      </div>
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index} className='nav-item'>
              <Link to='/' className='nav-link'>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
