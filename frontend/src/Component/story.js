import React ,{Component} from "react";
import './story.css'
import story from '../../src/images/story.jpg'


export default class Story extends Component{
    render(){
        return(
            <div>
                <section className="main">
                    <div className="story">
                    <img src= {story} alt="none" width="550px" height="550px"/>
                     <div className="heart">
                     <h1>Our Story<br></br><span>Kind Heart Charity, Non-Profit Organization</span></h1>
                     <p>This is a Bootstrap 5.2.2 CSS template for 
                        charity <br></br>organization websites. You can feel
                        free to use it. Please tell <br></br>your friends about TemplateMo website. Thank you.</p>

                        <div className="mission">
                        <h2>Our Mission</h2>
                        <p>Sed leo nisl, posuere 
                            at <br></br>molestie ac, suscipit auctor quis metus</p>
                        <ul>
                            <li>Charity theme</li>
                            <li>Semantic html</li>
                        </ul>
                        <div className="donations">
                            <h1>2009 <br></br>Founded<br></br><br></br>120B <br></br>Donations</h1>
                        </div>
                    </div>

                    </div>
                    </div>
                    

                </section>
            </div>
        )
    }
}