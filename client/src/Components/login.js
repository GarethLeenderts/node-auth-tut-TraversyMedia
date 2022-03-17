import React from 'react';


const LoginForm = () => {
    return (
        <div>
            <div><h3>loginForm</h3></div>
            <div>
                <form>
                    <input type='text' placeholder='email'/>
                    <input type='text' placeholder='password'/>
                    <button>Login</button>
                </form>
            </div>
            <div>
                <a href='/register'>Register</a>
            </div>
        </div>
    );
};

export default LoginForm;