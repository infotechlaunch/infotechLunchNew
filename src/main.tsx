import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";


// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/Css/style.scss'; 
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* Provide Redux store to the application */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
