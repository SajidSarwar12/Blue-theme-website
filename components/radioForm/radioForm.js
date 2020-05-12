import React from 'react';
import RadioFormStyles from './styles'
import '../../assets/styles/styles.scss'
import { Link } from "react-router-dom";

export default () => {
    return (
        <>
            <div className="card" id="radioCard">
                <div className="aboutTop">

                </div>
                <div className="aboutLeft">
                    <p>Subject</p>
                    <form>
                        <div className="readingBox">
                            <input type="radio"></input>
                            <label>Reading</label>
                        </div>
                        <div className="mathBox">
                            <input type="radio"></input>
                            <label>Math</label>
                        </div>

                        <div className="dropdownLabel">
                        <label>Grade</label>
                        </div>
                        <select className="dropdownBoxSmall">

                            <option value="student">student</option>
                            <option value="full time job">full time job</option>
                            <option value="full time learner">full time learner</option>
                            <option value="prefer not to say">prefer not to say</option>
                            <option value="other">other</option>

                        </select>

                        <p>Theta Distribution</p>
                        <div >
                            <input type="radio"></input>
                            <label>Normal</label>
                        </div>

                        <p>Generate replication data sets</p>

                        <div className="dropdownLabel">
                            <label >Number of replications</label>
                        </div>
                        <input type="text" className="inputBoxSmall"></input>

                        <p>Irt model</p>

                        <div className="readingBox33">
                            <input type="radio"></input>
                            <label>Rasch/1 PL</label>
                        </div>

                        <div className="readingBox33">
                            <input type="radio"></input>
                            <label>1 PL</label>
                        </div>

                        <div className="readingBox33">
                            <input type="radio"></input>
                            <label>2 PL</label>
                        </div>










                    </form>
                </div>
                <div className="aboutRight">
                    <p >Item Pool</p>

                    <select  className="dropdownBoxLarge">

                        <option value="student">student</option>
                        <option value="full time job">full time job</option>
                        <option value="full time learner">full time learner</option>
                        <option value="prefer not to say">prefer not to say</option>
                        <option value="other">other</option>

                    </select>

                    <br></br>

                    <div className="dropdownLabel">
                        <label>Number of examinies</label>
                    </div>
                    <input type="text" className="inputBoxSmall"></input>

                    <br></br>
                    <br></br>
                    <div className="uniformBox">
                        <input type="radio"></input>
                        <label>Uniform</label>
                    </div>
                    <p>Item Pool Characteristics</p>

                    <div className="dropdownLabel">
                        <label>Number of items in pool</label>
                    </div>

                    <input type="text" className="inputBoxSmall"></input>

                    
                </div>
<div className="aboutBottomCentre">
                <Link to="/">
                        <button className="signinButton" id="backButton">Back</button>
                    </Link>

                    <button className="signinButton" id="nextButton">Next</button>
                </div>
                
            </div>
            <div className="aboutBottom">
               

                
                      

                      
                    
                </div>
        </>
    );
}