import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
//components

import Router from "./router";
import { AppContext } from "./context/AppContext";
//styles
import "./App.css";

function App() {
  return (
    <>
      <SnackbarProvider
      
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <AppContext>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </AppContext>
      </SnackbarProvider>
    </>
  );
}

export default App;
