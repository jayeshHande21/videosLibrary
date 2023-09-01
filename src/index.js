import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { VideoContext, VideoProvider } from "./Context/VideoContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { VideoContext };

root.render(
  <StrictMode>
    <Router>
      <VideoProvider>
        <App />
        <ToastContainer />
      </VideoProvider>
    </Router>
  </StrictMode>
);
