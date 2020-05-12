import React from 'react';
import Bodystyles from './styles';
import '../../assets/styles/styles.scss'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Carousel1 from '../../assets/images/carousel1.jpg'
import Carousel2 from '../../assets/images/carousel2.jpg'
import Carousel3 from '../../assets/images/carousel3.jpg'


export default () => {
    return (
        <>
            {/* love our works section from main page */}
            <div className="loveOurWorksMain">
                <div className="loveOurWorksLeft">
                    <h1>LOVE OUR WORKS</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio
                        ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia
                        quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
                        Aperiam neque id, illum laudantium autem .
                    </p>
                    <p>illum laudantium autem vero quae debitis tempora modi. Ipsa
                    molestias enim in rem et incidunt beatae fugit, ab quam optio atque maiores facere
                    est quidem, veritatis commodi.
                    </p>
                    <br></br>
                    <ul>
                        <li>Aperiam neque id illum laudantium</li>
                        <li>Maiores facere est quidem</li>
                        <li>Laudantium autem vero</li>
                    </ul>
                </div>
                <div className="loveOurWorksRight">
                    <div className="templates">
                        <div className="icon"></div>
                        <h1>PIXEL PERFECT TEMPLATES</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi
                        aspernatur eum eius inventore facilis.
                        </p>
                        <p>Visit <a>Colorlib</a></p>
                    </div>
                </div>
            </div>

            <div className="counter">
                <div className="counterSection">
                    <div className="top">
                        <div className="icon"></div>
                        <div className="num">360</div>
                    </div>
                    <div className="bottom">
                        <h2>Creativity</h2>
                    </div>
                </div>

                {/* counter section 2 */}

                <div className="counterSection">
                    <div className="top">
                        <div className="icon"></div>
                        <div className="num">4,500</div>
                    </div>
                    <div className="bottom">
                        <h2>WordPress Themes</h2>
                    </div>
                </div>

                {/* counter section 3 */}

                <div className="counterSection">
                    <div className="top">
                        <div className="icon"></div>
                        <div className="num">120</div>
                    </div>
                    <div className="bottom">
                        <h2>HTML5 / CSS3</h2>
                    </div>
                </div>

                {/* counter section 4 */}

                <div className="counterSection">
                    <div className="top">
                        <div className="icon"></div>
                        <div className="num">3,913</div>
                    </div>
                    <div className="bottom">
                        <h2>Bootstrap</h2>
                    </div>
                </div>
            </div>


            {/* Our projects */}

            <div className="ourProjects">
                <div className="ourProjectsLeft">
                    <h1>OUR PROJECTS</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus
                    distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas
                    obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis
                    consequuntur sunt nisi.
                </p>
                </div>
                <div className="ourProjectsRight"></div>

            </div>

            {/* carousel 4 images */}


            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={6}
                visibleSlides={4}

            >
                <Slider>
                    <Slide index={0}><img className="carouselImage" src={Carousel1}></img></Slide>
                    <Slide index={1}><img className="carouselImage" src={Carousel2}></img></Slide>
                    <Slide index={2}><img className="carouselImage" src={Carousel3}></img></Slide>
                    <Slide index={3}><img className="carouselImage" src={Carousel1}></img></Slide>
                    <Slide index={4}><img className="carouselImage" src={Carousel2}></img></Slide>
                    <Slide index={5}><img className="carouselImage" src={Carousel3}></img></Slide>
                </Slider>
                <ButtonBack></ButtonBack>
                <ButtonNext></ButtonNext>
            </CarouselProvider>

            <div className="ourApproachBox">
                {/* Our approach */}

                <div className="ourApproach">
                    <div className="ourApproachLeft">
                        <h1>OUR APPROACH</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus
                        distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas
                        obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis
                        consequuntur.
                        </p>
                    </div>
                    <div className="ourApproachRight"></div>
                </div>

                <div className="ourApproachCardsBox">
                    <div className="ourApproachCard">
                        <div className="icon"></div>
                        <h1>DATA GATHERING</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus
                        distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas
                        obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditii
                        s consequuntur sunt nisi.
                        </p>
                    </div>
                    <div className="ourApproachCard">
                        <div className="icon"></div>
                        <h1>IMPLEMENTATION</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus
                        distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas
                        obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditii
                        s consequuntur sunt nisi.
                        </p>
                    </div>
                    <div className="ourApproachCard">
                        <div className="icon"></div>
                        <h1>LAUNCH</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus
                        distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas
                        obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditii
                        s consequuntur sunt nisi.
                        </p>
                    </div>
                </div>
            </div>

            {/* testimonials */}

            <div className="testimonials">
                <h1>TESTIMONIALS</h1>
                <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam
                temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
                </p>


            </div>
            <div className="testimonialsCarousel">
                <CarouselProvider
                    naturalSlideWidth={200}
                    naturalSlideHeight={180}
                    totalSlides={6}
                    visibleSlides={2}
                    dragStep={2}
                    

                >
                    <Slider>
                        <Slide index={0}><p>" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem aspernatur ducimus quas obcaecati mollitia mporibus culpa dolore molestias blanditiis "</p></Slide>
                        <Slide index={1} ><img id="sliderCurveImage" className="carouselImage" src={Carousel2}></img></Slide>
                        <Slide index={2}><p>" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem aspernatur ducimus quas obcaecati mollitia mporibus culpa dolore molestias blanditiis "</p></Slide>
                        <Slide index={3}><img id="sliderCurveImage" className="carouselImage" src={Carousel1}></img></Slide>
                        <Slide index={4}><p>" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem aspernatur ducimus quas obcaecati mollitia mporibus culpa dolore molestias blanditiis "</p></Slide>
                        <Slide index={5}><img id="sliderCurveImage" className="carouselImage" src={Carousel3}></img></Slide>
                    </Slider>
                    <ButtonBack></ButtonBack>
                    <ButtonNext></ButtonNext>
                </CarouselProvider>
            </div>

            {/* services */}

            <div className="servicesBox">
                {/* Our approach */}

                <div className="services">
                    <div className="servicesLeft">
                        <h1>Services</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus
                        distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas
                        obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis
                        consequuntur sunt nisi.
                        </p>
                    </div>
                    <div className="servicesRight"></div>
                </div>

                <div className="servicesCardsBox">
                    <div className="servicesCard">
                        <div className="servicesCardsTop"></div>
                        <div className="icon"></div>
                        <h1>DATA GATHERING</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus
                        distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas
                        obcaecati mollitia quibusdam temporibus culpa dolore
                        </p>
                    </div>
                    <div className="servicesCard">
                        <div className="servicesCardsTop"></div>
                        <div className="icon"></div>
                        <h1>IMPLEMENTATION</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus
                        distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas
                        obcaecati mollitia quibusdam temporibus culpa
                        </p>
                    </div>
                    <div className="servicesCard">
                        <div className="servicesCardsTop"></div>
                        <div className="icon"></div>
                        <h1>LAUNCH</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus
                        distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas
                        obcaecati mollitia quibusdam temporibus culpa
                        </p>
                    </div>
                    <div className="servicesCard">
                        <div className="servicesCardsTop"></div>
                        <div className="icon"></div>
                        <h1>LAUNCH</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus
                        distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas
                        obcaecati mollitia quibusdam temporibus
                        </p>
                    </div>
                </div>
            </div>


            {/* Choose your plan */}

            <div className="planBox">
                <div className="plan">
                    <h1>CHOOSE YOUR PLAN </h1>
                    <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam
                    temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
                    </p>

                    <div className="planCardsBox">
                        <div className="planCard">
                            <h3>STARTERS</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <h4>STARTING AT</h4>
                            <h1>$7</h1>
                            <h4>PER MONTH</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum enim nobis 
                                aspernatur saepe dolores?
                            </p>
                            <button className="btn-border-primary">GET STARTED</button>
                        </div>
                        <div className="planCardCenter">
                            <h3>PREMIUM</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <h4>STARTING AT</h4>
                            <h1>$75</h1>
                            <h4>PER MONTH</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum enim nobis 
                                aspernatur saepe dolores?
                            </p>
                            <button className="btn-border-danger">GET STARTED</button>
                        </div>
                        <div className="planCard">
                            <h3>ENTERPRISE</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <h4>STARTING AT</h4>
                            <h1>$390</h1>
                            <h4>PER MONTH</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum enim nobis 
                                aspernatur saepe dolores?
                            </p>
                            <button className="btn-border-primary">GET STARTED</button>
                        </div>
                    </div>
                </div>

            </div>

            {/* video content */}

            <iframe src="https://www.youtube.com/embed/nu5mdN2JIwM" frameborder="0" allow="accelerometer;  encrypted-media; gyroscope;" allowfullscreen></iframe>


            {/* contact us box */}

            <div className="contactUsBox">
                {/* Contact Us */}

                <div className="contactUs">
                    <div className="contactUsLeft">
                        <h1>Contact Us</h1>
                        <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati
                        mollitia quibusdam temporibus culpa dolore molestias blanditiis
                        consequuntur sunt nisi.
                        </p>

                        <div className="form">
                            <form >
                                <input className="inputSmall" placeholder="First Name"></input>
                                <input className="inputSmall" placeholder="Last Name"></input>
                                <input className="inputLarge" placeholder="Subject"></input>
                                <input className="inputLarge" placeholder="Email"></input>
                                <textarea className="textAreaLarge" placeholder="Write Your message here"></textarea>
                                <button className="btn-primary">Send Message</button>
                            </form>
                        </div>

                    </div>
                    <div className="contactUsRight"></div>

                </div>
            </div>

            <Bodystyles />
        </>
    );
}
