import React from 'react';

const serverLocation = "http://localhost:5000";

const RegistrationForm = () => {
    return (
        <div>
            <div><h3>registrationForm</h3></div>
            <div>
                <form action={`${serverLocation}/register`} method="POST">
                    <div>
                        <input type='text' placeholder='username' required/> 
                    </div>
                    <div>
                        <input type='email' placeholder='email' required/>
                    </div>
                    <div>
                        <input type='password' placeholder='password' required/>
                    </div>
                    <div>
                        <input type='password' placeholder='confirm password' required/>
                    </div>
                    <div>
                        <button type="submit">Register</button>
                    </div>
                    <div>
                        <button>Clear</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;