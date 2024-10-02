import React, { useState } from 'react';

const photos = [
  "https://static.wixstatic.com/media/bdf21a_2a810ada6f6a4e37ad524a9a8cb9f43c~mv2.jpeg",
  "https://static.wixstatic.com/media/bdf21a_6b57fa10837e40e29ee3b6fa07cfecfb~mv2.jpeg",
  "https://static.wixstatic.com/media/bdf21a_be3b8d5a10684acf9a9b929b7ab80ca7~mv2.jpg",
  "https://static.wixstatic.com/media/bdf21a_19eeb7eb8d324014a6352c1a39b87033~mv2.jpeg",
  "https://static.wixstatic.com/media/bdf21a_594a8acd9d3b48ffa460030ca33b0301~mv2.jpeg",
  "https://static.wixstatic.com/media/bdf21a_29e4c2667a1d44abaa32e087618815aa~mv2.jpeg",
  "https://static.wixstatic.com/media/bdf21a_43eebc93adad4cd09a977d9c078a2e47~mv2.jpeg",
  "https://static.wixstatic.com/media/bdf21a_e37dabc330ee401baa11252329dcdcec~mv2.jpeg",
  "https://static.wixstatic.com/media/bdf21a_3e4c9f5abd044684ac60a47b172a0a62~mv2.jpeg"
];

const S2 = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const openPhoto = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closePhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const goToNextPhoto = () => {
    setSelectedPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const goToPrevPhoto = () => {
    setSelectedPhotoIndex((prevIndex) =>
      (prevIndex - 1 + photos.length) % photos.length
    );
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`Photo ${index + 1}`}
          className="cursor-pointer transition-transform transform hover:scale-105 w-full h-48 object-cover"
          onClick={() => openPhoto(index)}
        />
      ))}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <button className="absolute top-4 right-4 text-white" onClick={closePhoto}>
            X
          </button>
          <button className="absolute left-4 text-white" onClick={goToPrevPhoto}>
            &lt;
          </button>
          <button className="absolute right-4 text-white" onClick={goToNextPhoto}>
            &gt;
          </button>
          <img
            src={photos[selectedPhotoIndex]}
            alt={`Photo ${selectedPhotoIndex + 1}`}
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </div>
  );
};

export default S2;
