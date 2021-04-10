import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Track from './Track';

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { track_list, heading } = value;
          console.log(track_list);
          return track_list.length === 0 || track_list === undefined ? (
            <Spinner />
          ) : (
            <section>
              <h2>
                {heading} <i className='fas fa-globe'></i>
              </h2>
              <div className='track-list'>
                {track_list.map((item, index) => {
                  return (
                    <Track
                      key={item.track_id}
                      track={item.track}
                      index={index}
                    />
                  );
                })}
              </div>
            </section>
          );
        }}
      </Consumer>
    );
  }
}
export default Tracks;
