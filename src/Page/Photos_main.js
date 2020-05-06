import React,{Component} from 'react';
import  '../Page/CSS/photos_style.css';


class Photo_main extends Component
{
    render()
    {
       return(
        <main className="photo_main">
            <div>
                <img src={require("../Page/CSS/jes1.png")}/>
                <img src={require("../Page/CSS/jes1.png")}/>
                <img src={require("../Page/CSS/jes1.png")}/>
                <img src={require("../Page/CSS/jes1.png")}/>
            </div>
        </main>
       );
    }
}
export default Photo_main;