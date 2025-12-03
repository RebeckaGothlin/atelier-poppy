import React, { useState } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 37px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: #fdf6ee;
  padding: 1.5rem;
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
  position: relative;
  text-align: center;

  img {
    max-width: 100%;
    max-height: 70vh;
    object-fit: contain;
  }

  span {
    text-align: left;
    text-transform: uppercase;
    font-family: "Segoe UI", Arial, sans-serif;
    font-size: 0.7rem;
    color: #4a4a4a;
  }

  p {
    text-align: left;
    margin-top: 0.75rem;
    font-family: "Playfair Display", serif;
    font-size: 1.2rem;
    margin-top: 0;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(4px);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.2s ease;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    background: #fffbf7;
    border-radius: 2px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:hover {
    /* background: rgba(155, 155, 155, 0.55); */
    transform: scale(1.12);
  }
`;

const GallerySection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  box-sizing: border-box;
  gap: 2rem;
  padding: 0 2rem;
  margin-bottom: 6rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 0.05rem;
  }

  @media (max-width: 575px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

const GalleryItem = styled.div`
  text-align: center;

  .image-box {
    width: 100%;
    aspect-ratio: 6 / 9;
    background: #fdf6ee;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 1.9rem;

    @media (max-width: 768px) {
      aspect-ratio: 11 / 10;
      padding: 1.5rem;
    }
  }

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    display: block;
    transition: transform 0.3s ease, filter 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .image-box:hover img {
    transform: scale(1.05);
    filter: brightness(1.05);
  }

  span {
    text-align: left;
    text-transform: uppercase;
    font-family: "Segoe UI", Arial, sans-serif;
    font-size: 0.7rem;
    color: #4a4a4a;
  }

  p {
    text-align: left;
    margin-top: 0.75rem;
    font-family: "Playfair Display", serif;
    font-size: 1.2rem;
    margin-top: 0;
    margin-left: 10px;

    @media (max-width: 575px) {
      text-align: center;
    }
  }
`;

import rosehill from "../assets/images/rosehill.jpg";
import paris from "../assets/images/paris.jpg";
import illustration from "../assets/images/caviar.jpg";
import diploma from "../assets/images/diploma.jpg";
import paris2 from "../assets/images/consulat.jpg";
import italy from "../assets/images/Italy.jpg";
import restaurant from "../assets/images/restaurant.jpg";
import bookmarks from "../assets/images/bookmarks (2).jpg";
import bookmark from "../assets/images/bookmark.jpg";
import bok from "../assets/images/bok.jpg";
import photoshop from "../assets/images/photoshop.jpg";
import julkula from "../assets/images/julkula.jpg";
import glaskula from "../assets/images/glaskula.jpg";
// import guldklot from "../assets/images/guldklot.jpg";
// import marble from "../assets/images/marble.jpg";
import vitvas from "../assets/images/vitvas.jpg";
import öken from "../assets/images/öken.png";
import månlandskap from "../assets/images/månlandskap.png";

const images = [
  { src: rosehill, title: "Rosehill Cottage", type: "Handmade drawing" },
  { src: paris, title: "Café de Flore", type: "Handmade drawing" },
  { src: illustration, title: "Wine and Caviar", type: "Handmade drawing" },
  { src: diploma, title: "Diploma", type: "Handmade" },
  { src: paris2, title: "Le Consulat", type: "Handmade drawing" },
  { src: italy, title: "Italy illustration", type: "Handmade drawing" },
  { src: restaurant, title: "Parisian restaurant", type: "Handmade drawing" },
  { src: bookmarks, title: "Bookmarks", type: "Handmade" },
  { src: bookmark, title: "Bookmarks", type: "Handmade" },
  { src: bok, title: "Bookmark", type: "Handmade" },
  { src: photoshop, title: "Book Cover", type: "Photoshop" },
  { src: julkula, title: "Christmas Ornament", type: "Photoshop" },
  { src: glaskula, title: "Glass Marble", type: "Photoshop" },
  // { src: guldklot, title: "Photoshop illustration" },
  // { src: marble, title: "Photoshop illustration" },
  { src: vitvas, title: "White Vase", type: "Photoshop" },
  { src: öken, title: "Desert", type: "Illustrator" },
  { src: månlandskap, title: "Mountain nights", type: "Illustrator" },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<null | (typeof images)[0]>(
    null
  );

  const openModal = (item: (typeof images)[0]) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <>
      <GallerySection id="prints">
        {images.map((item, index) => (
          <GalleryItem key={index}>
            <div
              className="image-box"
              onClick={() => openModal(item)}
              style={{ cursor: "pointer" }}
            >
              <img src={item.src} alt={item.title} />
            </div>
            <p>
              <span>{item.type}</span>
            </p>
            <p>{item.title}</p>
          </GalleryItem>
        ))}
      </GallerySection>

      {selectedImage && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>

            <img src={selectedImage.src} alt={selectedImage.title} />
            <p>
              <span>{selectedImage.type}</span>
            </p>
            <p>{selectedImage.title}</p>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Gallery;
