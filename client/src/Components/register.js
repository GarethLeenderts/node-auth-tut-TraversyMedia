import React from 'react';


const RegistrationForm = () => {
    return (
        <div>
            <div><h3>registrationForm</h3></div>
            <div>
                <form>
                    <input type='text' placeholder='username'/>
                    <input type='text' placeholder='email'/>
                    <input type='text' placeholder='password'/>
                    <input type='text' placeholder='confirm password'/>
                    <button>Register</button>
                    <button>Clear</button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;