import React, { Component } from 'react';
import './CSS/Media-Training-style.css';
import Text from './mainText';

class media extends Component {
    state = {
        pictures:{}
    };
    componentDidMount() {
        this.callApi()
            .then(res => {
                this.setState({ pictures:res.Media})
            })
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };
    sendRequestHandler = () => {
        alert("Request Sent");
    }
    render() {
        return (
            <main className='mediaMain'>
                <div className='mediaImage'>
                <img src={this.state.pictures.picture}/>
                </div>
                <div className='mediaMid'>
                    <Text />
                    <button onClick={this.sendRequestHandler}>Send Request</button>
                </div>

            </main>
        );
    }

}

export default media;