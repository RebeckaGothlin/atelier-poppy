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
  overflow: hidden;

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    transition: transform 0.3s ease, filter 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:hover img {
    transform: scale(1.05) translateY(-5px);
    filter: brightness(1.05);
  }

  p {
    margin-top: 0.75rem;
    font-family: "Playfair Display", serif;
    font-size: 1rem;
  }
`;

import sand from "../assets/images/sand.jpg";
import satellite from "../assets/images/satellite.jpg";
import ocean from "../assets/images/ocean.jpg";
import fresa from "../assets/images/fresa.jpg";
import sangre from "../assets/images/sangre.jpg";
import dune from "../assets/images/dune.jpg";

const images = [
  { src: sand, title: "Sand" },
  { src: satellite, title: "Satellite" },
  { src: ocean, title: "Ocean" },
  { src: fresa, title: "Fresa" },
  { src: sangre, title: "Sangre" },
  { src: dune, title: "Dune" },
];

const Gallery: React.FC = () => {
  return (
    <>
      <GallerySection id="prints">
        {images.map((item, index) => (
          <GalleryItem key={index}>
            <img src={item.src} alt={item.title} />
            <p>{item.title}</p>
          </GalleryItem>
        ))}
      </GallerySection>
    </>
  );
};

export default Gallery;
