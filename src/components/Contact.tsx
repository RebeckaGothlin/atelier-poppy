import React from "react";
import styled from "styled-components";
import sand from "../assets/rebecka-colors.jpg";
import { useLanguage } from "./LanguageContext";

const ContactSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const ImageBox = styled.div`
  width: 50%;
  background: #d0b4b4;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    padding: 2.5rem;
  }

  img {
    padding: 10px;
    max-width: 180px;
    display: block;
    margin: 0 auto;
    transform: scaleX(-1);
  }
`;

const ContactInfo = styled.div`
  width: 50%;
  font-family: "Playfair Display", serif;
  max-width: 400px;
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 120px;

  @media (max-width: 768px) {
    margin-right: 0;
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-align: left;
  }

  p {
    margin-bottom: 1rem;
    text-align: left;
  }

  .contactInfo-wrapper {
    margin-top: 10px;

    a {
      color: #a9002d;
      font-size: 0.8rem;
      text-decoration: underline;
      display: block;
      margin-top: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    text-align: center;

    h3,
    p,
    .contactInfo-wrapper {
      text-align: center;
    }
  }
`;

const Contact: React.FC = () => {
  const { language } = useLanguage();
  return (
    <ContactSection>
      <ImageBox>
        <img src={sand} alt="Contact artwork" />
      </ImageBox>
      <ContactInfo>
        <h3>{language === "sv" ? "Kontakt" : "Contact"}</h3>
        <p>
          {language === "sv"
            ? "Är du intresserad av en specialbeställning eller har frågor? Hör av dig!"
            : "Interested in custom artwork or have questions? I’d love to hear from you!"}
        </p>
        <div className="contactInfo-wrapper">
          <a href="mailto:atelierpoppyart@gmail.com">
            atelierpoppyart@gmail.com
          </a>
          {/* <a href="tel:+15555555555">(555) 555-5555</a> */}
        </div>
      </ContactInfo>
    </ContactSection>
  );
};

export default Contact;
