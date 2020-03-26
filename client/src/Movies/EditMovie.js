import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import MoviesState from '../services/MoviesState';

const emptyMovie = {
  id: '',
  title: '', 
  director: '', 
  metascore: '', 
  stars: [],
};

const EditMovie = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const [movieEdit, setMovieEdit] = useState(emptyMovie);

  useEffect(() => {
    MoviesState.setMovieEdit = setMovieEdit;
    MoviesState.getMovie(match.params.id);
  }, []);

  const handleChange = event => {
    setMovieEdit({
      ...movieEdit,
      [event.target.name]: event.target.value
    });
  };

  const doneEditing = () => {
    history.push('/');
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    MoviesState.editMovie(movieEdit, doneEditing);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} name="title" value={movieEdit.title} />
      <input onChange={handleChange} name="director" value={movieEdit.director} />
      <input onChange={handleChange} name="metascore" value={movieEdit.metascore} /> 
      <button type="submit">Edit</button>
    </form>
  );
};

export default EditMovie;
