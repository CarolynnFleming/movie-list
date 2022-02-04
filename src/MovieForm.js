import React from 'react';

export default function MovieForm({ titleForm, setTitleForm, directorForm, setDirectorForm, yearForm, setYearForm, colorForm, setColorForm, addMovie }) {
  function handleSubmit(e) {
    const movie = {
      title: titleForm,
      director: directorForm,
      year: yearForm,
      color: colorForm,
    };
    
  }
  return <div></div>;
}
