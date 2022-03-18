import React from 'react';

const serverLocation = "http://localhost:5000";

const LoginForm = () => {
    return (
        <div>
            <div><h3>loginForm</h3></div>
            <div>
                <form action={`${serverLocation}/login`} method="POST">
                    <div>
                        <input type='email' placeholder='email' required/>
                    </div>
                    <div>
                        <input type='password' placeholder='password' required/>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
            <div>
                <a href='/register'>Register</a>
            </div>
        </div>
    );
};

export default LoginForm;