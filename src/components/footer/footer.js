import React from 'react';
import Footerstyles from './styles';
import '../../assets/styles/styles.scss';

export default()=>{
    return(
        <>

        

       
          
        {/* footer */}

        <div className="footer">
          <div className="container">
            <div className="footerUpper">
              <div className="footerAbout">
                <h1>ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consectetur
                   ut hic ipsum et veritatis corrupti. Itaque eius soluta optio dolorum temporibus in
                   , atque, quos fugit sunt sit quaerat dicta.
                </p>
              </div>
              <div className="footerLinks">
              <h1>Links</h1>
              <p>Home</p>
              <p>Projects</p>
              <p>Process</p>
              <p>Testimonials</p>
              <p>Services</p>
              </div>
              <div className="footerSubscribe">
              <h1>Subscribe</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consectetur
                   ut hic ipsum et veritatis corrupti. Itaque eius soluta optio 
                </p>
              </div>
            </div>

            <hr></hr>
            <div className="footerLower">
              <p>Copyright ©2020 All rights reserved | This template is made with  by Colorlib</p>
            </div>
          </div>
        </div>
        <Footerstyles/>

          
        </>
    );
}
