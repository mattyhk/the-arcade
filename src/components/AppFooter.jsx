import React from "react";
import "../styles/components/footer.css";

const AppFooter = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer-item">
          <a
            href="https://discord.gg/8qtbuKjKfG"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
        </div>
        <div className="footer-item">
          <a
            href="https://twitter.com/0xmons"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
