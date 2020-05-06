import React, {Component} from 'react';
import './CSS/Media-Training-style.css';
import Text from './mainText'

class pub_speaking extends Component{
    sendRequestHandler = () =>{
        console.log("Request Sent");       
    }
    render(){
        return(
            <main className = 'mediaMain'>
                <div className = 'speakingImage'>
                <img src = {require('./CSS/Speaker.png')}/>
                </div>
                <div className = 'mediaMid'>
                <Text/>
                <button onClick = {this.sendRequestHandler}>Send Request</button>
                </div>

            </main>    
        );
    }

}

export default pub_speaking;