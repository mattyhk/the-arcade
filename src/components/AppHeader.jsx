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
    if (!window.ethereum) {
      alert("MetaMask wallet is not detected!");
      window.open("https://metamask.io/download/", "_blank");
      return;
    }

    try {
      if (userAddress) {
        await Moralis.User.logOut();
        await Moralis.cleanup();
        alert("Successfully logged out!");
        window.location.reload();
        return;
      }
      const web3 = await Moralis.enableWeb3();
      await Moralis.authenticate({ signingMessage: "Authenticate on 0xmons" });
      if (![1, "0x1"].includes(web3._network.chainId)) {
        await Moralis.switchNetwork(1);
      }
      setUserAddress(Moralis?.User?.current()?.get("ethAddress") ?? "");
    } catch (err) {
      if (!err?.code) {
        alert("Please try again after refresh");
        window.location.reload();
        return;
      }
      if (err.code === 4001) return;
      alert(err.message);
    }
  }

  return (
    <>
      <NavMenu />

      <div className="wallet-holder">
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
