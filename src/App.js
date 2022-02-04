import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import useMovieForm from './useMovieForm';
import MovieForm from './MovieForm';
import MovieItem from './MovieItem';

function App() {
  const [movies, setMovies] = useState('');
  const [filter, setFilter] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const {
    titleForm, setTitleForm, directorForm, setDirectorForm, yearForm, setYearForm, colorForm, setColorForm,
  } = useMovieForm();

  function addMovie(newMovie) {
    const updateMovies = [...movies, newMovie];
    setMovies(updateMovies);
  }
  return (
    <div className="App">
      <div className='current-movie-section'>
        <MovieForm titleForm={titleForm}
          setTitleForm={setTitleForm}
          directorForm={directorForm}
          setDirectorForm={setDirectorForm}
          yearForm={yearForm}
          setYearForm={setYearForm}
          colorForm={setColorForm}
          addMovie={addMovie}/>
          {
            titleForm && <MovieItem title={titleForm} director={directorForm} year={yearForm} color={colorForm}/>
          }

      </div>
    </div>
  );
}

export default App;
