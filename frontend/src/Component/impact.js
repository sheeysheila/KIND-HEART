import React ,{Component} from 'react'
import './impact.css'

export default class Impact extends Component{
    render(){
        return(
            <div>
                <section className="impact">
                <div classsName="save">
                    <h2>Make an Impact. <br></br>Save Lives</h2>
                    <div className="savelives">
                        <div className="donation">
                        <a href="#">Make a Donation</a>

                        </div>
                     
                     <button><a href="">Become a Volunteer</a></button>

                    </div>

                </div>

                </section>
                
            </div>
        )
    }
}