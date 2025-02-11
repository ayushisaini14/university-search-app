import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/favorites')
      .then(response => setFavorites(response.data))
      .catch(error => console.error("Error fetching favorites:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Your Favorite Universities</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>State/Province</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((fav, index) => (
              <tr key={index}>
                <td>{fav.university_name}</td>
                <td>{fav.state_province || 'N/A'}</td>
                <td><a href={fav.web_page} target="_blank">Visit</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FavoritesPage;
