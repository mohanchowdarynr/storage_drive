import React from 'react';
import './Login.css';
import GDriveLogo from '../Assets/google-drive-logo.png';



const Login = ({signIn}) => {
    
    return (
        <div className="logIn">
            <div className="logIn_img">
            <img
              alt='Google'
              src={GDriveLogo}
            />
            <button onClick={signIn}><h3>Sign in with Google</h3></button>
            </div>
            
        </div>
    )
}

export default Login
