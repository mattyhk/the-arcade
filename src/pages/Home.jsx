import React, { useState } from "react";
import "../styles/components/home.css";
import monData from "../json/monData.json";
import Popup from "../components/Popup";

const HomePage = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <main>
      {isModalOpened && <Popup closeModal={() => setIsModalOpened(false)} />}

      <div className="cursed-text header">The Arcade</div>

      <div className="two-cols container">
        <div>
          <div className="centered sub-header">
            Play arcade games,
            <span className="cursed-text-small"> wIn NFTs </span>
          </div>
          <div className="text">
            <p>Play to win blue chip NFTs for a fraction of their floors.</p>
            <p>
              Discover new collections, enter tournaments and game with the
              community - may the best player win.
            </p>
            <p>
              Weekly tournaments with an NFT up for grabs. Top score at the end
              wins the NFT - play as many times as you want. Top 100 of the
              leaderboard (except #1) splits 10% of the entry funds,
              proportionally based on your score. 60% of funds go to the NFT
              provider, rest to the community. Everyone wins.
            </p>
            <p>
              Put your money where your mouth is and compete to win in{" "}
              <strong>The Arcade.</strong>
            </p>
          </div>
        </div>

        <div className="mon-wrapper-holder">
          <div className="mon-wrapper">
            <div className="mon-item">
              <div>
                <div className="name">
                  <b>{monData[0].Name}</b>
                </div>
                <div>{monData[0].Epithets}</div>
                <img
                  className="thumbnail centered-image"
                  src={`https://is5-ssl.mzstatic.com/image/thumb/Purple117/v4/a9/98/93/a9989386-bf29-d1bb-a34d-87d986088388/source/512x512bb.jpg`}
                  loading="lazy"
                  alt=""
                />
                {/* {!showTexts ? (
                  <>
                    <img
                      className="thumbnail centered-image"
                      src={`https://is5-ssl.mzstatic.com/image/thumb/Purple117/v4/a9/98/93/a9989386-bf29-d1bb-a34d-87d986088388/source/512x512bb.jpg`}
                      loading="lazy"
                      alt=""
                    />
                  </>
                ) : (
                  <div>
                    <hr />
                    {monData[monIndex].Description}
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="button-holder centered opensea-bar mb-12 flex justify-center items-center gap-20">
        <button className="opensea-button">
          <a
            href="/gallery"
            target="_blank"
            rel="noopener noreferrer"
            className="flex"
          >
            Play
          </a>
        </button>

        <button className="opensea-button">
          <a
            onClick={() => setIsModalOpened(true)}
            href="#list"
            className="flex"
          >
            List
          </a>
        </button>
      </div>

      <div className="one-col container" style={{ margintop: "100px" }}>
        <div className="text-wrapper">
          <div className="centered sub-header">How To</div>
        </div>
      </div>

      <div className="two-cols container on-chain-section">
        <div className="text-wrapper">
          <div className="centered sub-header">
            For the <span className="cursed-text-small">coNteNDOrs</span>
          </div>
          <div className="text">
            <ol>
              <li>
                1. Purchase Play Tokens - buy one or many. Mint and play, or
                mint and hold. All designed to reduce gas for you.
              </li>
              <li>2. Spend a token and play a round.</li>
              <li>
                3. Top score wins the NFT. All others earn a piece of the prize
                pool - that's right, that's ETH going into your wallet just for
                playing.
              </li>
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
              <li>
                2. Set your floor - if the entry pool doesn't hit it, the NFT is
                returned to you.
              </li>
              <li>3. End of the tournament - collect your ETH. That's it.</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="button-holder centered opensea-bar mb-12">
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

      <div className="one-col container">
        <div>
          <div className="centered sub-header">
            About
            <span className="cursed-text-small"> tHe ARcaDE </span>
          </div>
          <div className="text">
            <p>
              We believe in making the NFT space fun again. No more long WL
              process, fighting with bots and going through the same steps for
              every project. It's time to reward your digital skill with digital
              rewards.
            </p>
            <p>
              Tournaments of your favorite games, with NFTs up for grabs as
              grand prizes and a share of the prize pool for the rest of the
              leaderboard.
            </p>
            <p>
              For NFT holders - earn more than the open market by listing your
              NFT to win. You set the game, the floor and walk away with the
              lion's share of the entry pool.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
