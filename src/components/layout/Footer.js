import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright &copy; {year} </p>
      <Link to={{ pathname: 'https://t.me/mern_dev' }} target='_blank'>
        <i className='fab fa-telegram'></i>
      </Link>
      <Link
        to={{ pathname: 'https://www.facebook.com/abdumalik.hojimirzaev' }}
        target='_blank'
      >
        <i className='fab fa-facebook'></i>
      </Link>
      <Link
        to={{ pathname: 'https://github.com/AbdumalikDev' }}
        target='_blank'
      >
        <i className='fab fa-github'></i>
      </Link>
      <Link
        to={{
          pathname:
            'https://www.linkedin.com/in/abdumalik-khojimirzaev-4216a3202',
        }}
        target='_blank'
      >
        <i className='fab fa-linkedin'></i>
      </Link>
    </footer>
  );
};

export default Footer;
