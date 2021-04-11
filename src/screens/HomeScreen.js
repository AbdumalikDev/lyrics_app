import React, { Fragment } from 'react';
import Search from '../components/tracks/Search';
import Tracks from '../components/tracks/Tracks';

const HomeScreen = () => {
  return (
    <Fragment>
      <section>
        <h1>Lyrics Finder</h1>
        <p className='description'>
          Find lyrics for any song - search by track or artist
        </p>

        <Search />
      </section>

      <Tracks />
    </Fragment>
  );
};

export default HomeScreen;
