import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/layout/Spinner';

class LyricScreen extends Component {
  state = {
    track: {},
    lyrics: {},
  };

  componentDidMount() {
    axios
      .get(
        `/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        this.setState({ track: res.data.message.body.track });
        console.log(res.data);

        return axios
          .get(
            `/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
          )
          .then((res) => {
            console.log(res.data);
            this.setState({ lyrics: res.data.message.body.lyrics });
          });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { track, lyrics } = this.state;
    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return <Spinner />;
    } else {
      return (
        <section>
          <h2> {track.track_name} </h2>
          <p className='lyrics'> {lyrics.lyrics_body} </p>

          <p className='author'>
            Written by <small> {track.artist_name} </small>
          </p>
          <Link
            to={{ pathname: track.track_share_url }}
            target='_blank'
            className='redirect'
          >
            Go to the Original page <i className='fas fa-share'></i>
          </Link>
        </section>
      );
    }
  }
}

export default LyricScreen;
