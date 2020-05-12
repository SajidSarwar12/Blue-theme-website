import React from 'react';
import Cardstyles from './styles';
import '../../assets/styles/styles.scss';

export default()=>{
    return(
        <>

        <div className="card" id="cardCareers">

         
          <div className="mainHeading">
          Start New Simulation
          </div>

          <div className="cardCentrer">
            <div className="cardLeft">
              <div className="cardLeftImage">

              </div>
              <p>New <br></br> Administrator</p>
            </div>
            <div className="cardRight">
            <div className="cardRightImage">
                
                </div>
                <p>New<br></br> Administrator</p>
            </div>
          </div>
          
        </div>
          <Cardstyles/>
        </>
    );
}
