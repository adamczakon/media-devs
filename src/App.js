import React, { Fragment } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "./components/Header/";
import AppNavbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Cooperation from "./components/Cooperation";
import Footer from "./components/Footer";
import { theme } from "./components/Utils/theme";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  font-family: "Roboto", sans-serif;
  line-height: 1.6rem;
}

`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <AppNavbar />
        <Header />
        <Services />
        <Team />
        <Testimonials />
        <Cooperation />
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
