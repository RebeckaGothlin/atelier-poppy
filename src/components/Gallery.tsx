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
    aspect-ratio: 8 / 9;
    background: #fae8e8;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 1.9rem;

    @media (max-width: 768px) {
      aspect-ratio: 11 / 9;
      padding: 1.5rem;
    }
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    display: block;
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  .image-box:hover img {
    transform: scale(1.05);
    filter: brightness(1.05);
  }

  p {
    margin-top: 0.75rem;
    font-family: "Playfair Display", serif;
    font-size: 1rem;
  }
`;

import paris from "../assets/images/paris (2).jpg";
import illustration from "../assets/images/illustartion.jpg";
import diploma from "../assets/images/diplom.jpg";
import paris2 from "../assets/images/paris-2.jpg";
import italy from "../assets/images/Screenshot_20230121-114557_Photos.jpg";
import restaurant from "../assets/images/restaurang.jpg";

const images = [
  { src: paris, title: "Paris" },
  { src: illustration, title: "Illustration" },
  { src: diploma, title: "Diploma" },
  { src: paris2, title: "Paris illustrations" },
  { src: italy, title: "Italy" },
  { src: restaurant, title: "Restaurant" },
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
            <p>{item.title}</p>
          </GalleryItem>
        ))}
      </GallerySection>
    </>
  );
};

export default Gallery;
