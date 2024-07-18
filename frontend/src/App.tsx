import React from 'react';
import './App.css';
import IndividualMovie from './movies/IndividualMovie';

function App() {
const testMovie =           {
  id: 1,
  title: 'Spider-Man: Far From Home',
  poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
};

  return (
    <>
    <IndividualMovie {...testMovie} />
    </>
  );
}

export default App;
