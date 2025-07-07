// import { Link } from 'react-router-dom';

// function NavBar() {
//     return (
//         <nav className="navbar flex justify-between items-center p-4 bg-gray-800 text-white">
//             <div className="logo">Movie Library</div>
//             <div className="links flex justify-between space-x-4">
//                 <Link to="/home" className="nav-link">Home</Link>
//                 <Link to="/favourites" className="nav-link">Favourites</Link>
//             </div>
//             <Link to="/register" className='text-white bg-[#0170db] p-2 rounded-xl'>Login/Register</Link>
//         </nav>
//     )
// }

// export default NavBar;

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from '../services/firebase'; // ✅ Import Firebase auth
import { onAuthStateChanged, signOut } from 'firebase/auth'; // ✅ Import these from Firebase

function NavBar() {
    const [user, setUser] = useState(null);

    // ✅ Listen for auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe(); // Cleanup listener on unmount
    }, []);

    // ✅ Handle logout
    const handleLogout = async () => {
        await signOut(auth);
    };

    return (
        <nav className="navbar flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="logo text-xl font-semibold">Movie Library</div>

            <div className="links flex items-center space-x-6">
                <Link to="/home" className="nav-link">Home</Link>
                <Link to="/favourites" className="nav-link">Favourites</Link>
            </div>

            {/* ✅ Conditional auth actions */}
            <div className="flex items-center space-x-4">
                {user ? (
                    <>
                        <span className="text-sm text-gray-300">{user.email}</span>
                        <button onClick={handleLogout} className='text-white bg-red-500 px-3 py-1 rounded-md'>Logout</button>
                    </>
                ) : (
                    <Link to="/register" className='text-white bg-[#0170db] p-2 rounded-xl'>Login/Register</Link>
                )}
            </div>
        </nav>
    );
}

export default NavBar;
