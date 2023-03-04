import React, { Component }  from 'react';
import BackToTopButton from "../components/BackToTopButton";

export default function GreetingPage () {
    return (
        <>
        <h1>Привітання / Aisatsu / 挨拶</h1>
        <hr></hr>
        <ul>
            <li className="greeting_li"><h3>Доброго ранку /おはようございます/ Ohayou gozaimasu</h3></li>
            <li className="greeting_li"><h3>Доброго день /こんにちは/ Konnichiwa</h3></li>
            <li className="greeting_li"><h3>Доброго вечора /こんばんは/ konbanwa</h3></li>
        </ul>
        <BackToTopButton />
        </>
    );
}