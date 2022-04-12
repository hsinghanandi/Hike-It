import axios from 'axios';
import React from 'react';
import loginPic from '../../assets/loginPic.png';

const SignUpPage = (props) => {
    const handleSignUpForm = (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword =
            document.getElementById('confirm-password').value;

        if (confirmPassword === password) {
            axios
                .post(`${props.SERVER_LOCATION}/hikeit/api/v1/users`, {
                    username: username,
                    email: email,
                    password: password,
                })
                .then((result) => {
                    document.getElementById('signup-results').innerHTML =
                        result.data.message;
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            document.getElementById('signup-results').innerHTML =
                "Passwords don't match!";
        }
    };

    return (
        <div className='signUpPage'>
            <img src={loginPic} alt='login pic of outdoors from shutterstock' />
            <div className='formContainer'>
                <h2>Sign Up</h2>
                <form
                    id='signup-form'
                    onSubmit={(event) => handleSignUpForm(event)}
                >
                    <input
                        className='AboutContactName'
                        placeholder='Name'
                        name='username'
                        id='username'
                    />
                    <input
                        className='AboutContactE-mail'
                        placeholder='Email'
                        name='email'
                        type='email'
                        id='email'
                        required
                    />
                    <input
                        className='AboutContactE-mail'
                        placeholder='Password'
                        name='password'
                        id='password'
                        type='password'
                        required
                    />
                    <input
                        className='AboutContactE-mail'
                        placeholder='Confirm Password'
                        name='confirm-password'
                        id='confirm-password'
                        type='password'
                        required
                    />
                    <button>Sign Up</button>
                    <br />
                    <h3>
                        Already a member?
                        <a id='LoginText' href='/LoginPage'>
                            &nbsp; &nbsp;Login
                        </a>
                    </h3>
                    <div id='signup-results'></div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
