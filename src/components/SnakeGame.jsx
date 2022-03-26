import React, { useState, useEffect } from "react";
import Snake from "react-simple-snake";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import SnakeLeaderboard from "./SnakeLeaderboard";

const SnakeGame = () => {
  const [hasVerified, setHasVerified] = useState(true);

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
    <main>
      <div className="mt-8 w-full"></div>
      {hasVerified ? (
        <>
          <div className="md:w-6/12 mx-auto w-11/12">
            <Snake
              snakeColor="#6081a9"
              appleColor="#66dfcd"
              percentageWidth={100}
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

export default SnakeGame;
