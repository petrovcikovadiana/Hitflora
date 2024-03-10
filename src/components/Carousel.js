import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  // State to keep track of the current set of images
  const [currentSet, setCurrentSet] = useState(0);

  // Calculate the total number of sets
  const totalSets = Math.ceil(images.length / 3);

  useEffect(() => {
    // Switch images every 5 seconds
    const interval = setInterval(() => {
      setCurrentSet((currentSet) => {
        // Move to the next set, or loop back to the first set if at the end
        return (currentSet + 1) % totalSets;
      });
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [totalSets]);

  // Calculate the slice of images to display
  const displayImages = images.slice(currentSet * 3, currentSet * 3 + 3);

  return (
    <div className="carousel">
      {displayImages.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image} alt={`Slide ${index}`} loading="lazy" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
