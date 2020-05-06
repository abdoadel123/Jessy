import React, { Component } from 'react';
import './CSS/Bio.css';
import IMG1 from './slider/bioSide1';
import IMG2 from './slider/bioSide2';
import IMG3 from './slider/bioSide3';
import IMG4 from './slider/bioSide4';
import IMG5 from './slider/bioSide5';

let arrowStylee
class Left extends Component {
    constructor() {
        super();
        arrowStylee = {
            cursor: 'pointer'
        };
        this.state = {
            slideCount: 1
        };
    };
    render() {
        return (
            <div className="left">
                <img src={require('./CSS/arrow.png')} className="arrowTope" onClick={this.previousSlide} style={arrowStylee} />
                <div className="vedSlidee">
                    {this.state.slideCount === 1 ? <IMG1/> : null}
                    {this.state.slideCount === 2 ? <IMG2/> : null}
                    {this.state.slideCount === 3 ? <IMG3/> : null}
                    {this.state.slideCount === 4 ? <IMG4/> : null}
                    {this.state.slideCount === 5 ? <IMG5/> : null}
                </div>
                <img src={require('./CSS/arrow2.png')} className="arrowDowne" onClick={this.nextSlide} style={arrowStylee} />
            </div>
        );
    }
    nextSlide = () => {
        if (this.state.slideCount === 5)
            this.setState({ slideCount: 1 });
        else
            this.setState({ slideCount: this.state.slideCount + 1 });
    }

    previousSlide = () => {
        if (this.state.slideCount === 1)
            this.setState({ slideCount: 5 });
        else
            this.setState({ slideCount: this.state.slideCount - 1 });
    }
    
}


class Text extends Component {
    render() {
        return (
            <div className="txt">
                <hr size="1" width="50" className="beforYearHr" />
                <p className="texte">2001</p>
                <hr size="2" width="50" className="underYearHr" />
                <br />
                <p className="texte">
                    El Murr currently produces and presents Sky News Arabia’s daily segment Taghreedat Al Sabah which highlights portraits of
                    inspirational young Arabs who have succeeded in making an impact in our digital world.
                </p>
                <br />
                <br />
            </div>
        );
    }
}


class Right extends Component {
    render() {
        return (
            <div className="right">
                <Text />
                <Text />
                <Text />
                <Text />
            </div>
        );
    }
}


class main extends Component {
    render() {
        return (
            <main className="bioMain">
                <Left />
                <Right />
            </main>
        );
    }
}
export default main;
