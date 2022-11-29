import React , {Component} from 'react'
import './chan.css'
import chan from '../../src/images/chan.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFacebook,
    faTwitter,
    faInstagram,   
  } from "@fortawesome/free-brands-svg-icons";



export default class Chan extends Component{
    render(){
        return(
            <div>
                <div className="chan">
                    <div className="chanpic">
                    <img src= {chan} alt="none" width="400px" height="400px"/>
                    </div>
                    <div className ="chanwords">
                        <h1>Sandy Chan</h1>
                        <h3>Founder Partner</h3>
                      <p>Lorem Ipsum dolor sit amet, consectetur<br></br> adipsicing kengan omeg 
                        kohm tokito <br></br>Professional charity theme based<br></br>
                        <br></br>


                       Sed leo nisl, posuere at molestie ac, suscipit<br></br> auctor mauris. Etiam quis metus

                      </p>
                      <div className="social">
                      <div>
                        <a href="https://github.com/elidahayiemba"
                        className="github social">
                        <FontAwesomeIcon icon={faGithub} size="2x"  />
                        </a>
                        </div>
                        <div>
                        <a href="https://www.facebook.com/eddy.capron.77"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        </div>
                        <div><a href="https://twitter.com/ayiemba_elidah" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter}  size="2x"/>
                        </a>
                        </div>
                        <div>
                        <a href="https://www.instagram.com/ayiemba_elidah/"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram}  size="2x"/>
                        </a>
                        </div>


                      </div>

                    </div>

                </div>

            </div>
        )
    }
}