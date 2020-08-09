/*jshint esversion: 9 */
/* The Banner is responsible for the change information at the top of the webpage*/

import React, {
    useState,
    useEffect
} from 'react';
import axios from './axios'; // this is responsible for fetching the URL
import requests from './Requests';

function Banner() {
    // React Hooks
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {        
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);
    function truncate(str, n){
        return String(str).length > n ? String(str).substr(0, n-1) + "..." : str;
    }
    return ( 
        <header className = "banner"
        style = {
            {
                backgroundSize: "cover",
                backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }
        }>
        <div className = "banner_content" >
        <h1 className="banner_title"> {movie.title || movie.name || movie.original_name}</h1> 
        <div className = "banner_buttons" >
        <button className = "banner_button"> Play </button>
        <button className = "banner_button" > My List </button> 
        </div> 
        <h1 className = "banner_description" > {truncate(movie.overview,250) } </h1> 
        </div> 
        <div className="banner_fadebottom"></div>
        </header>
    )
}

export default Banner;