/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { YoutubeData } from "./data";
import YoutubeItem from "./component/youtube/YoutubeItem";
import YoutubeList from "./component/youtube/youtubeList";
import Toggle from "./component/toggle/toggle";
import Game from "./component/tictactoe/Game";

function App() {
  return (
    <div>
      <Game></Game>
      {/* <Toggle></Toggle> */}
      {/* <YoutubeList></YoutubeList> */}
    </div>
  );
}

export default App;
