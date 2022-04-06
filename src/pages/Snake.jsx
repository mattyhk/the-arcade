import React, { useState, useEffect } from "react";
import Snake from "@yewyewxd/react-simple-snake";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import SnakeLeaderboard from "../components/Snake/SnakeLeaderboard";
import homeStyles from "../styles/components/home.css";
import Countdown from "react-countdown";

const SnakePage = ({ openModal }) => {
  const [hasVerified, setHasVerified] = useState(true); // set this to false to reactive Captcha

  useEffect(() => {
    function disableKeyScroll(e) {
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1
      ) {
        e.preventDefault();
      }
    }

    window.addEventListener("keydown", disableKeyScroll);

    return () => window.removeEventListener("keydown", disableKeyScroll);
  }, []);

  return (
    <main className="pt-24">
      {hasVerified ? (
        <>
          <div className="md:w-6/12 mx-auto w-11/12">
            <Snake
              snakeColor="#6081a9"
              appleColor="#66dfcd"
              percentageWidth={100}
            />
          </div>

          <div className="md:mt-28 mt-16 flex items-center justify-center">
            <button className={homeStyles[`view-button`]}>
              <a href="#mint" className="flex p-6" onClick={openModal}>
                Mint Entry Token
              </a>
            </button>
          </div>

          <div className="md:mt-28 mt-16 flex items-center justify-center gap-16">
            <div className="flex">
              <img
                className="h-64 w-64"
                src="https://is5-ssl.mzstatic.com/image/thumb/Purple117/v4/a9/98/93/a9989386-bf29-d1bb-a34d-87d986088388/source/512x512bb.jpg"
                alt=""
              />
            </div>

            <div className="flex flex-col h-full text-center p-8">
              <div>Collection</div>
              <div className="my-10">Item</div>
              <div>Current Prize Pool: 20 ETH</div>
            </div>
          </div>

          <div className="md:mt-28 mt-16 text-center">
            Tournament ends in:{" "}
            <Countdown
              renderer={({ days, hours, minutes, seconds, completed }) => {
                if (completed) {
                  return <span>Winner</span>;
                } else {
                  return (
                    <span>
                      {days ? `${days}d` : ""} {hours}h {minutes}m {seconds}s
                    </span>
                  );
                }
              }}
              date={1650010570178}
            />
          </div>

          <div className="md:mt-28 mt-16 flex justify-center">
            <SnakeLeaderboard />
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-80">
          <HCaptcha
            sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
            onVerify={(token, ekey) => {
              setTimeout(() => {
                setHasVerified(true);
              }, 1000);
            }}
          />
        </div>
      )}
    </main>
  );
};

export default SnakePage;
