import React, { useState } from "react";
import Snake from "@yewyewxd/react-simple-snake";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import SnakeLeaderboard from "./SnakeLeaderboard";

const SnakeGame = () => {
  const [hasVerified, setHasVerified] = useState(true);

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
