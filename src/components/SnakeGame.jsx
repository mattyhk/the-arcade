import React from "react";
import Snake from "react-simple-snake";

const SnakeGame = () => {
  return (
    <main>
      <div className="mt-8 w-full"></div>
      <Snake snakeColor="#6081a9" appleColor="#66dfcd" percentageWidth={50} />
    </main>
  );
};

export default SnakeGame;
