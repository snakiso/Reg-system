import { Provider } from "react-redux";

import { App } from "@/app/App";
import { store } from "@/services/store";
import ReactDOM from "react-dom/client";

import "core-js/features/global-this";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
