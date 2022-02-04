import React from 'react';

export default function MovieForm({ titleForm, setTitleForm, directorForm, setDirectorForm, yearForm, setYearForm, colorForm, setColorForm, addMovie }) {
  function handleSubmit(e) {
    const movie = {
      title: titleForm,
      director: directorForm,
      year: yearForm,
      color: colorForm,
    };
    addMovie(movie);

    setTitleForm('');
    setDirectorForm('');
    setYearForm('');
    setColorForm('red');
  }
  return <form onSubmit={handleSubmit}>
    <label>
        Title:
      <input required value={titleForm} onChange={e => setTitleForm(e.target.value)}/>
    </label>
    <label>
    Director:
      <input required value={directorForm} onChange={e => setDirectorForm(e.target.value)}/>
    </label>
    <label>
        Year Released:
        <input required value={yearForm} onChange={e => setYearForm(e.target.value)}/>
    </label>

  </form>;
}
