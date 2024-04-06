import React from 'react'
import './Contact.css';

function Conact() {
  return (
    <div>

<div id="contact">
    <div className="container">
        <div className="row">
            <div className="contact-left">
                <h1 className="sub-title">Contact <span id='topic1'>I</span><span id='topic2'>nterior</span></h1>
                <p><i className="fa-solid fa-paper-plane"></i>Interior123@gmail.com</p>
                <p><i className="fa-solid fa-square-phone"></i>9874563210</p>
                <div className="socialicon">
                    
                    <a href="" target="_blank" placeholder='shop address'><i class="fa-solid fa-location-dot"></i></a>
                    <a href="" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                    <a href="" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                </div>
                
            </div>

            <div className="contact-right">
                <form name="submit-to-google-sheet">
                    <input type="text" name="Name" placeholder="Your Name" required/>
                    <input type="email" name="Email" placeholder="Your E-mail" required/>
                    <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                    <button className="btn1" type="submit">Submit</button>
                </form>
                <span id="msg"></span>
            </div>
        </div>
        </div>
        </div>
        
        
    





    </div>
  )
}

export default Conact;