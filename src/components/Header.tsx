import React, { useEffect } from "react";
import styled from "styled-components";
// import cartIcon from "../assets/svgs/cart.svg";
import poppyIcon from "../assets/svgs/poppy.svg";
import { useLanguage } from "./LanguageContext";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #fffbf7;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  font-family: "Playfair Display", serif;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const Logo = styled.div`
  color: #a9002d;
  font-size: 1.7rem;
  font-weight: normal;
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    @media (max-width: 370px) {
      margin-right: 0px;
      padding-right: 0;
      line-height: 25px;
      width: 90px;
    }
  }

  img {
    margin-top: 3px;
    margin-left: 3px;
    width: 35px;
    height: 35px;
    filter: brightness(0) saturate(100%) invert(9%) sepia(85%) saturate(4195%)
      hue-rotate(334deg) brightness(107%) contrast(110%);

    @media (max-width: 768px) {
      margin-left: 3px;
      width: 30px;
      height: 30px;
    }
  }
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

// const Cart = styled.div`
//   display: flex;
//   align-items: center;
//   cursor: pointer;

//   img {
//     width: 20px;
//     height: 20px;
//     margin-right: 0.2rem;
//     filter: brightness(0) saturate(100%) invert(9%) sepia(85%) saturate(4195%)
//       hue-rotate(334deg) brightness(107%) contrast(110%);
//   }
// `;

const Link = styled.button`
  color: #a9002d;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;

  &:hover {
    color: #9a0025;
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }
`;

const LanguageButton = styled.button`
  color: #a9002d;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;

  &:hover {
    color: #9a0025;
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }
`;

const Header: React.FC = () => {
  useEffect(() => {
    if (window.location.hash === "#prints") {
      window.history.replaceState(null, "", " ");
    }
  }, []);
  const { language, setLanguage } = useLanguage();

  return (
    <HeaderWrapper>
      <Nav>
        <Link
          as="button"
          onClick={() => {
            const element = document.getElementById("prints");
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {language === "sv" ? "Galleri" : "Gallery"}
        </Link>
      </Nav>
      <Logo
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <span>Atelier Poppy</span>
        <img src={poppyIcon} alt="Poppy" />
      </Logo>
      <RightWrapper>
        <LanguageButton
          onClick={() => setLanguage(language === "sv" ? "en" : "sv")}
        >
          {language === "sv" ? "EN" : "SV"}
        </LanguageButton>
        {/* <Cart>
          <img src={cartIcon} alt="Cart" />
          <span>0</span>
        </Cart> */}
      </RightWrapper>
    </HeaderWrapper>
  );
};

export default Header;
