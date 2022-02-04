import React from 'react';

export default function MovieItem({ color,
  title, director, year, deleteMovie }) {
  return <div onClick={deleteMovie ? deleteMovie(title) : null} className='movie-item' style={{ background: color }}>
    <h1>{title}</h1>
    <p>{year}</p>
    <p>by {director}</p>
  </div>;
}
