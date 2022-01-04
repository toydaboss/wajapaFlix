import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { idIsValid } from "./utils/idIsValid";
import Spinner from "./Spinner";
import "../assets/css/moviegrid.css";
import withErrorHandler from "./withErrorHandler";


const baseUrl = "https://image.tmdb.org/t/p/original/";

const MovieGrid = ({ title, fetchUrl, error }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      if (request && request.status === 200) {
        setMovies(idIsValid(request.data.results));
      }
    }

    fetchMovies();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error))
    }
  }

  const opts = {
    height: '300',
    width: '300',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      origin: 'https://www.youtube.com/',
      enablejsapi: '1',
      autoplay: 1
    },
  }

  return (
    <div className="movies__wrapper px-5">
      <h2 className="text-light movies__title">{title}</h2>
      <div className="movies">
        {
          !error ?
            <div className="movies__item">
              {
                (movies.length) ? movies.map((movie) => {
                  //console.log(movie)
                  return (
                    <section key={movie.id}>
                      <div className="movies__item-poster">
                        <img src={`${baseUrl}${movie?.poster_path}`}
                          alt={movie.name} />
                      </div>
                      {/* <div className="movies__item-about">
                        <h3 className="px-2 py-2">{movie?.name || movie?.title}</h3>
                        <p >{movie?.release_date}</p>
                      </div> */}
                      <button
                        className="btn"
                        onClick={() => { handleClick(movie) }}>
                        Watch The Trailer</button>
                    </section>
                  )
                })
                  : <Spinner />
              }
            </div> : null}
        <div className="container-fluid mt-2">
          {trailerUrl &&
            <YouTube
              className="video-youtube"
              videoId={trailerUrl}
              opts={opts} />
          }
        </div>
      </div>
    </div>
  );
};

export default withErrorHandler(MovieGrid, axios);
