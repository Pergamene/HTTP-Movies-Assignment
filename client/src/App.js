import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import MoviesState from './services/MoviesState';
import EditMovie from "./Movies/EditMovie";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [deleteMovie, setDeleteMovie] = useState(false);

  useEffect(() => {
    MoviesState.setMovieList = setMovieList;
    MoviesState.setSavedList = setSavedList;
    MoviesState.savedList = savedList;
    MoviesState.setEditing = setEditing;
    MoviesState.setDeleteMovie = setDeleteMovie;
    MoviesState.getMovies();
  }, [editing, deleteMovie]);

  return (
    <>
      <SavedList list={savedList} />

      <Route exact path="/">
        <MovieList movies={movieList} />
      </Route>

      <Route path="/movies/:id">
        <Movie />
      </Route>

      <Route path="/update-movie/:id">
        <EditMovie />
      </Route>
    </>
  );
};

export default App;
