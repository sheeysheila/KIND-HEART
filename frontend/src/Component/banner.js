import React, { Component } from 'react'
import './banner.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFacebook,
    faTwitter,
    faInstagram,   
  } from "@fortawesome/free-brands-svg-icons";

  import { FaEnvelope, FaSearchLocation } from 'react-icons/fa';

export default class Banner extends Component{
    render(){
        return(
            <div>
                <div className="alert alert-info alert-dismissible">
                    <div className="location">
                        <div className="find">
                        <p><FaSearchLocation/>Kisumu, Kenya   
                          <a href="https://mail.google.com/mail/u/0/?pli=1#inbox"><FaEnvelope/>info@company.com</a>
                        </p>
                        </div>
                        
                        

                        <div className="Social">
                        <div>
                        <a href="https://github.com/elidahayiemba"
                        className="github social">
                        <FontAwesomeIcon icon={faGithub}  />
                        </a>
                        </div>
                        <div>
                        <a href="https://www.facebook.com/eddy.capron.77"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        </div>
                        <div><a href="https://twitter.com/ayiemba_elidah" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter}  />
                        </a>
                        </div>
                        <div>
                        <a href="https://www.instagram.com/ayiemba_elidah/"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram}  />
                        </a>
                        </div>
                        </div>


                    </div>
                    

                

                </div>
            </div>
        )
    }
}