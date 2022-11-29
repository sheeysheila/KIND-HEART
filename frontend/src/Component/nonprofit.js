import React ,{ Component } from "react";
import './nonprofit.css'
import slide1 from '../../src/images/slide1.jpg'
import slide2 from '../../src/images/slide2.jpg'
import slide3 from '../../src/images/slide3.jpg'

export default class Nonprofit extends Component {
    render(){
        return(
            <div>
                <main>
                    <section>
                        <div className="slideshow-container">

                            <div className="myslides fade">
                                <div className="numbertext"></div>
                                <img src= {slide2} alt="none" width="1300px" height="600px"/>
                                <div className="text">
                                    <h1>Non-Profit</h1>
                                    <p>You can Support Us To Grow More</p>
                                </div>
                            </div>

                            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                            <a class="next" onclick="plusSlides(1)">&#10095;</a>
                        </div>
                        
                        

                    

                    </section>
                </main>
            </div>

        )
    }
}


