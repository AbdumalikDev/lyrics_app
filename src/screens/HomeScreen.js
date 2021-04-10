import React, { Fragment } from 'react';
import Tracks from '../components/tracks/Tracks';

const HomeScreen = () => {
  return (
    <Fragment>
      <section>
        <h1>Lyrics Finder</h1>
        <p className='description'>
          Find lyrics for any song - search by track or artist
        </p>
        <form className='search-form' action='' method='post'>
          <select className='dropdown' name='search-option'>
            <option value='Tracks'>Tracks</option>
            <option value='Artists'>Artists</option>
          </select>
          <input
            className='search-home'
            type='search'
            name='search'
            placeholder='Search artist, track or lyrics'
          />
          <button className='search-button' type='submit'>
            Go
          </button>
        </form>
      </section>

      <Tracks />
    </Fragment>
  );
};

export default HomeScreen;
