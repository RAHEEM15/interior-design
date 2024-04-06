import React from 'react';
import './Home.css';
// import './Home.js';
import img1 from '/React/home-interior/src/assert/7.jpg';
import img2 from '/React/home-interior/src/assert/17.jpg';
import img3 from '/React/home-interior/src/assert/2.jpg';
// import img2 from '/React/home-interior/src/assert/4.jpg';
// import img3 from '/React/home-interior/src/assert/3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div>




            <div id='home'>
                <div className='home'>


                    <div className='head'>
                        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#"><span id='topic1'>I</span><span id='topic2'>nterior</span></a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div className=''>
                                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                        <ul class="navbar-nav">
                                            <li class="nav-item">
                                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link active" href="#about">About</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link active" href="#service">Survice</a>
                                            </li>
                                            
                                            
                                            <li class="nav-item">
                                                <a class="nav-link active" href="#contact">Contacts</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>


                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={img1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={img2} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={img3} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>      
                    </div>


            </div>

            <div className='home-content'>
                <h3></h3>
                <h1></h1>

            </div>



        
        </div>




    )
}

export default Home