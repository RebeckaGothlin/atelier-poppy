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
  height: 500px;
  @media (max-width: 768px) {
    height: auto;
    width: 70%;
    margin: 0 auto;
  }

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

import sand from "../assets/images/paris (2).jpg";
import satellite from "../assets/images/illustartion.jpg";
import ocean from "../assets/images/diplom.jpg";
import fresa from "../assets/images/paris-2.jpg";
import sangre from "../assets/images/Screenshot_20230121-114557_Photos.jpg";
import dune from "../assets/images/restaurang.jpg";

const images = [
  { src: sand, title: "Paris" },
  { src: satellite, title: "Illustration" },
  { src: ocean, title: "Diploma" },
  { src: fresa, title: "Paris illustrations" },
  { src: sangre, title: "Italy" },
  { src: dune, title: "Restaurant" },
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
