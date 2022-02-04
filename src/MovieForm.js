import React from 'react';

export default function MovieForm(props) {
  
  return <div>
    <form className='movie-form' onSubmit={props.submitMovie}>
      <label>
        Title:
        <input required value={props.titleForm} onChange={e => props.setTitleForm(e.target.value)}/>
      </label>
      <label>
    Director:
        <input required value={props.directorForm} onChange={e => props.setDirectorForm(e.target.value)}/>
      </label>
      <label>
        Year Released:
        <input required value={props.yearForm} onChange={e => props.setYearForm(e.target.value)}/>
      </label>
      <label>
    Poster Color:
        <select required value={props.colorForm} onChange={e => props.setColorForm(e.target.value)}>
          <option value='pink'>Pink</option>
          <option value='yellow'>Yellow</option>
          <option value='lightblue'>lightblue</option>
          <option value='red'>Red</option>
          <option value='oragne'>Orange</option>
        </select>
      </label>
      <button>
        Add Movie
      </button>
    </form>
  </div>;
  
}
