import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright &copy; {year} </p>
      <Link to='/'>
        <i className='fab fa-telegram'></i>
      </Link>
      <Link to='/'>
        <i className='fab fa-facebook'></i>
      </Link>
      <Link to='/'>
        <i className='fab fa-github'></i>
      </Link>
      <Link to='/'>
        <i className='fab fa-linkedin'></i>
      </Link>
    </footer>
  );
};

export default Footer;
