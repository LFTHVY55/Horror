import React from 'react';
import { Link } from 'react-router-dom';

function Home({ villains, handleClick }) {
  return (
    <div>
      {/* Map over the villains array and return JSX for each villain */}
      {villains.map((villain) => (
        <div key={villain.id} onClick={() => handleClick(villain.id)}>
          <h2>{villain.name}</h2>
          <p>Movie Franchise: {villain.movieFranchise}</p>
          <p>Description: {villain.description}</p>
          {/* Wrap the image with a Link to the villain detail page */}
          <Link to={`/villain/${villain.id}`}>
            <img src={villain.imageUrl} alt={villain.name} />
          </Link>
          {/* Render a p tag with the villain name */}
          <p>{villain.name}</p>
          {/* Add IMDb link */}
          <p>IMDb: <a href={villain.imdbLink} target="_blank" rel="noopener noreferrer">Link</a></p>
        </div>
      ))}
    </div>
  );
}

export default Home;
