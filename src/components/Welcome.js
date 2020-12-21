import React, { useState, useEffect } from 'react';
// import galleryImageData from './data/gallery_images.json';

const Welcome = () => {
  const [galleryImageData, setGalleryImageData] = useState([]);

  const loadGalleryImageData = async () => {
    // Query API Gateway
    const resp = await fetch('https://8xm31hgecd.execute-api.us-east-1.amazonaws.com/Production/galleryImage');
    let jsonData = await resp.json();
    // Assign the response data to the state variable
    setGalleryImageData(jsonData);
  }
  useEffect(() => {
    // Load the gallery image data from the API Gateway
    loadGalleryImageData();
  }, []);

  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery">
          {
            galleryImageData.map((image) =>
             <img className={image.className} src={image.src} alt={image.alt} />
            )
          }
        </div>
        <h1>Welcome to the Landon&nbsp;Hotel</h1>
        <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
      </article>
    </div>
  );
}

export default Welcome;