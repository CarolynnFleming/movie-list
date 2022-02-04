import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import useMovieForm from './useMovieForm';

function App() {
  const [movies, setMovies] = useState('');
  const [filter, setFilter] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const {
    titleForm, setTitleForm, directorForm, setDirectorForm, yearForm, setYearForm, colorForm, setColorForm,
  } = useMovieForm();

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
