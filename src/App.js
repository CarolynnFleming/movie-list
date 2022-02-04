import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import useMovieForm from './useMovieForm';
import MovieForm from './MovieForm';
import MovieItem from './MovieItem';
import MovieList from './MovieList';

function App() {
  const [movies, setMovies] = useState('');
  const [addfilter, setFilter] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const {
    titleForm, setTitleForm, directorForm, setDirectorForm, yearForm, setYearForm, colorForm, setColorForm,
  } = useMovieForm();

  function addMovie(newMovie) {
    const updateMovies = [...movies, newMovie];
    setMovies(updateMovies);

   
  }
    
  const movie = {
    title: titleForm,
    director: directorForm,
    year: yearForm,
    color: colorForm,
  };
  function deleteMovie(title) {
    const index = movies.findIndex(movie => movie.title === title);

    movies.splice(index, 1);

    setFilter('');
    setMovies([...movies]);
  }

  useEffect(() => {
    const filteredMovies = movies.filter(movie =>
      movie.title.includes(addfilter));

    setFilteredMovies(filteredMovies);
  }, [addfilter, movies]);


  return (
    <div className="App">
      <div className='current-movie-section'>
        <MovieForm titleForm={titleForm}
          setTitleForm={setTitleForm}
          directorForm={directorForm}
          setDirectorForm={setDirectorForm}
          yearForm={yearForm}
          setYearForm={setYearForm}
          colorForm={colorForm}
          setColorForm={setColorForm}
          addMovie={addMovie}/>
        {
          titleForm && <MovieItem title={titleForm} director={directorForm} year={yearForm} color={colorForm}/>
        }
        
      </div>
      <p>Filter Mpvoies</p>
      <input value={addfilter} onChange={(e) => setFilter(e.target.value)}/>
      <MovieList movies={
        filteredMovies.length
          ? filteredMovies
          : movies
      }
      deleteMovie={deleteMovie}/>
    </div>
  );
}

export default App;
