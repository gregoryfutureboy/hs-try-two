import React, { Component, Fragment } from "react";
import { Router } from "@reach/router";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Design System/GlobalStyles";
import { theme } from "./components/Design System/Theme";
import Landing from "./containers/LandingPage/Landing";
import MonthlyDose from "./containers/MonthlyDosePage/MonthlyDose";

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Router>
            <Landing path="/" />
            <MonthlyDose path="/your-monthly-dose" />
          </Router>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default App;
