import React from "react";
import styled, { keyframes } from "styled-components";
import { useLanguage } from "./LanguageContext";

const slideUp = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(-40px);
    opacity: 1;
  }
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  font-family: "Playfair Display", serif;
`;

const Title = styled.h2`
  font-size: 3.2rem;
  font-weight: 400;
  line-height: 1.4;
  margin-top: 0;
  opacity: 0;
  animation: ${slideUp} 1.5s ease-out forwards;

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 100vw;

    .break {
      display: none;
    }

    .no-break {
      margin-left: 0.6rem;
    }
  }
`;

const Hero: React.FC = () => {
  const { language } = useLanguage();
  return (
    <HeroSection>
      <Title>
        {language === "sv"
          ? "Handgjorda teckningar. Konstprints. Digitala illustrationer."
          : "Handmade drawings. Art prints. Digital illustrations."}
      </Title>
    </HeroSection>
  );
};

export default Hero;
