import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import ComparePage from './components/COMPARE-PAGE/ComparePage';
import DetailsPage from './components/DETAILS-PAGE/DetailsPage';
import BlogPage from './components/BLOG-PAGE/BlogPage';
import DiscoverPage from './components/DISCOVER-PAGE/DiscoverPage';
import SavedHikesPage from './components/SAVED-HIKES-PAGE/SavedHikes';
import NavBarComponent from './components/NAVBAR-COMPONENT/NavBarComponent';
import HomePage from './components/HOME-PAGE/HomePage';
import AboutUsPage from './components/ABOUTUS-PAGE/AboutUsPage';
import SignUpPage from './components/SIGNUP-PAGE/SignUpPage';
import LoginPage from './components/SIGNUP-PAGE/LoginPage';
import SearchResultsPage from './components/SEARCHRESULT-PAGE/SearchResultsPage';
import Footer from './components/FOOTER/Footer';
import { toast, ToastContainer } from 'react-toastify';
import moment from 'moment';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [searchSubmitted, setSearchSubmitted] = useState(false);
    const [compareQueue, setCompareQueue] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState('');
    const [userName, setuserName] = useState('');
    const SERVER_LOCATION = process.env.REACT_APP_SERVER_LOCATION;

    useEffect(() => {
        if (localStorage.token) {
            const jwtToken = localStorage.token.split('.');
            const userDetail = JSON.parse(atob(jwtToken[1]));
            console.log('userDetail', userDetail);
            if (moment().isBefore(moment.unix(userDetail.exp))) {
                setuserName(userDetail.username);
                setIsLoggedIn(true);
            } else {
                toast.info('Your session has been expired.');
                logout();
            }
        } else {
            logout();
        }
    }, []);

    const logout = () => {
        setuserName('');
        setIsLoggedIn(false);
        localStorage.clear();
    };

    // google api key
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const npsApiKey = process.env.REACT_APP_NPS_API_KEY;


    // Searchbar
    const [search, setSearch] = useState();

    const [searchResults, setSearchResults] = useState([]);

    const [placeID, setPlaceID] = useState([]);

    const results = [];
    results.push(searchResults);
    // console.log(results);

    // Search value
    const handleChangeSearch = (event) => {
        setSearch(event.target.value);
    };

    // Submit Search
    const submitSearch = (event) => {
        setSearchSubmitted(true);
        setSearch('');

        event.preventDefault();

        // Places API - Nearby search
        axios
            .get(
                `/place/nearbysearch/json?location=49.282730,-123.120735&keyword=${search}&key=${googleMapsApiKey}&radius=30000`
            )
            .then((result) => {
                setSearchResults(result.data.results);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    // Randomize call
    // const [randomize, setRandomize] = useState([]);
    const randomizeSearch = (event) => {
        setSearchSubmitted(true);
        event.preventDefault();

        axios
            .get(
                `/place/nearbysearch/json?location=49.282730,-123.120735&key=${googleMapsApiKey}&radius=30000&keyword=trail`
            )
            .then((result) => {
                setSearchResults(result.data.results);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    ///////////////// get placeID ////////////
    // axios.get(`/place/nearbysearch/json?location=49.282730,-123.120735&keyword=${search}&key=${googleMapsApiKey}&radius=30000`)
    // .then ((result, index)=>{
    //     setPlaceID(result.data.results[0].place_id)

    //     console.log("search ID: ", result.data.results[0].place_id );

    //     console.log("search results ID: ", placeID );

    // })
    // .catch(error=>console.log(error));

    // Blog section
    // const [articles, setArticles] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get(
    //             `https://newsapi.org/v2/everything?apiKey=${newsApiKey}&q=+hiking+trails+canada`
    //         )
    //         .then((result) => {
    //             setArticles(result.data);
    //             console.log('setBlogPosts', result.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);

    // NPS API
    const [npsData, setNpsData] = useState([]);
    useEffect(() => {
        axios
            .get(
                `https://developer.nps.gov/api/v1/articles?api_key=${npsApiKey}&q=hike`
            )
            .then((result) => {
                setNpsData(result.data);
                // console.log('setNpsData', result.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [npsApiKey]);

    return (
        <>
            <ToastContainer />
            <Router>
                <div className='App'>
                    <NavBarComponent isLoggedIn={isLoggedIn} logout={logout} />
                    <div className='content'>
                        <Switch>
                            <Route exact path='/'>
                                {searchSubmitted ? (
                                    <Redirect to='/SearchResultsPage' />
                                ) : (
                                    <HomePage
                                        isLoggedIn={isLoggedIn}
                                        userName={userName}
                                        setSearch={setSearch}
                                        search={search}
                                        handleChangeSearch={handleChangeSearch}
                                        submitSearch={submitSearch}
                                        searchResults={searchResults}
                                        setSearchResults={setSearchResults}
                                        // articles={articles}
                                        npsData={npsData}
                                        randomizeSearch={randomizeSearch}
                                        setPlaceID={setPlaceID}
                                    />
                                )}
                            </Route>

                            <Route exact path='/DetailsPage'>
                                <DetailsPage
                                    SERVER_LOCATION={SERVER_LOCATION}
                                    placeID={placeID}
                                    compareQueue={compareQueue}
                                    setCompareQueue={setCompareQueue}
                                />
                            </Route>

                            <Route exact path='/ComparePage'>
                                <ComparePage
                                    compareQueue={compareQueue}
                                    setCompareQueue={setCompareQueue}
                                    submitSearch={submitSearch}
                                />
                            </Route>
                            <Route exact path='/BlogPage'>
                                <BlogPage />
                            </Route>
                            <Route exact path='/DiscoverPage'>
                                <DiscoverPage />
                            </Route>
                            <Route exact path='/SavedHikesPage'>
                                <SavedHikesPage
                                    SERVER_LOCATION={SERVER_LOCATION}
                                    setPlaceID={setPlaceID}
                                />
                            </Route>
                            <Route exact path='/AboutUsPage'>
                                <AboutUsPage />
                            </Route>
                            <Route exact path='/SignUpPage'>
                                <SignUpPage SERVER_LOCATION={SERVER_LOCATION} />
                            </Route>
                            <Route exact path='/SearchResultsPage'>
                                <SearchResultsPage
                                    setPlaceID={setPlaceID}
                                    googleMapsApiKey={googleMapsApiKey}
                                    search={search}
                                    setSearch={setSearch}
                                    searchSubmitted={searchSubmitted}
                                    setSearchSubmitted={setSearchSubmitted}
                                    searchResults={searchResults}
                                    setSearchResults={setSearchResults}
                                    compareQueue={compareQueue}
                                    setCompareQueue={setCompareQueue}
                                />
                            </Route>
                            <Route exact path='/LoginPage'>
                                <LoginPage
                                    SERVER_LOCATION={SERVER_LOCATION}
                                    isLoggedIn={isLoggedIn}
                                    setIsLoggedIn={setIsLoggedIn}
                                    setuserName={setuserName}
                                />
                            </Route>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </>
    );
}

export default App;
