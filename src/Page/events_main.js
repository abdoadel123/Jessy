import React , {Component} from 'react';
import '../Page/CSS/event_style.css';

class main extends Component{
    render()
    {
        return (
            <main className="event_main">
                <div className="main_left"> 
                    <div >  <img src={require("../Page/CSS/Photo1.png")}/>    </div> 
                    <div className="bootom_text"> 
                        <h1>Innovative Young Arabse</h1>
                        <h5>
                            with over 15 years of experience , El Murr is a lebanes-American journalist who has reported for several international TV networks including BBC and Aljazeera before moving to UAE in 2012 .
                        </h5>  
                    </div>
                </div>
                <div className="main_right">
                    <div> <div><h1>21-2-2018</h1> </div><div><h2>Innovative Young Arabse</h2></div> </div>
                    <div> <div><h1>21-2-2018</h1> </div><div><h2>Innovative Young Arabse</h2></div> </div>
                    <div> <div><h1>21-2-2018</h1> </div><div><h2>Innovative Young Arabse</h2></div> </div>
                    <div> <div><h1>21-2-2018</h1> </div><div><h2>Innovative Young Arabse</h2></div> </div>
                    <div> <div><h1>21-2-2018</h1> </div><div><h2>Innovative Young Arabse</h2></div> </div>
                    <div> <div><h1>21-2-2018</h1> </div><div><h2>Innovative Young Arabse</h2></div> </div>
                </div>
            </main>
        );
    }
}
export default main;