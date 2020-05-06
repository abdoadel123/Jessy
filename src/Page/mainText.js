import React, { Component } from 'react';
import './CSS/text.css';
// import Intro from './introMain';
// import Aux from './globalClass/Aux'

class text extends Component {
  state={
    texts:{}
  };
  componentDidMount() {
    this.callApi()
      .then(res => {
        this.setState({ texts:res.Media})})
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  render() {
    return (
      <div >
        <div className='text1'>
          <p>JESSY EL MURR</p>
        </div>
        <div className='text2'>
          <p>International Journalist & Speaker</p>
        </div>
        <img src={require('./CSS/load.png')} className='smallImg' />
        <div className='text3'>
          {/* <p>Jessy El Murr is a multimedia journalist, speaker and</p>
          <p>moderator with a special interest in social media</p>
          <p>and arab youth.</p> */}
          {/* <p>{this.state.texts}</p> */}
          <p>{this.state.texts.text1}</p>
          <p>{this.state.texts.text2}</p>
          <p>{this.state.texts.text3}</p>
        </div>
      </div>

    );
  }
}

export default text;