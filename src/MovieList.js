import React from 'react';
import MovieItem from './MovieItem'; 

export default function MovieList(props) {
  return (<div className='movie-list'>
    {
      props.movies.map((movie, i) => <MovieItem key={`${movie}-${i}`} movie={movie} handleDeleteMovie={props.handleDeleteMovie}/>)
    }
  </div>);
}
