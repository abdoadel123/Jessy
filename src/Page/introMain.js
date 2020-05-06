import React, {Component} from 'react';
import './CSS/Intro-style.css';
import Text from './mainText'

class intro extends Component{
    render(){
        return(
            <main className="introMain">
                <div className = 'introMid'>
                   <Text/>
                </div>
                <div class = "introImage">
                   <img src = {require('./CSS/intro.png')}/>
                </div>
                
            </main>    
        );
    }

}

export default intro;