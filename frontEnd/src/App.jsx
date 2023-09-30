import Header from "./component/Header/Header";
import "./App.css";

import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Header2 from "./component/Header/‏‏Header2";
import Header3 from "./component/Header/‏‏Header3";
import Hero from "./component/hero/Hero";
import Main from "./component/main/Main";
import Footer from "./component/footer/Footer";
import Scroll from "./component/scroll/Scroll";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />

        <Header />
        <Header2 />
        <Header3 />
      <Box bgcolor={theme.
// @ts-ignore
      palette.bg.main} >
          <Hero/>
    
<Main/>
  </Box>
  <Footer/>

<Scroll/>

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
