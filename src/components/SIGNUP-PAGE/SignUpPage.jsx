import axios from 'axios';
import React from 'react';

const SignUpPage = (props) => {
    const handleSignUpForm = (event) => {
        event.preventDefault();
        console.log('request made to server @ 8080');

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
                "Passwords doesn't match";
        }
    };

    return (
        <div className='AboutUsContact'>
            <div className='SignUpForm'>
                <h2>Contact Us</h2>
                <form
                    id='signup-form'
                    onSubmit={(event) => handleSignUpForm(event)}
                >
                    <input
                        className='AboutContactName'
                        placeholder='Your Name'
                        name='username'
                        id='username'
                    />
                    <input
                        className='AboutContactE-mail'
                        placeholder='E-mail'
                        name='email'
                        type='email'
                        id='email'
                        required
                    />
                    <input
                        className='AboutContactE-mail'
                        placeholder='Enter a Password'
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
                    <div id='signup-results'></div>
                </form>
            </div>
            <img src='https://picsum.photos/300/?random=2' alt='Contact' />
        </div>
    );
};

export default SignUpPage;
