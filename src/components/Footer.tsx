import React from "react";
import styled from "styled-components";
// import { useLanguage } from "./LanguageContext";

const FooterWrapper = styled.footer`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  font-family: "Playfair Display", serif;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    font-size: 0.9rem;
  }
`;

// const Newsletter = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   align-items: center;

//   .input-wrapper {
//     display: flex;
//     align-items: center;
//   }

//   input {
//     padding: 1rem;
//     color: #a9002d;
//     border: 1px solid #a9002d;
//     font-family: "Playfair Display", serif;
//     background-color: transparent;

//     &:focus {
//       outline: 1px solid #a9002d;
//     }
//   }

//   button {
//     background: #a9002d;
//     color: #ffdcdc;
//     border: none;
//     padding: 1rem 1.2rem;
//     cursor: pointer;
//     margin-left: 10px;
//     border-radius: 0;
//   }
// `;

const Footer: React.FC = () => {
  // const { language } = useLanguage();
  return (
    <FooterWrapper>
      {/* <p>
        {language === "sv"
          ? "Skapat av Rebecka Göthlin"
          : "Made by Rebecka Göthlin"}
      </p> */}
      {/* <Newsletter>
        <div>
          <p>
            {language === "sv"
              ? "Anmäl dig med din e-postadress för att få nyheter och uppdateringar."
              : "Sign up with your email address to receive news and updates."}
          </p>
        </div>
        <div className="input-wrapper">
          <input
            type="email"
            placeholder={language === "sv" ? "E-postadress" : "Email Address"}
          />
          <button>{language === "sv" ? "Anmäl" : "Sign Up"}</button>
        </div>
      </Newsletter> */}
      <p>© Atelier Poppy</p>
    </FooterWrapper>
  );
};

export default Footer;
