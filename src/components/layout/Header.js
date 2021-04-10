import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const links = [
    'News & Gossip',
    'Top Charts',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'J',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  return (
    <header>
      <div className='brandName'>
        <Link to='/' className='nav-link'>
          Lyrics Finder <i className='fas fa-music'></i>
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
