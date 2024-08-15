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
// import Counter from "./component/counter/Counter.jsx";
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
import SignupFormV2 from "./component/form/SignupFormV2.jsx";
import SignupFormFinal from "./component/form/SignupFormFinal.jsx";
import SignupFormHook from "./component/form/SignupFormHook.jsx";
import MovieSearchApp from "./component/MovieSearchApp.jsx";
import RegisterHook from "./component/register-form/RegisterHook.jsx";
import RegisterFormik from "./component/register-form/RegisterFormik.jsx";
import Modal from "./component/fragment-portal/Modal.jsx";
import { useState } from "react";
import DropdownPortal from "./component/dropdown/DropdownPortal.jsx";
import Tooltip from "./component/Tooltip.jsx";
import { ErrorBoundary } from "react-error-boundary";
import Portal from "./component/fragment-portal/Portal.jsx";
import ModalBase from "./component/fragment-portal/ModalBase.jsx";
import ModalAdvance from "./component/fragment-portal/ModalAdvance.jsx";
import TooltipAdvance from "./component/tooltips/TooltipAdvance.jsx";
import { useCount, CountProvider } from "./context/countContext.jsx";
import { Fragment } from "react";
import HeaderMain from "./component/header/HeaderMain.jsx";
import { AuthProvider, useAuth } from "./context/auContext.jsx";
import { GalleryProvider } from "./context/galleryContext.jsx";
import PhotosList from "./component/gallery/PhotosList.jsx";
import CartList from "./component/gallery/CartList.jsx";
import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav.jsx";
import BlogPage from "./component/BlogPage.jsx";
import ProfilePage from "./component/ProfilePage.jsx";
import BlogPageDetails from "./component/BlogPageDetail.jsx";
import FetchingData from "./component/Advance/FetchingData.jsx";
import Title from "./component/Advance/render-props/Title.jsx";
import HandleValues from "./component/Advance/render-props/HandleValues.jsx";
import Input from "./component/Advance/render-props/HandleValues.jsx";
import Accordion from "./component/Advance/react-composition/Accordion.jsx";
import Editable from "./component/Advance/react-composition/Editable.jsx";
// import Counter from "./component/Advance/control-prop/counter.jsx";
import Counter from "./component/Advance/state-reducer/counter.jsx";
import useCounter from "./component/Advance/state-reducer/useCounter.jsx";
// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },
// };

function CountDisplay() {
  const [count] = useCount();
  return <div>The count is : {count}</div>;
}

// function Counter() {
//   const [, setCount] = useCount();
//   const increment = () => setCount((c) => c + 1);
//   return (
//     <button
//       onClick={increment}
//       className="p-4 font-semibold text-white bg-blue-500 rounded-lg"
//     >
//       Increment
//     </button>
//   );
// }

function App() {
  const [showModal, setShowModal] = useState(false);
  const [openModalBase, setOpenModalBase] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  // const [count, setCount] = useState(5);
  // const handleCountChange = (newCount) => {
  //   setCount(newCount);
  // };
  const userReducer = (state, action) => {
    switch (action.type) {
      case "DECREMENT":
        return {
          count: state.count - 5,
        };
      default:
        return useCounter.reducer(state, action);
    }
  };
  const { count, handleDecrement, handleIncrement } = useCounter(
    {
      initial: 0,
    },
    userReducer
  );
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
      {/* <SignupForm></SignupForm> */}
      {/* <SignupFormV2></SignupFormV2> */}
      {/* <SignupFormFinal></SignupFormFinal> */}
      {/* <SignupFormHook></SignupFormHook> */}
      {/* <RegisterHook></RegisterHook> */}
      {/* <RegisterFormik></RegisterFormik> */}
      {/* <div>
          <Modal
            open={showModal}
            handleClose={() => {
              setShowModal(false);
            }}
          ></Modal>
          <button
            className="p-4 text-white bg-blue-500 rounded-lg"
            onClick={() => setShowModal(true)}
          >
            Show modal
          </button>
        </div> */}
      {/* <div className="p-5 overflow-hidden">
          <DropdownPortal></DropdownPortal>
        </div>
        <div className="p-16">
          <Tooltip text="hover me ">This is Tooltip content </Tooltip>
        </div> */}
      {/* <div className="flex items-center justify-center h-screen">
        <button
          className="p-5 text-center text-white bg-blue-500 rounded-lg"
          onClick={() => {
            setOpenModalBase(true);
          }}
        >
          Open modal base
        </button>
        <button
          className="p-5 ml-5 text-center text-white bg-blue-500 rounded-lg"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Open modal
        </button>
        <ModalBase
          visible={openModalBase}
          onClose={() => {
            setOpenModalBase(false);
          }}
        >
          <div className="p-10 bg-white rounded-lg w-full max-w-[340px]">
            <TooltipAdvance title="tooltip2">this is tooltip 2</TooltipAdvance>
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut
            quidem, fuga fugit perferendis labore, facere distinctio quaerat
            quis, aperiam quod nobis. Laudantium maxime consequuntur assumenda
            quas minus magni officia?
          </div>
        </ModalBase>
        <ModalAdvance
          visible={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
          heading="Welcome"
          bodyClassName="w-full max-w-[400px] bg-white p-10 rounded-lg"
        >
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="email" className="text-sm cursor-pointer">
              Email
            </label>
            <input
              type="text"
              className="w-full text-sm leading-normal bg-[#E7Ecf3] rounded-lg p-4"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="password" className="text-sm cursor-pointer">
              Password
            </label>
            <input
              type="password"
              className="w-full text-sm leading-normal bg-[#E7Ecf3] rounded-lg p-4"
              placeholder="Enter your Password"
            />
          </div>
          <button className="w-full p-4 text-base font-semibold text-white bg-[#316bff] rounded-lg">
            <TooltipAdvance title="Sign in ">Sign in here</TooltipAdvance>
          </button>
        </ModalAdvance>
        <div className="inline-block ml-5 ">
          <TooltipAdvance title="Tooltip">This is o Tooltip</TooltipAdvance>
        </div>
      </div> */}
      {/* <div className="flex items-center justify-center p-5 gap-x-5">
        <CountProvider>
          <CountDisplay></CountDisplay>
          <Counter></Counter>
        </CountProvider>
      </div> */}
      {/* <Fragment>
        <AuthProvider>
          <GalleryProvider>
            <HeaderMain></HeaderMain>
            <PhotosList></PhotosList>
            <CartList></CartList>
          </GalleryProvider>
        </AuthProvider>
      </Fragment> */}
      {/* <Routes>
        <Route
          path="/"
          element={
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              magni tempore autem maiores sed. Ipsam officiis fugit omnis quae
              hic animi eveniet quas quis possimus, placeat eos voluptatum
              doloribus cum!
            </div>
          }
        ></Route>
        <Route path="/about" element={<div>This is about page</div>}></Route>
        <Route
          path="/movie/:movieId"
          element={
            <AuthProvider>
              <GalleryProvider>
                <HeaderMain></HeaderMain>
                <PhotosList></PhotosList>
                <CartList></CartList>
              </GalleryProvider>
            </AuthProvider>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<>Home Page</>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/blog/:slug"
            element={<BlogPageDetails></BlogPageDetails>}
          ></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Route>
        <Route path="*" element={<>This is 404 Page</>}></Route>
      </Routes> */}
      {/* React advance */}
      {/* <FetchingData></FetchingData> */}
      {/* <Title>{() => <h1>demo</h1>}</Title> */}
      {/* <HandleValues></HandleValues> */}

      {/* <div className="p-10 w-full max-w-[600px] mx-auto"> */}
      {/* <Accordion header="Header .....................">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          porro molestiae qui consequatur reprehenderit incidunt officia vero,
          ab, enim provident, possimus eaque sunt facere! Eius incidunt earum
          sint magnam doloremque?
        </Accordion> */}
      {/* <Editable></Editable> */}
      {/* </div> */}

      <div>
        {/* <Counter value={count} onChange={handleCountChange}></Counter> */}

        <Counter
          count={count}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        ></Counter>
      </div>
    </div>
  );
}

export default App;
