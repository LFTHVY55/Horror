import React, { useState } from 'react';
import './App.css';
import villainsData from './data/villainsData'; // Import the villainsData array

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
  const featuredVillain = villains.find(villain => villain.id === featVillainId);

  console.log(featuredVillain); // Log the featured villain to the console

  return (
    <div className="App">
      {/* Map over the villains array and return JSX for each villain */}
      {villains.map(villain => (
        <div key={villain.id} onClick={() => handleClick(villain.id)}>
          <h2>{villain.name}</h2>
          <p>Movie Franchise: {villain.movieFranchise}</p>
          <p>Description: {villain.description}</p>
          <img src={villain.imageUrl} alt={villain.name} />
          <a href={villain.imdbLink} target="_blank" rel="noopener noreferrer">IMDb Link</a>
          {/* Render a p tag with the villain name */}
          <p>{villain.name}</p>
        </div>
      ))}
      {/* Render the selected villain details */}
      {featuredVillain && (
        <div>
          <h2>Selected Villain</h2>
          <p>Name: {featuredVillain.name}</p>
          <p>Movie Franchise: {featuredVillain.movieFranchise}</p>
          <p>Description: {featuredVillain.description}</p>
          <img src={featuredVillain.imageUrl} alt={featuredVillain.name} />
          <a href={featuredVillain.imdbLink} target="_blank" rel="noopener noreferrer">IMDb Link</a>
        </div>
      )}
    </div>
  );
}

export default App;
