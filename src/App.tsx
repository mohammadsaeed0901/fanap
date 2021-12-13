import React , {useState , useEffect} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Index from "./Main";
import { ThemeProvider , Theme , StyledEngineProvider} from "@mui/material/styles";
import StylesProvider from "@mui/styles/StylesProvider";
import AppRoutes from "./Routes";
// import {create} from "@mui/material/styles/createTransitions";
// import {jssPreset} from "@mui/styles";
import {Themes} from "./Themes";

// const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = () => {

    const [theme, setTheme] = useState<Theme>(Themes.DefaultTheme);

    useEffect(() => {
        setTheme(Themes.DefaultTheme);
    }, []);

  return (
      <StylesProvider>
      {/*<StylesProvider jss={jss}>*/}
          <StyledEngineProvider injectFirst>
              <ThemeProvider theme={theme}>
                  <div dir="ltr" className="main-wrapper">
                      <AppRoutes />
                  </div>
                  {/*<ToastContainer*/}
                  {/*    position="top-left"*/}
                  {/*    autoClose={5000}*/}
                  {/*    hideProgressBar={true}*/}
                  {/*    newestOnTop={false}*/}
                  {/*    closeOnClick*/}
                  {/*    rtl*/}
                  {/*    pauseOnFocusLoss*/}
                  {/*    draggable*/}
                  {/*    pauseOnHover*/}
                  {/*/>*/}
              </ThemeProvider>
          </StyledEngineProvider>
      </StylesProvider>
  );
};

export default App;
