import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HeaderUtil from "./components/headerUtil";
import Header from "./components/header";  
import Home from "./page/home";
import Post from "./page/post";
import Intro from "./page/intro";
import Mypage from "./page/myPage";
import Footer from "./components/footer";
import GlobalStyle from "./style/globalStyle";
import PermitRoute from "./page/permit";
import PostShow from "./page/postShow";
import AdminOnly from "./page/adminOnly";


// 프론트 라우터 설정
const App = () => {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <HeaderUtil/>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/write" element={<PermitRoute><Post /></PermitRoute>}></Route>
          <Route path="/post/:title" element={<PostShow/>}></Route>
          <Route path="/intro" element={<Intro />}></Route>
          <Route path="/mypage" element={<PermitRoute><Mypage /></PermitRoute>}></Route>
          <Route path="/admin" element={<AdminOnly/>}></Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;
