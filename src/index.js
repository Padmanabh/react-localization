import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Album from "./Album";
import MyComponent from "./TestComponent";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import * as serviceWorker from "./serviceWorker";
import { AlbumRounded } from "@material-ui/icons";

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Album />
  </I18nextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
