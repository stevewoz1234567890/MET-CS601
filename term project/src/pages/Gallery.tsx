import React, { useState } from "react";
import "../css/Gallery.css";

interface Photo {
  id: string;
  src: string;
  alt: string;
}

const initialPhotos: Photo[] = [
  { id: "1", src: "/img/photo1.webp", alt: "Sunset at the beach" },
  { id: "2", src: "/img/photo2.webp", alt: "Hiking in the mountains" },
  { id: "3", src: "/img/photo3.webp", alt: "City skyline at night" },
  { id: "4", src: "/img/photo4.webp", alt: "A beautiful forest trail" },
  { id: "5", src: "/img/photo5.webp", alt: "Serene lake view" },
];

const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>(initialPhotos);
  const [draggingId, setDraggingId] = useState<string | null>(null);

  const handleDragStart = (id: string) => {
    setDraggingId(id);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (id: string) => {
    if (!draggingId) return;

    const sourceIndex = photos.findIndex((photo) => photo.id === draggingId);
    const targetIndex = photos.findIndex((photo) => photo.id === id);

    const updatedPhotos = [...photos];
    const [draggedPhoto] = updatedPhotos.splice(sourceIndex, 1);
    updatedPhotos.splice(targetIndex, 0, draggedPhoto);

    setPhotos(updatedPhotos);
    setDraggingId(null);
  };

  return (
    <div className="gallery-container">
      <h1>Drag and Drop Photo Gallery</h1>
      <p>Rearrange the photos by dragging and dropping them below:</p>
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className={`gallery-item ${
              draggingId === photo.id ? "dragging" : ""
            }`}
            draggable
            onDragStart={() => handleDragStart(photo.id)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(photo.id)}
            aria-grabbed={draggingId === photo.id}
            role="listitem"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              onError={(e) => {
                e.currentTarget.src = "/assets/placeholder.jpg"; // Fallback image
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
