// ✅ Imports added for state, navigation and Firebase function
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase'; // ✅ import from firebase.js

function Register() {
  // ✅ Added states for email/password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ✅ Navigate after successful registration
  const navigate = useNavigate();

  // ✅ Handle form submit and Firebase registration
  const handleRegister = async (e) => {
    e.preventDefault();
      await createUserWithEmailAndPassword(auth, email, password); // ✅ Firebase Auth
      alert('Account created successfully!');
      navigate('/home'); // ✅ Redirect to login

  };

  // ✅ Updated form to capture email and password using useState
    // <form onSubmit={handleRegister}>
    //   <input value={email} onChange={(e) => setEmail(e.target.value)} />
    //   <input value={password} onChange={(e) => setPassword(e.target.value)} />
    // </form>

    return (
        <div className="flex items-center justify-center p-4 pt-10 font-sans">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                {/* Headings */}
                <h1 className="text-3xl font-extrabold text-gray-900 mb-2 text-center">New Here?</h1>
                <h3 className="text-xl text-gray-600 mb-8 text-center">Create an Account</h3>

                {/* Registration Form */}
                <form className="space-y-6" onSubmit={handleRegister}>
                    {/* Email Input Group */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                            placeholder="your.email@example.com"
                        />
                    </div>

                    {/* Password Input Group */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        {/* Corrected type to "password" and id to "password" */}
                        <input value={password} onChange={(e) => setPassword(e.target.value)} 
                            type="password"
                            id="password"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                            placeholder="••••••••"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 shadow-md"
                    >
                        Create Account
                    </button>
                </form>

                {/* Login Link */}
                <p className="p-1 mt-8 text-center text-gray-600">
                    Already have an Account?{' '}
                    <span>
                        <Link to="/login"
                            className="text-[#0170db] border-b-1 pb-0.5 border-[#0170db] 
                            hover:bg-[#0170db] transition-colors duration-300 hover:text-blue-700"
                        >
                            LogIn
                        </Link>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Register;
