import React, { useState, useEffect } from "react";
import NavMenu from "./NavMenu";
import "../styles/components/header.css";
import { useMoralis } from "react-moralis";

const AppHeader = () => {
  const { Moralis, isInitialized } = useMoralis();
  const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    if (!isInitialized) return;
    const user = Moralis.User.current();
    if (user) {
      setUserAddress(user.get("ethAddress"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized]);

  async function toggleConnectWallet() {
    try {
      if (userAddress) {
        await Moralis.User.logOut();
        await Moralis.cleanup();
        window.location.reload();
        return;
      }
      await Moralis.enableWeb3();
      await Moralis.authenticate({ signingMessage: "Authenticate on 0xmons" });
      setUserAddress(Moralis?.User?.current()?.get("ethAddress") ?? "");
    } catch {}
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
        <button
          type="button"
          className="wallet-button"
          onClick={toggleConnectWallet}
        >
          {userAddress ? (
            <div className="w-60 truncate" title="Disconnect Wallet">
              {userAddress}
            </div>
          ) : (
            <div>🏦 CONNECT WALLET</div>
          )}
        </button>
      </div>
    </>
  );
};

export default AppHeader;
