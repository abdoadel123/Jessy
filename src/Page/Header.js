import React, { Component } from 'react';
import './CSS/header.css';

const arrowStyle = {
    cursor: 'pointer'
};

const header = (props) => {
    return (
        <header>
            <div><img src={require('./CSS/Vector-Smart-Object8.png')} className="logo" style={arrowStyle} /></div>
            <div><p className="titel">{props.title}</p></div>
            <div ><img src={require('./CSS/Vector-Smart-Object9.png')} className="menue" style={arrowStyle} /></div>
        </header>
    );
}
export default header;