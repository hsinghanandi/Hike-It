import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import darkBgLogo from '../../assets/darkBgLogo.png';
import { useState } from 'react';

// Logo, Discover, Hike Comparison, Blog, About Us, Saved Hikes, Profile

function NavBarComponent({ isLoggedIn, logout, history }) {
    const logoutUser = () => {
        toast.success('logout successfully!');
        logout();
        history.push('/');
    };

    const navbarId = document.getElementById('navbarId');
    if (navbarId) {
        const sticky = navbarId.offsetTop;
        console.log(sticky);
        console.log(window.pageYOffset);

        const scrollFunction = () => {
            if (window.pageYOffset > sticky) {
                navbarId.classList.add('sticky');
            } else {
                navbarId.classList.remove('sticky');
            }
        };

        window.onscroll = function () {
            scrollFunction();
        };
    }

    return (
        <nav className='navBar' id='navbarId'>
            <ul>
                <li>
                    <Link to='/'>
                        <a href='/'>
                            <img
                                src={darkBgLogo}
                                alt='HikeIt logo with dark background'
                            />
                        </a>
                    </Link>
                </li>
                {/* <li>
                    <Link to='/DiscoverPage'>Discover</Link>
                </li> */}

                <li>
                    <Link to='/ComparePage'>Hike Comparison</Link>
                </li>
                <li>
                    <Link to='/BlogPage'>Blog</Link>
                </li>
                <li>
                    <Link to='/SavedHikesPage'>Saved Hikes</Link>
                </li>
                <li>
                    <Link to='/AboutUsPage'>About Us</Link>
                </li>
                <li>
                    {isLoggedIn ? (
                        <button id='logout' onClick={logoutUser}>
                            Logout
                        </button>
                    ) : (

                      <button className="loginButton"> 
                        <Link to='/SignUpPage'>Log In</Link>
                      </button>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default withRouter(NavBarComponent);
