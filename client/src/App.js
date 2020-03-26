import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import MoviesState from './services/MoviesState';
import EditMovie from './Movies/EditMovie';
import AddMovie from './Movies/AddMovie';

const App = () => {
  const history = useHistory();
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [deleteMovie, setDeleteMovie] = useState(false);
  const [addedMovie, setAddedMovie] = useState(false);

  useEffect(() => {
    MoviesState.setMovieList = setMovieList;
    MoviesState.setSavedList = setSavedList;
    MoviesState.savedList = savedList;
    MoviesState.setEditing = setEditing;
    MoviesState.setDeleteMovie = setDeleteMovie;
    MoviesState.setAddedMovie = setAddedMovie;
    MoviesState.getMovies();
  }, [editing, deleteMovie, addedMovie]);

  const addMovie = () => {
    history.push('/add-movie');
  };

  return (
    <>
      <SavedList list={savedList} />

      <button onClick={addMovie}>Add Movie</button>

      <Route exact path="/">
        <MovieList movies={movieList} />
      </Route>

      <Route path="/movies/:id">
        <Movie />
      </Route>

      <Route path="/update-movie/:id">
        <EditMovie />
      </Route>

      <Route exact path="/add-movie">
        <AddMovie />
      </Route>
    </>
  );
};

export default App;
