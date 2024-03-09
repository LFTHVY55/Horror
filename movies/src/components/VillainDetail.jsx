import React from 'react';
import { useParams } from 'react-router-dom';
import villainsData from '../data/villainsData'; // Import the villainsData array

function VillainDetail() {
  const { id } = useParams(); // Get the id from URL params

  // Find the selected villain based on the id
  const villain = villainsData.find((villain) => villain.id === parseInt(id));

  // Conditional rendering based on whether villain is found
  if (!villain) {
    return <div>Villain not found</div>;
  }

  return (
    <div>
      <h2>{villain.name}</h2>
      <p>Movie Franchise: {villain.movieFranchise}</p>
      <p>Description: {villain.description}</p>
      <img src={villain.imageUrl} alt={villain.name} />
      {/* Render a p tag with the villain name */}
      <p>{villain.name}</p>
      {/* IMDb Link below the images */}
      <a href={villain.imdbLink} target="_blank" rel="noopener noreferrer">
        IMDb Link
      </a>
    </div>
  );
}

export default VillainDetail;
