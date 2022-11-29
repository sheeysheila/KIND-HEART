import React ,{Component} from 'react';
import './charity.css'
import hands from '../../src/images/hands.png'
import heart from '../../src/images/heart.png'
import receive from '../../src/images/receive.png'
import scholarship from '../../src/images/scholarship.png'


export default class Charity extends Component{
    render(){
        return(
            <div>
                <section>
                    <div className="charity">
                        <h1>Welcome to Kind Heart Charity</h1>
                        <div className="charity2">
                            <div className="charity3">
                            <img src= {hands} alt="none" width="" height=""/>
                              <p><span>Become</span> a Volunteer</p>
                            </div>

                            <div className="charity4">
                            <img src= {heart} alt="none" width="" height=""/>
                              <p>Caring <span>Earth</span></p>
                            </div>

                            <div className="charity5">
                            <img src= {receive} alt="none" width="" height=""/>
                              <p><span>Make</span> a Donation</p>
                            </div>
                            <div className="charity6">
                            <img src= {scholarship} alt="none" width="" height=""/>
                              <p>Scholarship <span>Program</span></p>
                            </div>

                        </div>

                    </div>
                </section>
            </div>
        )
    }
}