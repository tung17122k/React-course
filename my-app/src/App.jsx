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
import Photos from "./component/photo/photos.jsx";
import Counter from "./component/counter/Counter.jsx";
import Timer from "./component/timer.jsx";
import Header from "./component/header.jsx";
import HackerNews from "./component/news/hackerNews.jsx";
import HackerNewsUseReducer from "./component/news/hackerNewsUseReducer.jsx";
import Watch from "./component/watch/Watch.jsx";

// import { GlobalStyle } from "./GlobalStyle.js";
import { ThemeProvider } from "styled-components";
// import Input from "./component/watch/Input.jsx";
import TextArea from "./component/watch/TextArea.jsx";
import Dropdown from "./component/dropdown/Dropdown.jsx";
import HackerNewsHooks from "./component/news/hackerNewsHooks.jsx";
import Form from "./component/form/Form.jsx";
import SignupForm from "./component/form/SignupForm.jsx";
import MovieSearchApp from "./component/MovieSearchApp.jsx";

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
      {/* <CardList> */}
      {/* <Card2></Card2> */}
      {/* <CardTailwind></CardTailwind> */}
      {/* </CardList> */}
      {/* <Photos></Photos> */}
      {/* <Counter></Counter> */}
      {/* <Timer></Timer> */}
      {/* <Header></Header> */}
      {/* <HackerNews></HackerNews> */}
      {/* <HackerNewsUseReducer></HackerNewsUseReducer> */}
      {/* <Watch></Watch> */}
      {/* <Input></Input> */}
      {/* <TextArea></TextArea> */}
      {/* <Dropdown></Dropdown> */}
      {/* <HackerNewsHooks></HackerNewsHooks> */}
      {/* <Form></Form> */}
      {/* <MovieSearchApp></MovieSearchApp> */}
      <SignupForm></SignupForm>
    </div>
  );
}

export default App;
