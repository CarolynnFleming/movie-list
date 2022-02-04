import React from 'react';

export default function MovieItem({ color,
title, director, year, deleteMovie }) {
  return <div onClick={deleteMovie ? deleteMovie(title) : null} className='movie-item' style={{ background: color }}>

  </div>;
}
