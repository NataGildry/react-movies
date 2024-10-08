import React from 'react';
import './App.css';
import MoviesList from './movies/MoviesList';
import { movieDTO } from './movies/movies.model';

function App() {
const inTheaters: movieDTO[] = [{
  id: 1,
  title: 'Spider-Man: Far From Home',
  poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
},
{
  id: 2,
  title: 'Luca',
  poster: 'https://i0.wp.com/www.hd.com.do/wp-content/uploads/2021/04/1619620464_LUCA-Disney.png?fit=525%2C750&ssl=1'
}];

const upcomingReleases: movieDTO[] = [{
    id: 3,
    title: 'Soul',
    poster: 'https://i.pinimg.com/originals/9d/6a/04/9d6a0489776b1abde5f7f1b474a8b6c4.png'
  }
]

  return (
    <>
    <h3>In Theaters</h3>
    <MoviesList movies={inTheaters}/>

    <h3>Upcoming Releases</h3>
    <MoviesList movies={upcomingReleases}/>
    </>
  );
}

export default App;
