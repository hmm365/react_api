import React from 'react';
import { useState, useEffect } from 'react';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Title from '../layout/Title';
import YoutubeCont from '../include/YoutubeCont';
import YoutubeSlider from '../include/YoutubeSlider';
import YoutubeSearch from '../include/YoutubeSearch';
import YoutubeBtn from '../include/YoutubeBtn.jsx';
import Contact from '../layout/Contact';

export const Youtube = () => {
    const [youtubes, setYoutubes] = useState([]);
    const [random, setRandoms] = useState([]);

    useEffect(() => {
        fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCehmcOOsAQuFQZYZta2uvoJARWdyVGVyQ&q=소각소각&part=snippet&maxResults=30&type=video')
            .then((response) => response.json())
            // .then((result) => console.log(result.items))
            .then((result) => setYoutubes(result.items))
            .catch((error) => console.log('error', error));
    }, []);

    useEffect(() => {
        fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCehmcOOsAQuFQZYZta2uvoJARWdyVGVyQ&q=이바다&part=snippet&maxResults=10&type=video')
            .then((response) => response.json())
            // .then((result) => console.log(result.items))
            .then((result) => setRandoms(result.items))
            .catch((error) => console.log('error', error));
    }, []);

    const search = async (query) => {
        await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCehmcOOsAQuFQZYZta2uvoJARWdyVGVyQ&q=${query}&part=snippet&maxResults=30&type=video`)
            .then((response) => response.json())
            // .then((result) => console.log(result))
            .then((result) => setYoutubes(result.items))
            .catch((error) => console.log('error', error));
    };

    // useEffect(() => {
    //     fetch('https://hmm365.github.io/react_api/src/utils/ddd.json')
    //         .then((response) => response.json())
    //         // .then((result) => console.log(result.items))
    //         .then((result) => setYoutubes(result.items))
    //         .catch((error) => console.log('error', error));
    // }, []);

    // useEffect(() => {
    //     fetch('https://hmm365.github.io/react_api/src/utils/ddd.json')
    //         .then((response) => response.json())
    //         // .then((result) => console.log(result.items))
    //         .then((result) => setRandoms(result.items))
    //         .catch((error) => console.log('error', error));
    // }, []);

    return (
        <>
            <Header />
            <Contents>
                <Title title={['Youtube', 'referce api']} />
                <YoutubeSlider random={random} />
                <YoutubeSearch onSearch={search} />
                <YoutubeBtn onSearch={search} />
                <YoutubeCont youtubes={youtubes} />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};
