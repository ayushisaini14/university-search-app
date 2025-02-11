import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchPage = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/universities")
      .then((response) => {
        setUniversities(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching universities:", error));
  }, []);

  const addToFavorites = async (university) => {
    try {
      await axios.post("http://localhost:5000/api/favorites", {
        university_name: university.name,
        state_province: university["state-province"],
        web_page: university.web_pages[0],
      });
      alert("Added to favorites!");
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  if (loading)
    return (
      <div className="text-center mt-4">
        <h4>Loading...</h4>
      </div>
    );

  return (
    <div className="container mt-4">
      <h2>Search Universities in India</h2>
      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>State/Province</th>
            <th>Website</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          {universities.map((uni, index) => (
            <tr key={index}>
              <td>{uni.name}</td>
              <td>{uni["state-province"] || "N/A"}</td>
              <td>
                <a
                  href={uni.web_pages[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => addToFavorites(uni)}
                >
                  Favorite
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchPage;
