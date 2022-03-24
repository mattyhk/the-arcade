import React from "react";
import NavMenu from "./NavMenu";
import "../styles/components/header.css";

const AppHeader = () => {
  async function connectWallet() {}

  return (
    <>
      <NavMenu />

      <div class="logo-wrapper">
        <a href="/#">
          <img
            src="https://0xmons.xyz/assets/0xmons-logo-simple-med.png"
            id="logo"
            alt=""
          />
        </a>
      </div>

      <div class="wallet-holder">
        <button type="button" onClick={connectWallet}>
          <div className="if-connected">
            {/* {{wallet.userAddress.substring(0, 14)}} */}
          </div>
          <div className="if-not-connected">🏦 CONNECT WALLET</div>
        </button>
      </div>
    </>
  );
};

export default AppHeader;
