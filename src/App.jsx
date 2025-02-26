import { BrowserRouter } from "react-router-dom";

//components

import Router from "./router";
import { AppContext } from "./context/AppContext";
//styles
import "./App.css";

function App() {
  return (
    <>
      <AppContext>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AppContext>
    </>
  );
}

export default App;
