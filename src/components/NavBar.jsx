import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul className='flex gap-5 cursor-pointer'>
        <Link to='/'>Home</Link>
        <Link to='/tvshows'>TV Shows</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/new-popular'>New & Popular</Link>
      </ul>
    </nav>
  );
}

export default NavBar;
