import React, { Component }  from 'react';
import "../styles.css";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <header>
        <Link to="/" class="logo">NihongoBlog</Link>
        <nav>
            <ul>
                <li><Link to="/hirogana">Хірогана</Link></li>
                <li><Link to="/katakana">Катакана</Link></li>
                <li><Link to="/japanesewords">Японські слова</Link>
                    <ul>
                        <li><Link to="/greeting">Привітання</Link></li>
                        <li><Link to="/numbers">Цифри</Link></li>
                        <li><Link to="/colours">Кольори</Link></li>
                        <li><Link to="/time">Час</Link></li>
                        <li><a href="#">Сім'я</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default Navbar;