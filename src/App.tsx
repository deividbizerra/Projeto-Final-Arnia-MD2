import GlobalStyles from "./assets/styles/global-styles";
import Router from "./config/routers/router";
import theme from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
