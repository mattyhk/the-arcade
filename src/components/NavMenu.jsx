import React, { useState } from "react";
import "../styles/components/menu.css";

const NavMenu = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      {isOpened && (
        <div
          className="menu-click-handler"
          onClick={() => setIsOpened(false)}
        />
      )}

      {!isOpened && (
        <div className="menu-holder">
          <button className="menu-button" onClick={() => setIsOpened(true)}>
            ☰ MENU
          </button>
        </div>
      )}

      {isOpened && (
        <div className="menu-list">
          <button onClick={() => setIsOpened(false)} className="close-button">
            🆇 CLOSE MENU
          </button>

          <div className="menu-item">
            <a href="/#" title="Home page" onClick={() => setIsOpened(false)}>
              HOME
            </a>
          </div>

          <div className="menu-item">
            <a
              href="/snake"
              title="View Snake game"
              onClick={() => setIsOpened(false)}
            >
              SNAKE
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMenu;
