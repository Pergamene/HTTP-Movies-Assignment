import React, { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import MoviesState from '../services/MoviesState';

import MovieCard from './MovieCard';

function Movie() {
  const [movie, setMovie] = useState(null);
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    MoviesState.setMovie = setMovie;
    MoviesState.fetchMovie(match.params.id);
  }, []);

  const saveMovie = () => {
    MoviesState.addToSavedList(movie);
  };

  const editMovie = () => {
    history.push(`/update-movie/${movie.id}`);
  };

  const deleteMovie = () => {
    MoviesState.deleteMovie(movie.id);
    history.push('/');
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className='save-wrapper'>
      <MovieCard movie={movie} />

      <div className='save-button' onClick={saveMovie}>Save</div>
      <div className='edit-button' onClick={editMovie}>Edit</div>
      <div className='delete-button' onClick={deleteMovie}>Delete</div>
    </div>
  );
}

export default Movie;
