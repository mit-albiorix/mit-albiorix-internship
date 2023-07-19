import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "../components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // promise

  // function fetchMoviesHandler() {
  //   fetch("https://swapi.py4e.com/api/films/")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error("Something went wrong");
  //     })
  //     .then((data) => {
  //       // console.log({responseJson});
  //       setMovies(data.results);
  //     })
  //     .catch((error) => {
  //       console.log(error,error.message );
  //       setError(error?.message);
  //     });
  // }

  //async await
  // async function fetchMoviesHandler() {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch("https://swapi.py4e.com/api/films/");

  //     if (!response.ok) {
  //       throw new Error("something went wrong");
  //     }
  //     const data = await response.json();
  //     setMovies(data.results);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // }

  // useeffect with request
  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://swapi.py4e.com/api/films/");

      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMoviesHandler();
  }, []);


  // const fetchMoviesHandler =useCallback( async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch("https://swapi.py4e.com/api/films/");

  //     if (!response.ok) {
  //       throw new Error("something went wrong");
  //     }
  //     const data = await response.json();
  //     setMovies(data.results);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // },[]);

  // useEffect(() => {
  //   fetchMoviesHandler();
  // }, []);

  // for this we need callback 
  // useEffect(() => {
  //   fetchMoviesHandler();
  // }, [fetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        {/* for first two commented code of promise and useEffect  */}
        {/* <button onClick={fetchMoviesHandler}>Fetch Movies</button> */}
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>No movies found</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading....</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
