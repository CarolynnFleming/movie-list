import { useState } from 'react';

export default function useMovieForm() {
  const [titleForm, setTitleForm] = useState('');
  const [directorForm, setDirectorForm] = useState('');
  const [yearForm, setYearForm] = useState('');
  const [colorForm, setColorForm] = useState('red');


  return {
    titleForm, setTitleForm, directorForm, setDirectorForm, yearForm, setYearForm, colorForm, setColorForm
  };
}
