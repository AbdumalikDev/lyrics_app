import axios from 'axios';
import React, { Component } from 'react';

class LyricScreen extends Component {
  state = {
    track: {},
    lyrics: {},
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.id}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        // this.setState({ track: res.data.message.body.track });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <section>
        <h2>Bruno Mars, Anderson, Paak and Silk Sonic - Leave The Door Open</h2>
        <p>Say baby, say baby, say baby</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Consectetur adipisicing elit.</p>
        <p>Quasi maiores fugit consequatur</p>
        <p>Nisi hic iste quis aperiam necessitatibus et,</p>
        <p>Autem laborum ipsum adipisci</p>
        <p>Accusantium officia voluptatum odio,</p>
        <p>Iusto quam unde nobis</p>
        <p>Temporibus tempora similique natus saepe</p>
        <p>Asperiores ducimus praesentium aliquid.</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Consectetur adipisicing elit.</p>
        <p>Quasi maiores fugit consequatur</p>
        <p>Nisi hic iste quis aperiam necessitatibus et,</p>
        <p>Autem laborum ipsum adipisci</p>
        <p>Accusantium officia voluptatum odio,</p>
        <p>Iusto quam unde nobis</p>
        <p>Temporibus tempora similique natus saepe</p>
        <p>Asperiores ducimus praesentium aliquid.</p>
        <p className='author'>
          Written by <small> Bill Withers</small>
        </p>
      </section>
    );
  }
}

export default LyricScreen;
