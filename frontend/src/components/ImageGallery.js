import React from 'react';
function ImageGallery({ images }) {
  return (
    <div>
      {images.map((img, i) => (
        <img key={i} src={img} alt={`Legion ${i}`} style={{ width: '200px', margin: '10px' }} />
      ))}
    </div>
  );
}
export default ImageGallery;