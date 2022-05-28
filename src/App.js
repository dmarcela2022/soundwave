import React, { useState } from 'react';
import './App.css';
import imgGirl from './img/landing-page-girl.png';
import Header from './components/Header';
import Footer from './components/Footer';
import Join from './components/Join';
import Main from './components/Main';
import Discover from './components/Discover';

function App() {
  const [currentPage,setCurrentPage]=useState("main")
  let content;
  if (currentPage === "main"){
    content = <Main/> 
  } else if (currentPage === "discover"){
    content = <Discover/>
  } else if (currentPage === "join"){
    content = <Join/>
  }
  return (
    <div>
      <Header 
        onDiscover={()=>setCurrentPage("discover")} 
        onJoin={()=>setCurrentPage("join")}
        />

      {content}
      <Footer/>
    </div>
  );
}
export default App;