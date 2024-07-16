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
import ButtonStyle from "./component/button/ButtonStyle";
import Card from "./component/card/card";
import Card2 from "./component/card/card2";
import CardTailwind from "./component/card/cardTailwind";
import CardList from "./component/card/cardList.jsx";
// import { GlobalStyle } from "./GlobalStyle.js";
import { ThemeProvider } from "styled-components";
// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },
// };

function App() {
  return (
    <div>
      {/* <ThemeProvider theme={theme}></ThemeProvider> */}
      {/* <Game></Game> */}
      {/* <Toggle></Toggle> */}
      {/* <YoutubeList></YoutubeList> */}
      {/* <ButtonStyle>Primary</ButtonStyle> */}
      {/* <ButtonStyle secondary>Secondary</ButtonStyle> */}
      {/* <GlobalStyle></GlobalStyle> */}
      <CardList>
        {/* <Card2></Card2> */}
        <CardTailwind></CardTailwind>
      </CardList>
    </div>
  );
}

export default App;
