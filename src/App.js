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

function App() {
    const [searchSubmitted, setSearchSubmitted] = useState(false);
    const [compareQueue, setCompareQueue] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState('');
    const SERVER_LOCATION = 'https://hike-it-be.herokuapp.com';

    // google api key
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;
    console.log('newsApiKey', newsApiKey);
    console.log('googleMapsApiKey', googleMapsApiKey);

    // Searchbar
    const [search, setSearch] = useState();

    const [searchResults, setSearchResults] = useState([]);

    const [placeID, setPlaceID] = useState([]);

    const results = [];
    results.push(searchResults);
    console.log(results);

    // Search value
    const handleChangeSearch = (event) => {
        setSearch(event.target.value);
    };

    // Submit Search
    const submitSearch = (event) => {
        setSearchSubmitted(true);

        event.preventDefault();

        // Places API - Nearby search
        axios
            .get(
                `/place/nearbysearch/json?location=49.282730,-123.120735&keyword=${search}&key=${googleMapsApiKey}&radius=30000`
            )
            .then((result) => {
                setSearchResults(result.data.results);
                console.log('setSearchResults', result.data.results);
                console.log('searchResults ', searchResults);
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
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://newsapi.org/v2/everything?apiKey=${newsApiKey}&q=+hiking+trails+canada`
            )
            .then((result) => {
                setArticles(result.data);
                console.log('setBlogPosts', result.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Router>
            <div className='App'>
                <NavBarComponent isLoggedIn={isLoggedIn} />
                <div className='content'>
                    <Switch>
                        <Route exact path='/'>
                            {searchSubmitted ? (
                                <Redirect to='/SearchResultsPage' />
                            ) : (
                                <HomePage
                                    setSearch={setSearch}
                                    search={search}
                                    handleChangeSearch={handleChangeSearch}
                                    submitSearch={submitSearch}
                                    searchResults={searchResults}
                                    setSearchResults={setSearchResults}
                                    articles={articles}
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
                            />
                        </Route>
                        <Route exact path='/BlogPage'>
                            <BlogPage />
                        </Route>
                        <Route exact path='/DiscoverPage'>
                            <DiscoverPage />
                        </Route>
                        <Route exact path='/SavedHikesPage'>
                            <SavedHikesPage SERVER_LOCATION={SERVER_LOCATION} />
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
                                setSearchSubmitted={setSearchSubmitted}
                                searchResults={searchResults}
                                setSearchResults={setSearchResults}
                            />
                        </Route>
                        <Route exact path='/LoginPage'>
                            <LoginPage
                                SERVER_LOCATION={SERVER_LOCATION}
                                isLoggedIn={isLoggedIn}
                                setIsLoggedIn={setIsLoggedIn}
                            />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
