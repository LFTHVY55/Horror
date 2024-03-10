import React, { useState } from 'react';
import './App.css';
import villainsData from './data/villainsData'; // Import the villainsData array
import Home from './components/Home';
import VillainDetail from './components/VillainDetail';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import BrowserRouter, Routes, Route, and Link

// Navbar component
function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <p>Click on the photos for more information about the villains</p>
    </nav>
  );
}


function App() {
  // State variable to store the ID of the selected villain
  const [featVillainId, setFeatVillainId] = useState(null);

  // State variable to store the villains data
  const [villains, setVillains] = useState(villainsData);

  console.log(villains); // Log the villains array from the useState hook

  // Function to handle clicking on a villain
  const handleClick = (id) => {
    setFeatVillainId(id); // Set the selected villain ID in the state
  };

  // Find the selected villain based on the featVillainId
  const featuredVillain = villains.find((villain) => villain.id === featVillainId);

  console.log(featuredVillain); // Log the featured villain to the console

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Historical Villains</h1>
          {/* Add your navigation bar here */}
          <Navbar />
        </header>

        <Routes> {/* Use Routes to define your routes */}
          <Route path="/" element={<Home villains={villains} handleClick={handleClick} />} /> {/* Use element prop instead of component */}
          <Route path="/villain/:id" element={<VillainDetail />} /> {/* Use element prop instead of component */}
        </Routes>

    
      </div>
    </Router>
  );
}

export default App;
