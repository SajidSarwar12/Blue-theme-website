import React from 'react';
import '../../assets/styles/styles.scss';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Carousel1 from '../../assets/images/carousel1.jpg'
import Carousel2 from '../../assets/images/carousel2.jpg'
import Carousel3 from '../../assets/images/carousel3.jpg'



export default () => {

    return (
        <>

            <div className="containerHeader">
                <div className="navbar">

                    <div className="logo"></div>

                    <div className="iconsCenter">
                        <a className="navIcon">Home</a>
                        <a className="navIcon">About</a>
                        <a className="navIcon">Careers</a>
                        <a className="navIcon">Projects</a>
                        <a className="navIcon">Testimonials</a>
                    </div>

                    <div className="iconsRight">
                        <a className="navIconWhite">Pricing</a>
                        <button className="btn-danger btnContact">Contact</button>
                        
                    </div>
                </div>
                
            </div>

            
            

            <div className="banner">
                <div className="bannerLeft"></div>
                <div className="bannerRight"></div>

            </div>

            <div className="bannerCarousel">
                <CarouselProvider
                    naturalSlideWidth={200}
                    naturalSlideHeight={180}
                    totalSlides={6}
                    visibleSlides={2}
                    dragStep={2}
                    

                >
                    <Slider>
                        <Slide index={0}>
                            <h1>HIGH QUALITY WEBSITE TEMPLATES</h1>
                            <p>" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                 Rem aspernatur ducimus quas obcaecati mollitia mporibus 
                                 culpa dolore molestias blanditis "
                            </p>
                            <button className="btn-border-white">GET STARTED</button>
                        </Slide>
                        <Slide index={1} ><img id="sliderCurveImage" className="carouselImage" src={Carousel2}></img></Slide>
                        <Slide index={2}>
                        <h1>HIGH QUALITY WEBSITE TEMPLATES</h1>
                            <p>" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                 Rem aspernatur ducimus quas obcaecati mollitia mporibus 
                                 culpa dolore molestias blanditis "
                            </p>
                            <button className="btn-border-white">GET STARTED</button>
                        </Slide>
                        <Slide index={3}><img id="sliderCurveImage" className="carouselImage" src={Carousel1}></img></Slide>
                        <Slide index={4}>
                        <h1>HIGH QUALITY WEBSITE TEMPLATES</h1>
                            <p>" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                 Rem aspernatur ducimus quas obcaecati mollitia mporibus 
                                 culpa dolore molestias blanditis "
                            </p>
                            <button className="btn-border-white">GET STARTED</button>
                        </Slide>
                        <Slide index={5}><img id="sliderCurveImage" className="carouselImage" src={Carousel3}></img></Slide>
                    </Slider>
                    <ButtonBack></ButtonBack>
                    <ButtonNext></ButtonNext>
                </CarouselProvider>
            </div>


            
            
            

            


            


            {/* <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={47}
                totalSlides={3}

            >
                <Slider>
                    <Slide index={0}><img className="carouselImage" src={Carousel1}></img></Slide>
                    <Slide index={1}><img className="carouselImage" src={Carousel2}></img></Slide>
                    <Slide index={2}><img className="carouselImage" src={Carousel3}></img></Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
            */}




        </>
    );
}