import React from 'react';
import './Service.css';
import img1 from '/React/home-interior/src/assert/10.webp';
import img2 from '/React/home-interior/src/assert/12.jpeg';
import img3 from '/React/home-interior/src/assert/16.jpg';

function Service() {
  return (
    <div className='body' id='service'>

        <div className='container'>
            <div>
            <img src={img1} className='img1'></img>
            <h2>___ Lighting</h2>
            <h5>Fro each Project we establish relationships with partner who we know will help us.</h5>
            </div>
            
            <div>
            <img src={img2} className='img2'></img>
            <h2>___ Interior Design</h2>
            <h5>Fro each Project we establish relationships with partner who we know will help us.</h5>
            </div>

            <div>
            <img src={img3} className='img3'></img>
            <h2>___ Office Decoration</h2>
            <h5>Fro each Project we establish relationships with partner who we know will help us.</h5>
            </div>
        </div>
        

    </div>
  )
}

export default Service