import React, { useState } from "react";
import "../styles/components/home.css";
import monData from "../json/monData.json";

const Hero = () => {
  const [showTexts, setShowTexts] = useState(false);
  const [monIndex, setMonIndex] = useState(181);

  function randomize() {
    setMonIndex(Math.floor(Math.random() * 341));
  }

  return (
    <main>
      <div className="cursed-text header">
        NEURAL NET GENERATED PIXEL MONSTERS
      </div>

      <div className="two-cols container">
        <div>
          <div className="centered sub-header">
            powered by{" "}
            <span className="cursed-text-small">mAcHInE leARniNg</span>
          </div>
          <div className="text">
            <p>
              0xmons are scarce, digital collectibles that live on the Ethereum
              blockchain. They are inspired by a mix of Pokemon, SCP, and
              Lovecraft.
            </p>
            <p>
              Every 0xmon has a unique animation generated by a GAN (Generative
              Adversarial Network) trained on pixel art images.
            </p>
            <p>
              This image is then paired with a unique name, epithet, and lore
              that comes from a generative language model (think GPT-3).
            </p>
          </div>
        </div>

        <div className="mon-wrapper-holder">
          <div className="mon-wrapper">
            <div className="mon-item">
              <div>
                <div className="name">
                  <b>
                    #{monData[monIndex].Index} {monData[monIndex].Name}
                  </b>
                </div>
                <div>{monData[monIndex].Epithets}</div>
                {!showTexts ? (
                  <>
                    <img
                      className="thumbnail centered-image"
                      src={`https://raw.githubusercontent.com/0xmons/0xmons/0efef2826b799eb8e5d13e832fb950dfceaead24/src/assets/final-sprites/${monData[monIndex].Image}`}
                      loading="lazy"
                      alt=""
                    />
                  </>
                ) : (
                  <div>
                    <hr />
                    {monData[monIndex].Description}
                  </div>
                )}
              </div>
            </div>
            <div className="button-holder centered">
              <button onClick={() => setShowTexts((prevShow) => !prevShow)}>
                Flip <span className="grayscale-emoji">🔄</span>
              </button>
              <button onClick={() => randomize()}>
                Random <span className="grayscale-emoji">🔀</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="button-holder centered opensea-bar">
        <button className="view-button" routerLink="/all">
          View All 0xmons <span className="xmon-squid">🦑</span>
        </button>
        <button className="opensea-button">
          <a
            href="https://opensea.io/assets/0xmons-xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex"
          >
            0xmons on OpenSea
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 116 116"
              className="opensea-logo ml-4"
            >
              <path
                fill="#FFF"
                d="M84.3 65.5c-.2-.2-.5-.2-.8-.1l-.7.3a24.6 24.6 0 01-11 2.5c-.2 0-.3.1-.3.2a3.9 3.9 0 01-3.8 3.1h-7.8V65h.1l1.4.2c3.3.5 4.9 2 5.6 2.7l.1.1c.1.1.3.1.4 0l.4-.3c1.2-.8 4-2.5 4-11.5 0-9.2-7-15.4-7.8-15.8l-4.1-.3h-.1v-2.6a3 3 0 001.4-2.5c0-1.6-1.2-2.9-2.8-2.9a2.8 2.8 0 00-2.8 2.9c0 1 .5 1.9 1.4 2.4v2.2l-5.9-.6c-.3 0-.5.3-.3.5 1 1.6 3.7 6.6 3.9 14.1a28 28 0 01-1.4 11.8l.3.1 3.4-.4v6.5h-6.5a4 4 0 01-3.9-3.9v-1.6c0-.2-.1-.3-.3-.3H34.3c-.1 0-.3.1-.3.3v.9c0 4.5 1.3 8.6 3.5 12.2.4.6 1.1.9 1.7.6l1.3-.6c1-.5 2.2-.5 3.3 0l1.4.6c1 .5 2.2.5 3.3 0l1.4-.6c1.1-.5 2.2-.5 3.3 0l1.4.6c1.1.5 2.2.5 3.3 0l1.4-.6c1.1-.5 2.2-.5 3.3 0l1.4.6c1.1.5 2.2.5 3.3 0l1.4-.6c1.1-.5 2.2-.5 3.3 0l1.4.6c.9.4 1.9-.1 2.4-1a23 23 0 002-4.2 13 13 0 016.2-7.9c.3-.1.4-.4.4-.7.2-.1.1-.4-.1-.5zm-44.6-2.2h11.4c.2 0 .3-.1.3-.3V50.6l-.2-.3-5.6-2.6c-.1-.1-.3 0-.4.2l-5.8 14.9c-.1.3.1.5.3.5zM58 0a58 58 0 100 116A58 58 0 0058 0zm-.2 100.2a41.8 41.8 0 110-83.6 41.8 41.8 0 010 83.6zm25.7-34.8l-.7.3a24.6 24.6 0 01-11 2.5c-.2 0-.3.1-.3.2a3.9 3.9 0 01-3.8 3.1h-7.8V65h.1l1.4.2c3.3.5 4.9 2 5.6 2.7l.1.1c.1.1.3.1.4 0l.4-.3c1.2-.8 4-2.5 4-11.5 0-9.2-7-15.4-7.8-15.8l-4.1-.3h-.1v-2.6a3 3 0 001.4-2.5c0-1.6-1.2-2.9-2.8-2.9a2.8 2.8 0 00-2.8 2.9c0 1 .5 1.9 1.4 2.4v2.2l-5.9-.6c-.3 0-.5.3-.3.5 1 1.6 3.7 6.6 3.9 14.1a28 28 0 01-1.4 11.8l.3.1 3.4-.4v6.5h-6.5a4 4 0 01-3.9-3.9v-1.6c0-.2-.1-.3-.3-.3H34.3c-.1 0-.3.1-.3.3v.9c0 4.5 1.3 8.6 3.5 12.2.4.6 1.1.9 1.7.6l1.3-.6c1-.5 2.2-.5 3.3 0l1.4.6c1 .5 2.2.5 3.3 0l1.4-.6c1.1-.5 2.2-.5 3.3 0l1.4.6c1.1.5 2.2.5 3.3 0l1.4-.6c1.1-.5 2.2-.5 3.3 0l1.4.6c1.1.5 2.2.5 3.3 0l1.4-.6c1.1-.5 2.2-.5 3.3 0l1.4.6c.9.4 1.9-.1 2.4-1a23 23 0 002-4.2 13 13 0 016.2-7.9c.3-.1.4-.4.4-.7 0-.2-.1-.5-.3-.6h-.6zm-43.8-2.1h11.4c.2 0 .3-.1.3-.3V50.6l-.2-.3-5.6-2.6c-.1-.1-.3 0-.4.2l-5.8 14.9c-.1.3.1.5.3.5z"
              />
              <path
                fill="#FFF"
                d="M51.2 50.4l-5.6-2.6c-.1-.1-.3 0-.4.2l-5.8 14.9c-.1.2.1.4.3.4h11.4c.2 0 .3-.1.3-.3V50.6l-.2-.2zm33.1 15.1c-.2-.2-.5-.2-.8-.1l-.7.3a24.6 24.6 0 01-11 2.5c-.2 0-.3.1-.3.2a3.9 3.9 0 01-3.8 3.1h-7.8V65h.1l1.4.2c3.3.5 4.9 2 5.6 2.7l.1.1c.1.1.3.1.4 0l.4-.3c1.2-.8 4-2.5 4-11.5 0-9.2-7-15.4-7.8-15.8l-4.1-.3h-.1v-2.6a3 3 0 001.4-2.5c0-1.6-1.2-2.9-2.8-2.9a2.8 2.8 0 00-2.8 2.9c0 1 .5 1.9 1.4 2.4v2.2l-5.9-.6c-.3 0-.5.3-.3.5 1 1.6 3.7 6.6 3.9 14.1a28 28 0 01-1.4 11.8l.3.1 3.4-.4v6.5h-6.5a4 4 0 01-3.9-3.9v-1.6c0-.2-.1-.3-.3-.3H34.3c-.1 0-.3.1-.3.3v.9c0 4.5 1.3 8.6 3.5 12.2.4.6 1.1.9 1.7.6l1.3-.6c1-.5 2.2-.5 3.3 0l1.4.6c1 .5 2.2.5 3.3 0l1.4-.6c1.1-.5 2.2-.5 3.3 0l1.4.6c1.1.5 2.2.5 3.3 0l1.4-.6c1.1-.5 2.2-.5 3.3 0l1.4.6c1.1.5 2.2.5 3.3 0l1.4-.6c1.1-.5 2.2-.5 3.3 0l1.4.6c.9.4 1.9-.1 2.4-1a23 23 0 002-4.2 13 13 0 016.2-7.9c.3-.1.4-.4.4-.7.2-.1.1-.4-.1-.5z"
              />
            </svg>
          </a>
        </button>
      </div>

      <div className="two-cols container on-chain-section">
        <div className="text-wrapper">
          <div className="centered sub-header">
            fully encoded <span className="cursed-text-small">oN-cHAiN</span>
          </div>
          <div className="text">
            <p>
              To ensure they last, each 0xmon can be encoded entirely on
              Ethereum. This means every monster's animation, name, epithet, and
              lore can be preserved for as long as the blockchain exists.
            </p>
            <p>
              Users can choose either the cheaper calldata option or contract
              storage for full availability. Technical details can be found in
              this blog post{" "}
              <a href="https://blog.0xmons.xyz/79081566310">here</a>.
            </p>
          </div>
        </div>

        <div className="encode-image-wrapper">
          <img
            className="encode-image"
            src="https://0xmons.xyz/assets/encode.png"
            loading="lazy"
            alt=""
          />
        </div>
      </div>

      <div className="two-cols container ecosystem-section">
        <div className="text-wrapper">
          <div className="centered sub-header">
            an nft <span className="cursed-text-small">eCoSYstEM</span>
          </div>
          <div className="text">
            <p>
              The 0xmons NFT form part of a broader ecosystem including XMON, a
              utility ERC-20 token and <a href="/#">sudoswap</a>, a p2p exchange
              for asset bundles.
            </p>
            <p>
              Currently, the 0xmons project receives XMON and ETH fees through
              NFT sales and encoding fees. Users can stake their XMON tokens for{" "}
              <a href="/#">XXMON</a> to receive a share of these fees.
            </p>
          </div>
        </div>

        <div className="encode-image-wrapper">
          <img
            className="encode-image"
            src="https://0xmons.xyz/assets/xmon-utils.png"
            loading="lazy"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
