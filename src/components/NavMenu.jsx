import React, { useState } from "react";
import "../styles/components/menu.css";

const NavMenu = () => {
  const [isOpened, setIsOpened] = useState(false);

  const navItems = [
    {
      name: "HOME",
      title: "Home page",
      to: "#",
    },
    {
      name: "SNAKE",
      title: "View Snake game",
      to: "snake",
    },
    {
      name: "NFT GALLERY",
      title: "View gallery page",
      to: "gallery",
    },
  ];

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

          {navItems.map((item) => (
            <div className="menu-item">
              <a
                href={`/${item.to}`}
                title={item.title}
                onClick={() => setIsOpened(false)}
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavMenu;
