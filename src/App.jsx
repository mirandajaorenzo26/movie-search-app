import { useState } from 'react';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TVShows from './pages/TVShows';
import Movies from './pages/Movies';
import NewPopular from './pages/NewPopular';

function App() {
  return (
    <>
      <h1 className='text-xl text-red  my-5'>NETFLIX-LIKE MOVIE SEARCH APP</h1>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tvshows' element={<TVShows />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/new-popular' element={<NewPopular />} />
      </Routes>
    </>
  );
}

export default App;
