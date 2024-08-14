// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  // State to hold the image URL
  const [dogImage, setDogImage] = useState(null);

  // State to manage loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch a random dog image when the component mounts
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // Set the image URL
        setLoading(false); // Set loading to false
      });
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;