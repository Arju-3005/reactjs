import React from 'react';
import AuthBgImg from '../../assests/bg image 3.jpg';
import Navbar from '../../componenets/layouts/navbar/Navbar';
import AuthForm from '../../componenets/forms/authform/AuthForm';

const Login= () => {
    return (
        <React.Fragment>
            <Navbar darkText={true}/>
            <section className="signup-container">
                <div className='signup-img-container'>
                    <img src={AuthBgImg} alt="authentication-background" />
                </div>
                <div className="signup-content-container">
                    <div className="container">
                        <div className="content-wrapper">
                            <h2>Login</h2>
                            <p>Sign in with email and password.</p>

                            <AuthForm buttonName="Login" />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Login;