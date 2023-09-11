import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

export const init = async () => {
  let count = 0;
  const interval = window.setInterval(() => {
    const langSelect = document.querySelector(
      "div.ant-select-sm.select-no-border.default-language-select"
    );
    const container = langSelect?.parentElement;
    console.log("Hzero Helper init:", window);
    if (container) {
      container.style.maxWidth = "unset";
      const MenuContainer = document.createElement("div");
      const root = ReactDOM.createRoot(MenuContainer);
      container.insertBefore(MenuContainer, container.firstChild);
      root.render(<App />);
      clearInterval(interval);
    }
    if (count === 2) {
      clearInterval(interval);
    }
    count++;
  }, 2000);
  // });
};

init();
