import React, {Component} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HeaderUtil from "./components/headerUtil";
import Header from "./components/header";  
import Home from "./page/home";
import Post from "./page/post";
import Intro from "./page/intro";
import Mypage from "./page/myPage";
import GlobalStyle from "./style/globalStyle";

const App = () => {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <HeaderUtil/>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/intro" element={<Intro />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
