import React, { Component } from 'react'
import './CSS/vedioMain.css';
import SlideOne from './slider/slideOne';
import SlideTwo from './slider/slideTwo';
import SlideThree from './slider/slideThree';
let arrowStyle
class main extends Component {
    constructor() {
        super();
        arrowStyle = {
            cursor: 'pointer'
        };
        this.state = {
            slideCount: 1
        };
    };
    render() {
        return (
            <main className="vedioMain">
                <div className="vedSlide">
                    <img src={require('./CSS/arrow.png')} onClick={this.previousSlide} className="arrowTop" style={arrowStyle} />
                    {this.state.slideCount === 1 ? <SlideOne /> : null}
                    {this.state.slideCount === 2 ? <SlideTwo /> : null}
                    {this.state.slideCount === 3 ? <SlideThree /> : null}
                    <img src={require('./CSS/arrow2.png')} onClick={this.nextSlide} className="arrowTop" style={arrowStyle} />
                </div>
            </main>
        );
    }
    nextSlide = () => {
        if (this.state.slideCount === 3)
            this.setState({ slideCount: 1 });
        else
            this.setState({ slideCount: this.state.slideCount + 1 });
    }

    previousSlide = () => {
        if (this.state.slideCount === 1)
            this.setState({ slideCount: 3 });
        else
            this.setState({ slideCount: this.state.slideCount - 1 });
    }
}
export default main;