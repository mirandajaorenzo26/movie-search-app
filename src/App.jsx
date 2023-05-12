import { useState } from 'react';
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='text-xl text-red'>NETFLIX-LIKE MOVIE SEARCH APP</h1>
      <NavBar />
    </>
  );
}

export default App;
