import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';

class Search extends Component {
  state = {
    trackTitle: '',
    dropDownValue: 'Tracks',
  };

  findTrack = (dispatch, e) => {
    e.preventDefault();

    const searchType =
      this.state.dropDownValue === 'Tracks' ? 'q_track' : 'q_artist';

    axios
      .get(
        `/track.search?${searchType}=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        dispatch({
          type: 'SEARCH_TRACKS',
          payload: res.data.message.body.track_list,
        });

        this.setState({ trackTitle: '' });
      })
      .catch((err) => console.log(err));
  };

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onDropdownChange = (e) => {
    this.setState({ dropDownValue: e.target.value });
  };

  render() {
    const { trackTitle, dropDownValue } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <form
              onSubmit={this.findTrack.bind(this, dispatch)}
              className='search-form'
            >
              <select
                onChange={this.onDropdownChange}
                value={dropDownValue}
                className='dropdown'
                name='dropDownValue'
              >
                <option value='Tracks'>Tracks</option>
                <option value='Artists'>Artists</option>
              </select>
              <input
                className='search-home'
                type='text'
                placeholder='Search artist, track or lyrics'
                name='trackTitle'
                value={trackTitle}
                onChange={this.onInputChange}
              />
              <button className='search-button' type='submit'>
                Go
              </button>
            </form>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
