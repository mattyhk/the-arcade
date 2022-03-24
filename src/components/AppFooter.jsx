import React from "react";
import "../styles/components/footer.css";

const AppFooter = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer-item">
          <a
            href="https://www.coingecko.com/en/coins/xmon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coingecko
          </a>
        </div>
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
            href="https://github.com/0xmons"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="footer-item">
          <a
            href="https://opensea.io/assets/0xmons-xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenSea
          </a>
        </div>
        <div className="footer-item">
          <a
            href="https://t.me/xmonschat"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
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
        <div className="footer-item">
          <a
            href="https://v2.info.uniswap.org/token/0x3aada3e213abf8529606924d8d1c55cbdc70bf74"
            target="_blank"
            rel="noopener noreferrer"
          >
            Uniswap
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
