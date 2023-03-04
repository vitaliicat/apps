import React, { Component }  from 'react';
import BackToTopButton from "../components/BackToTopButton";

export default function ColoursPage () {
    return (
        <div className="colours_container">
        <div className="colours_header">
        <h1>Кольори / Iro</h1>
        <hr></hr>
        </div>
        <div className="colours_content">
        <ul>
            <li className="color_li">
                <h3 className="color_white">White - 白・白い shiro; shiroi<span></span></h3>
            </li>
            <li className="color_li"><h3 className="color_black">Black - 黒・黒い kuro; kuroi</h3><span></span></li>
            <li className="color_li"><h3 className="color_purple">Purple - 紫 murasaki<span></span></h3></li>
            <li className="color_li"><h3 className="color_brown">Brown - 茶色 cha iro<span></span></h3>
            <p>茶 (cha) японською означає “чай”, тому запам’ятати цей колір дуже легко – колір чаю ☕</p></li>
            <li className="color_li"><h3 className="color_blue">Blue - 水色 mizu iro<span></span></h3>
            <p>水 mizu японською означає “вода”, тож це буквально “колір води”.</p></li>
            <li className="color_li"><h3 className="color_green">Green - 緑 midori<span></span></h3>
            <p>Це слово також вживається для позначення Природи, або ж Зелені – коли мова йде про ліси, луги тощо.</p></li>
            <li className="color_li">
                <div className="color_box"><h3 className="color_yellow">Yellow - 黄色 ki iro<span></span></h3></div>
            </li>
            <li className="color_li"><h3 className="color_red">Red - 赤・赤い aka, akai<span></span></h3>
            <p>Кана “і” додається тоді, коли після кольору йде іменник: 赤いリンゴ – червоне яблуко. Натомість просто 赤 вживається суто як назва кольору.</p></li>
            <li className="color_li"><h3 className="color_grey">Grey - 灰色 hai iro<span></span></h3>
            <p>灰 (hai) японською означає “попіл”, тож буквально це попелястий. Є ще одне слово на позначення сірого – 鼠色 (nezumi iro), 鼠 (nezumi) це мишка 🐭.</p></li>
        </ul>
        </div>
        <BackToTopButton />
        </div>
    );
}