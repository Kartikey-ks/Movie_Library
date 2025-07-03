import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="logo">Movie Library</div>
            <div className="links flex justify-between space-x-4">
                <Link to="/home" className="nav-link">Home</Link>
                <Link to="/favourites" className="nav-link">Favourites</Link>
            </div>
            <Link to="/register" className='text-white bg-[#0170db] p-2 rounded-xl'>Login/Register</Link>
        </nav>
    )
}

export default NavBar;