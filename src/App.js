import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import useMovieForm from './useMovieForm';
import MovieForm from './MovieForm';
import MovieItem from './MovieItem';
import MovieList from './MovieList';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const {
    titleForm, setTitleForm, directorForm, setDirectorForm, yearForm, setYearForm, colorForm, setColorForm,
  } = useMovieForm();

  function submitMovie(e) {
    e.preventDefault();
  
    const newMovie = {
      title: titleForm,
      director: directorForm,
      year: yearForm,
      color: colorForm,
    };
    setAllMovies([...allMovies, newMovie]);

    setTitleForm('');
    setDirectorForm('');
    setYearForm('');
    setColorForm('red');
  }
  function handleDeleteMovie(id) {
    const movieIndex = allMovies.findIndex(movie => movie.id === id);

    allMovies.splice(movieIndex, 1);
    setAllMovies([...allMovies]);
  }

  function handleFilterMovies(search) {
    const lessMovies = allMovies.filter(movie => movie.title.includes(search));
    search ? setFilteredMovies(lessMovies) : setFilteredMovies(allMovies);
  }


  return (
    <div className="App">
      <div className='current-movie-section'>

        <MovieItem movie={{
          title: titleForm,
          director: directorForm,
          year: yearForm,
          color: colorForm
        }}/>
      </div>
      <div className='movie-filter'>
        FilterMovies:
        <input onChange={(e) => handleFilterMovies(e.target.value)}/>
      </div>

      <MovieForm 
        submitMovie={submitMovie}
        titleForm={titleForm}
        setTitleForm={setTitleForm}
        directorForm={directorForm}
        setDirectorForm={setDirectorForm}
        yearForm={yearForm}
        setYearForm={setYearForm}
        colorForm={colorForm}
        setColorForm={setColorForm}/>
        
      <MovieList 
        movies={filteredMovies.length ? filteredMovies : allMovies}
        handleDeleteMovie={handleDeleteMovie}/>
      
      
    </div>
  );
}

export default App;
