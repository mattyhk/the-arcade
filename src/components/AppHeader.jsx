import React from "react";
import NavMenu from "./NavMenu";
import "../styles/components/header.css";
import Web3 from "web3";
import Web3Modal from "web3modal";

const AppHeader = () => {
  async function connectWallet() {
    const providerOptions = {
      injected: {
        display: {
          logo: "data:image/gif;base64,INSERT_BASE64_STRING",
          name: "Injected",
          description: "Connect with the provider in your Browser",
        },
        package: null,
      },
    };

    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
      theme: "dark",
    });

    const provider = await web3Modal.connect();

    const web3 = new Web3(provider);
  }

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
        <button type="button" class="wallet-button" onClick={connectWallet}>
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
