import React from 'react';

export default function MovieItem(props) {
  return <div style={{ backgroundColor: props.movie.color }}
    className='movie'
    onClick={() => props.handleDeleteMovie && props.handleDeleteMovie(props.movie.id)}>
    <h1>{props.movie.title}</h1>
    <p>{props.movie.year}</p>
    <img className='movie-image' src="movie.png"/>
    <p>by {props.movie.director}</p>
  </div>;
}
