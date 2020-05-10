import React from 'react';
import Formstyles from './styles';
import '../../assets/styles/styles.scss';
import { Link } from "react-router-dom";

export default () => {
    return (
        <>
            <div className="card">
                <div className="signInLeft">

                </div>
                <div className="signInRight">
                <p className="signinHeading"> Adaptive Simulative Login</p>
                    <div className="signinRightIn">
                       

                        <form>
                            <label className="signinLabel">User Name</label>
                            <br></br>
                            <input type='text' className="signinTextbox"></input>
                            <br></br>
                            <label className="signinLabel">password</label>
                            <br></br>
                            <input type='text' className="signinTextbox"></input>
                            <br></br>

                           

                        </form>
                    </div>
                    <Link to="/">
                                <button className="signinButton">Log In</button>
                            </Link>
                            <p>forgot Password</p>
                </div>
            </div>
            
            <Formstyles />
        </>
    );
}
