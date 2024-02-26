// Home.jsx
// import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    
    <div className="container mx-auto mt-10 text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to the CN-project!</h1>
      <div>
        <Link to="/login">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
