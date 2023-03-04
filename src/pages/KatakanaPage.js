import React, { Component }  from 'react';
import imageKatakana from "../images/katakana.png";
import kanaAGif from "../images/katakana-a.gif";
import kanaIGif from "../images/kana-i.gif";
import kanaUGif from "../images/kana-u.gif";
import kanaEGif from "../images/kana-e.gif";
import BackToTopButton from "../components/BackToTopButton";

export default function KatakanaPage() {
    return (
    <>
    <h1>Катакана / Katakana</h1>
    <hr></hr>
    <img src={imageKatakana} alt="Karakana"></img>
    <div className="katakana_letters_container">
        <div className="katakana_letter">
        <img src={kanaAGif} alt="kana A gif"></img>
        <h2>
            Kana / A
        </h2>
        </div>
        <div className="katakana_letter">
        <img src={kanaIGif} alt="kana I gif"></img>
        <h2>
            Kana / I
        </h2>
        </div>
        <div className="katakana_letter">
        <img src={kanaUGif} alt="kana u gif"></img>
        <h2>
            Kana / U
        </h2>
        </div>
        <div className="katakana_letter">
        <img src={kanaEGif} alt="kana e gif"></img>
        <h2>
            Kana / E
        </h2>
        </div>
    </div>
    <BackToTopButton/>
    </>)
}