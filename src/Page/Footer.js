import React , {Component} from 'react'
import './CSS/header.css';

class footer extends Component{
    arrowStyle = {
        cursor: 'pointer'
    };
    render()
    {
        return (
            <footer>
                <div>
                    <img src={require('./CSS/Facsebook.png')} className="share" style={this.arrowStyle}/>
                    <img src={require('./CSS/twetter.png')} className="share"style={this.arrowStyle}/>
                    <img src={require('./CSS/tele.png')} className="share"style={this.arrowStyle}/>
                </div>
                <div>
                    <img src={require('./CSS/Vector-Smart-Object11.png')} className="down"style={this.arrowStyle} style={this.arrowStyle}/>
                    <p className="scroll">SCROLL DOWN</p>
                </div>
            </footer>
        );
    }
}

export default footer ;