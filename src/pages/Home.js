import React, { Component }  from 'react';
import BackToTopButton from "../components/BackToTopButton"
import copyBookImage from "../images/copybook.jpg";

export default function HomePage() {
    return (
    <>
    <h1>Welcome to my Nihongo blog.</h1>
    <hr></hr>
    <img src={copyBookImage}></img>
    <BackToTopButton />
    </>
    )
}