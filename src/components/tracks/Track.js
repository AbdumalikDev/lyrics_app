import React from 'react';
import { Link } from 'react-router-dom';

const Track = ({ track, index }) => {
  return (
    <div className='track'>
      <span> {index + 1} </span>
      <Link to={`lyrics/track/${track.track_id}`}>
        {track.track_name}
        <small> {track.artist_name} </small>
      </Link>
    </div>
  );
};

export default Track;
