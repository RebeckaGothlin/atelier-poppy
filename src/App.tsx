import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";
import { LanguageProvider } from "./components/LanguageContext";

const App: React.FC = () => {
  return (
    <>
      <LanguageProvider>
        <GlobalStyle />
        <Header />
        <Hero />
        <Gallery />
        <Contact />
        <Footer />
      </LanguageProvider>
    </>
  );
};

export default App;
