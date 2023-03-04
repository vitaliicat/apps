import React, { Component }  from 'react';
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home"
import HiroganaPage from "./pages/HiroganaPage";
import KatakanaPage from "./pages/KatakanaPage";
import ColoursPage from "./pages/ColoursPage";
import JapaneseWordsPage from "./pages/JapaneseWordsPage";
import NumbersPage from "./pages/NumbersPage";
import TimePage from "./pages/TimePage";
import GreetingPage from "./pages/GreetingPage";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/katakana" element={<KatakanaPage/>}/>
          <Route path="/hirogana" element={<HiroganaPage/>}/>
          <Route path="/colours" element={<ColoursPage/>}/>
          <Route path="/japanesewords" element={<JapaneseWordsPage/>}/>
          <Route path="/numbers" element={<NumbersPage/>}/>
          <Route path="/time" element={<TimePage/>}/>
          <Route path="/greeting" element={<GreetingPage/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
