import React, { Component }  from 'react';
import imageTimeHours from "../images/japanese-hours.png";
import BackToTopButton from "../components/BackToTopButton";

export default function TimePage () {
    return (
        <>
        <h1>Time / タイム / Taimu</h1>
        <hr></hr>
        <div className="time_content">
            <h2>Hours</h2>
            <img src={imageTimeHours}></img>
        </div>
        <BackToTopButton />
        </>
        );
}