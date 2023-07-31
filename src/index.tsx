import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

export const init = async () => {
  // import("./utils/modules").then((res) => {
  // console.log("import", res);
  const interval = window.setInterval(() => {
    const container = document.querySelector(".hzero-normal-header-right");
    console.log("Hzero Helper init:", window);

    if (container) {
      const MenuContainer = document.createElement("div");
      MenuContainer.classList.add("hzero-normal-header-right-item");
      const root = ReactDOM.createRoot(MenuContainer);
      container.insertBefore(MenuContainer, container.firstChild);
      root.render(<App />);
      clearInterval(interval);
    }
  }, 2000);
  // });
};

init();
