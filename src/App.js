import GlobalStyle from "./styles/GlobalStyle";
import React from "react";
import Router from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { Analytics } from "@vercel/analytics/react";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <Provider store={store}>
          <GlobalStyle />
          <Router />
          <ToastContainer />
        </Provider>
      </RecoilRoot>
      <Analytics />
    </>
  );
}

export default App;
