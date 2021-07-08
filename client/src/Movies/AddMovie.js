import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import MoviesState from '../services/MoviesState';

const emptyMovie = {
  id: '',
  title: '', 
  director: '', 
  metascore: '', 
  stars: [],
};

const AddMovie = () => {
  const history = useHistory();
  const [input, setInput] = useState(emptyMovie);

  const handleChange = event => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const starsArr = input.stars.split(',');
    const newMovie = {
      ...input,
      stars: starsArr,
    };
    setInput(emptyMovie);
    MoviesState.addMovie(newMovie);
    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" onChange={handleChange} value={input.title} />
      <input name="director" onChange={handleChange} value={input.director} />
      <input name="metascore" onChange={handleChange} value={input.metascore} />
      <input name="stars" onChange={handleChange} value={input.stars} />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
