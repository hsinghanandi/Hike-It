import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import loginPic from '../../assets/loginPic.png';

const LoginPage = ({ isLoggedIn, setIsLoggedIn, SERVER_LOCATION }) => {
    const history = useHistory();

    const handleLoginForm = (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        axios
            .post(`${SERVER_LOCATION}/hikeit/api/v1/users/login`, {
                email: email,
                password: password,
            })
            .then((result) => {
                document.getElementById('login-results').innerHTML =
                    result.data.message;

                if (result.data.status === 'SUCCESS') {
                    const jwtToken = result.data.userToken.split('.');

                    const userID = JSON.parse(atob(jwtToken[1])).id;
                    console.log(result.data.userToken);

                    localStorage.setItem('token', result.data.userToken);
                    // setLoggedInUser(userID);
                    setIsLoggedIn(true);

                    history.push('/');
                    alert('Welcome User!');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleChangePasswordForm = (event) => {
        event.preventDefault();

        const password = document.getElementById('change-password').value;

        axios
            .post(`${SERVER_LOCATION}/hikeit/api/v1/users/changePassword`, {
                newPassword: password,
                token: localStorage.getItem('token'),
            })
            .then((result) => {
                document.getElementById('changePassword-results').innerHTML =
                    result.data.message;
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleLogout = (event) => {
        console.log('Logout button clicked!');
        if (isLoggedIn) {
            const user = localStorage.getItem('token');
            console.log(user);

            if (user) {
                localStorage.removeItem('token');

                document.getElementById('logout-results').innerHTML =
                    ' Logout Successful!';

                setIsLoggedIn(false);
                history.push('/');
                alert('Logout Successful');
            }
        } else {
            alert('Please Login first!');
        }
    };

    return (
        <div className='LoginPage'>
            <img src={loginPic} alt="login pic of outdoors from shutterstock" />
            <div className='LoginForm'>            
                <h2>LOGIN</h2>
                <form
                    id='login-form'
                    onSubmit={(event) => handleLoginForm(event)}
                >
                    <input
                        className='AboutContactE-mail'
                        placeholder='E-mail'
                        name='email'
                        id='email'
                        type='email'
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
                    <button>Login</button>
                    <div id='login-results'></div>
                </form>
            </div>

            <div className='ChangePasswordForm'>
                <h2>Change Password</h2>
                <form
                    id='changePassword-form'
                    onSubmit={(event) => handleChangePasswordForm(event)}
                >
                    <input
                        className='AboutContactE-mail'
                        placeholder='Enter a Password'
                        name='password'
                        id='change-password'
                        type='password'
                        required
                    />
                    <button>Change Password</button>
                    <div id='changePassword-results'></div>
                </form>
            </div>
            <div>
                <h2>Logout</h2>
                <button onClick={(event) => handleLogout(event)}>Logout</button>
                <div id='logout-results'></div>
            </div>
        </div>
    );
};

export default LoginPage;
