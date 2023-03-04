import React, { Component }  from 'react';
import BackToTopButton from "../components/BackToTopButton";

export default function NumbersPage() {
    return (
    <>
    <h1>Цифри / Suuji</h1>
    <hr></hr>
    <ul>
        <li className="number_li"><h3>Нуль - Rey</h3></li>
        <li className="number_li"><h3>Один - Ichi . い ち</h3></li>
        <li className="number_li"><h3>Два - Ni . に</h3></li>
        <li className="number_li"><h3>Три - San . さ ん</h3></li>
        <li className="number_li"><h3>Чотири - Yon . し // よ ん</h3></li>
        <li className="number_li"><h3>П'ять - Go . ご</h3></li>
        <li className="number_li"><h3>Шість - Roku . ろく</h3></li>
        <li className="number_li"><h3>Сім - Nana . しち // なな</h3></li>
        <li className="number_li"><h3>Вісім - Hachi . はち</h3></li>
        <li className="number_li"><h3>Дев'ять - Kyu . く // きゅう</h3></li>
        <li className="number_li"><h3>Десять - Jii . じゅう</h3></li>
    </ul>
    <BackToTopButton />
    </>
    );
}