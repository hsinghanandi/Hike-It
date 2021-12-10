import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import loginPic from '../../assets/loginPic.png';

const LoginPage = ({
    isLoggedIn,
    setIsLoggedIn,
    SERVER_LOCATION,
    setuserName,
}) => {
    const history = useHistory();
    const TOAST = {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };

    const handleLoginForm = (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        // toast.info('Please wait, we are loggin you in!');
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

                    const userDetail = JSON.parse(atob(jwtToken[1]));
                    setuserName(userDetail.username);
                    localStorage.setItem('token', result.data.userToken);
                    // setLoggedInUser(userID);
                    setIsLoggedIn(true);
                    toast.success('You are successfully logged in!', TOAST);
                    history.push('/');
                    // alert('Welcome User!');
                }
            })
            .catch((error) => {
                let message = error?.response?.data?.message || error.message;
                toast.error(message, TOAST);
            });
    };

    // const handleChangePasswordForm = (event) => {
    //     event.preventDefault();

    //     const password = document.getElementById('change-password').value;

    //     axios
    //         .post(`${SERVER_LOCATION}/hikeit/api/v1/users/changePassword`, {
    //             newPassword: password,
    //             token: localStorage.getItem('token'),
    //         })
    //         .then((result) => {
    //             document.getElementById('changePassword-results').innerHTML =
    //                 result.data.message;
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    // const handleLogout = (event) => {
    //     console.log('Logout button clicked!');
    //     if (isLoggedIn) {
    //         const user = localStorage.getItem('token');
    //         console.log(user);

    //         if (user) {
    //             localStorage.removeItem('token');

    //             document.getElementById('logout-results').innerHTML =
    //                 ' Logout Successful!';

    //             setIsLoggedIn(false);
    //             history.push('/');
    //             alert('Logout Successful');
    //         }
    //     } else {
    //         alert('Please Login first!');
    //     }
    // };

    return (
        <div className='LoginPage'>
            <img src={loginPic} alt='login pic of outdoors from shutterstock' />
            <div className='formContainer'>
                <div className='LoginForms'>
                    <h2>Login</h2>
                    <form
                        className='loginFormChild'
                        onSubmit={(event) => handleLoginForm(event)}
                    >
                        <input
                            className='AboutContactE-mail'
                            placeholder='Email'
                            name='email'
                            id='email'
                            type='email'
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
                        <button>Login</button>
                        <div id='login-results'></div>
                    </form>
                </div>

                {/* <div className='ChangePasswordForm'>
                    <h2>Change Password</h2>
                    <form
                        className='changePasswordFormChild'
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
                <div className="formContainer logout">
                    <h2>Logout</h2>
                    <button onClick={(event) => handleLogout(event)}>Logout</button>
                    <div id='logout-results'></div>
                </div> */}
            </div>
        </div>
    );
};

export default LoginPage;
