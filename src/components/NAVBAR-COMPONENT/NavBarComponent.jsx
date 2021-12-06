import React from 'react';
import { Link } from 'react-router-dom';
import darkBgLogo from '../../assets/darkBgLogo.png';

// Logo, Discover, Hike Comparison, Blog, About Us, Saved Hikes, Profile

function NavBarComponent({ isLoggedIn }) {
    return (
        <nav className='navBar'>
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
                    <Link to='/SignUpPage'>Sign Up</Link>
                </li>
                <li>
                    <Link to='/LoginPage'>
                        {isLoggedIn ? 'Logout' : 'Login'}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBarComponent;
