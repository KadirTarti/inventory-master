import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./app/store";
import AppRouter from "./router/AppRouter";

function App() {


  
  const theme = createTheme({
    palette: {
      primary: {
        main: "#c00000",

      },
      secondary: {
        main: "#7fa99b",
        second: "#085f63",
        
      },
    },
  });

 


  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
