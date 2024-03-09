import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import villainsData from './data/villainsData'; // Import the villainsData array
import Home from './components/Home';
import VillainDetail from './components/VillainDetail';

function App() {
  // State variable to store the ID of the selected villain
  const [featVillainId, setFeatVillainId] = useState(null);

  // Function to handle clicking on a villain
  const handleClick = (id) => {
    setFeatVillainId(id); // Set the selected villain ID in the state
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Villains Database</h1>
          {/* Add your navigation bar here */}
        </header>

        <main>
          <Routes>
            {/* Route for the home page */}
            <Route
              path="/"
              element={<Home villains={villainsData} handleClick={handleClick} />}
            />
            {/* Route for the villain detail page */}
            <Route path="/villain/:id" element={<VillainDetail />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2024 Villains Database. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
