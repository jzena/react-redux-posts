import React from 'react';
import ContactForm from './Form';
//import SignupFormV from './SignupFormV.js';
import SignupFormFinal from './SignupFormFinal';

const Signup = () => {
    const funcionForma = (datos) => {
        console.log(datos);
    }
    return (
        <div>
            <h2>Sign Up</h2>
            {/* <ContactForm onSubmit={funcionForma} /> */}
            {/* <SignupFormV onSubmit={funcionForma} /> */}
            {<SignupFormFinal onSubmit={funcionForma} />}
        </div>
    );
};

export default Signup;