import React, { Component }  from 'react';
import imageHirogana from "../images/hirogana.jpeg";
import BackToTopButton from "../components/BackToTopButton";

export default function HiroganaPage() {
    return (
    <>
    <h1>Хірогана / Hirogana</h1>
    <hr></hr>
    <img src={imageHirogana} alt="Hirogana"></img>
    <BackToTopButton />
    </>
    );
}