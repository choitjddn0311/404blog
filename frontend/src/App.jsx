import React, {Component} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./components/header";  
import Home from "./page/home";
import Post from "./page/post";
import GlobalStyle from "./style/globalStyle";

const App = () => {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
