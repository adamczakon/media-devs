import React, { Fragment } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import AppNavbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import { theme } from "./components/Utils/theme";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Header>
          <AppNavbar />
        </Header>
        <Services>xx</Services>
        <Team>xx</Team>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
