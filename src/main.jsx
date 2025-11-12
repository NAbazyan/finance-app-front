import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.sass";
import "swiper/css";
import { I18nextProvider } from "react-i18next";
import "./i18n.js";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <I18nextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </I18nextProvider>
);
