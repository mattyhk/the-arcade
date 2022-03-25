import React, { useState, useEffect } from "react";
import Snake from "react-simple-snake";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const SnakeGame = () => {
  const [hasVerified, setHasVerified] = useState(false);

  return (
    <main>
      <div className="mt-8 w-full"></div>
      {hasVerified ? (
        <Snake snakeColor="#6081a9" appleColor="#66dfcd" percentageWidth={50} />
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
