import React from 'react';

import './App.scss';
import Header from './Components/Header';
import requests from './Components/request';
import Row from './Components/Row';

function App() {
  return (
    <div className="App">
      <Header/>
      <Row title="NETFLIX Originals"fetchD={requests.fetchNetflixOriginals} islarge={true}/>
      <Row title="Trending"  fetchD={requests.fetchTrending}/>
      <Row title="Romantic Movies" fetchD={requests.fetchRomanceMovies}/>
      <Row title="Top Rated"fetchD={requests.fetchTopRated}/>
      <Row title="Horror Movies" fetchD={requests.fetchHorrorMovies}/>
    </div>
  );
}

export default App;
