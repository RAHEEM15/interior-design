import React from 'react';
import './About.css';
import img1 from '/React/home-interior/src/assert/15.jpeg';

function About() {
  return (
    <div className='body' id='about'>
        
        <img  className='img' src={img1}></img>

        <div className='about'>
            <div className='sub-about'>
            <p>Our professional service</p>
            <h1>We Will Create a Modern And First Class Interior</h1><br/>
            {/* <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium similique ea magnam ipsum vel eaque id amet, eligendi hic minima veniam consequuntur eveniet sapiente assumenda reiciendis dolorum perspiciatis. Nisi, excepturi!</h5> */}
            <br/>
            {/* <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium similique ea magnam ipsum vel eaque inpm rund amet, eligendi hic minima veniam consequuntur eveniet sapiente assumenda reiciendis dolorum perspiciatis. Nisi, excepturi!</h5> */}
            </div>
        </div>

    </div>
  )
}

export default About;