import React from "react";
import styled from "styled-components";

const GallerySection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  box-sizing: border-box;
  gap: 2rem;
  padding: 0 2rem;
  margin-bottom: 6rem;

  @media (max-width: 768px) {
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
      aspect-ratio: 11 / 9;
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
  }
`;

import paris from "../assets/images/paris (2).jpg";
import illustration from "../assets/images/illustartion.jpg";
import diploma from "../assets/images/diplom.jpg";
import paris2 from "../assets/images/paris-2.jpg";
import italy from "../assets/images/Screenshot_20230121-114557_Photos.jpg";
import restaurant from "../assets/images/restaurang.jpg";
import bookmarks from "../assets/images/bookmarks.jpg";
import bookmark from "../assets/images/bookmarks-pettson.jpg";
import photoshop from "../assets/images/photoshop.jpg";
import julkula from "../assets/images/julkula.jpg";
import glaskula from "../assets/images/glaskula.jpg";
// import guldklot from "../assets/images/guldklot.jpg";
// import marble from "../assets/images/marble.jpg";
import vitvas from "../assets/images/vitvas.jpg";
import öken from "../assets/images/öken.png";
import månlandskap from "../assets/images/månlandskap.png";

const images = [
  { src: paris, title: "Café de Flore", type: "Handmade drawing" },
  { src: illustration, title: "Wine and Caviar", type: "Handmade drawing" },
  { src: diploma, title: "Diploma", type: "Handmade" },
  { src: paris2, title: "Paris illustrations", type: "Handmade drawing" },
  { src: italy, title: "Italy illustration", type: "Handmade drawing" },
  { src: restaurant, title: "Parisian restaurant", type: "Handmade drawing" },
  { src: bookmarks, title: "Bookmarks", type: "Handmade drawing" },
  { src: bookmark, title: "Bookmarks", type: "Handmade drawing" },
  { src: photoshop, title: "Book Cover", type: "Photoshop" },
  { src: julkula, title: "Christmas Ornament", type: "Photoshop" },
  { src: glaskula, title: "Glass full of Water", type: "Photoshop" },
  // { src: guldklot, title: "Photoshop illustration" },
  // { src: marble, title: "Photoshop illustration" },
  { src: vitvas, title: "White Vase", type: "Photoshop" },
  { src: öken, title: "Desert", type: "Illustrator" },
  { src: månlandskap, title: "Mountain nights", type: "Illustrator" },
];

const Gallery: React.FC = () => {
  return (
    <>
      <GallerySection id="prints">
        {images.map((item, index) => (
          <GalleryItem key={index}>
            <div className="image-box">
              <img src={item.src} alt={item.title} />
            </div>
            <p>
              <span>{item.type}</span>
            </p>
            <p>{item.title}</p>
          </GalleryItem>
        ))}
      </GallerySection>
    </>
  );
};

export default Gallery;
