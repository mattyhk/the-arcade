import React from "react";
import Snake from "react-simple-snake";

const SnakeGame = () => {
  return (
    <main>
      <Snake snakeColor="#6081a9" appleColor="#66dfcd" percentageWidth={50} />
    </main>
  );
};

export default SnakeGame;
