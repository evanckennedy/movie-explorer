import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='container'>
      <Link to={'/'}>
        <h1>Movie Explorer</h1>
        <p className="sub-header">Discover Your Next Favourite Film</p>
      </Link>
    </header>    
  )
}

export default Header;