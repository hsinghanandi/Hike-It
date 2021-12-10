import React from "react";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import darkBgLogo from "../../assets/darkBgLogo.png";
import { useState } from "react";

// Logo, Discover, Hike Comparison, Blog, About Us, Saved Hikes, Profile


const NavBarComponent = ({ isLoggedIn, logout, history }) => {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = ()=>{

    
    



  }




  const logoutUser = () => {
    toast.success("logout successfully!");
    logout();
    history.push("/");
  };




  return (
    <nav className="navBar">
      <ul>
        <li>
          <Link to="/">
            <a href="/">
              <img src={darkBgLogo} alt="HikeIt logo with dark background" />
            </a>
          </Link>
        </li>
        {/* <li>
                    <Link to='/DiscoverPage'>Discover</Link>
                </li> */}

        <li>
          <Link to="/ComparePage">Hike Comparison</Link>
        </li>
        <li>
          <Link to="/BlogPage">Blog</Link>
        </li>
        <li>
          <Link to="/SavedHikesPage">Saved Hikes</Link>
        </li>
        <li>
          <Link to="/AboutUsPage">About Us</Link>
        </li>
        <li>
          <Link to="/SignUpPage">Sign Up</Link>
        </li>
        <li>
          {isLoggedIn ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <Link to="/LoginPage">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default withRouter(NavBarComponent);
