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
        The Arcade
      </div>

      <div className="two-cols container">
        <div>
          <div className="centered sub-header">
            Socializing
            <span className="cursed-text-small"> NFTs </span>
          </div>
          <div className="text">
            <p>
              Tournaments of your favorite games, with NFTs up for grabs as grand prizes and a share of the prize pool for the rest of the leaderboard. 
            </p>
            <p>
              For NFT holders - earn more than the open market by listing your NFT to win. You set the game, the floor and walk away with the lion's share of the entry pool.
            </p>
            <p>
              It's time to make the NFT space fun again. No more WL grind, no more trait sniping - let your digital skill earn digital reward, compete to win in <strong>The Arcade.</strong> 
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
        <button className="opensea-button">
          <a
            href="/snake"
            target="_blank"
            rel="noopener noreferrer"
            className="flex"
          >
            Play
          </a>
        </button>
      </div>

      <div className="one-col container" style={{margintop: "100px"}}>
        <div className="text-wrapper">
          <div className="centered sub-header">
            How To
          </div>
        </div>
      </div>


      <div className="two-cols container on-chain-section">
        <div className="text-wrapper">
          <div className="centered sub-header">
            For the <span className="cursed-text-small">coNteNDOrs</span>
          </div>
          <div className="text">
            <ol>
              <li>1. Purchase Play Tokens - buy one or many. Mint and play, or mint and hold. All designed to reduce gas for you.</li>
              <li>2. Spend a token and play a round.</li>
              <li>3. Top score wins the NFT. All others earn a piece of the prize pool - that's right, that's ETH going into your wallet just for playing.</li>
            </ol>
          </div>
        </div>

        <div className="text-wrapper">
          <div className="centered sub-header">
            For the <span className="cursed-text-small">hOLdErs</span>
          </div>
          <div className="text">
            <ol>
              <li>1. Choose the NFT you want to put up for grabs.</li>
              <li>2. Set your floor - if the entry pool doesn't hit it, the NFT is returned to you.</li>
              <li>3. End of the tournament - collect your ETH. That's it.</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="button-holder centered opensea-bar">
        <button className="view-button">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex"
          >
            Twitter
          </a>
        </button>
        <button className="view-button">
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex"
          >
            Discord
          </a>
        </button>
      </div>
    </main>
  );
};

export default Hero;
