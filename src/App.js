import React, { useState } from 'react';
import ReactPlayer from "react-player"
import './App.css';

const App = () => {
    const [isImageFavorite, setImageFavorite] = useState(false);
    const [isVideoFavorite, setVideoFavorite] = useState(false);
    const [isGifFavorite, setGifFavorite] = useState(false);

    const toggleImageFavorite = () => {
        setImageFavorite(!isImageFavorite);
    };

    const toggleVideoFavorite = () => {
        setVideoFavorite(!isVideoFavorite);
    };

    const toggleGifFavorite = () => {
        setGifFavorite(!isGifFavorite);
    };

    return ( <
        div className = "container" >
        <
        div className = "multimedia-container" >
        <
        img src = "https://pointsix.org/static/media/ps-logo-main.4dbf204ae579b5485c63.webp"
        alt = "Media"
        className = "media" / >
        <
        div className = { `favorite-icon ${isImageFavorite ? 'imagefavorited' : ''}` }
        onClick = { toggleImageFavorite } >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24" >
        <
        path d = "M12 2L8 9H2l6 4.5L6 22l6-4.5L18 22l-2-8.5L22 9h-6l-4-7z" / >
        <
        /svg> <
        /div> <
        div className = "image-dummy-title" > Pointsix Company logo(Dummy Title) < /div> <
        /div>

        <
        div className = "multimedia-container" >
        <
        div className = "video-player-wrapper" >
        <
        ReactPlayer url = "https://youtu.be/LjZxeSne67E"
        width = "100%"
        height = "100%"
        autoplaying = { true }
        loop = { true }
        /> <
        /div> <
        div className = { `favorite-icon ${isVideoFavorite ? 'videofavorited' : ''}` }
        onClick = { toggleVideoFavorite } >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24" >
        <
        path d = "M12 2L8 9H2l6 4.5L6 22l6-4.5L18 22l-2-8.5L22 9h-6l-4-7z" / >
        <
        /svg> <
        /div> <
        div className = "video-dummy-title" > Countdown Video < /div> <
        /div>


        <
        div className = "multimedia-container" >
        <
        img src = "https://i.pinimg.com/originals/ec/0d/5f/ec0d5f135cd6ce5a9bfc1d0e756e1339.gif"
        alt = "Media"
        className = "media" / >
        <
        div className = { `favorite-icon ${isGifFavorite ? 'giffavorited' : ''}` }
        onClick = { toggleGifFavorite } >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "24"
        viewBox = "0 0 24 24" >
        <
        path d = "M12 2L8 9H2l6 4.5L6 22l6-4.5L18 22l-2-8.5L22 9h-6l-4-7z" / >
        <
        /svg> <
        /div> <
        div className = "gif-dummy-title" > Rabbit GIF < /div> <
        /div> <
        /div> 
    );
};

export default App;