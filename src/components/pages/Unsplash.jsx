import React from 'react';
import { useState, useEffect } from 'react';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Title from '../layout/Title';
import UnsplashCont from '../include/UnsplashCont';
import UnsplashSearch from '../include/UnsplashSearch';
import UnsplashSlider from '../include/UnsplashSlider';
import UnsplashBtn from '../include/UnsplashBtn';
import Contact from '../layout/Contact';

export const Unsplash = () => {
    const [images, setImages] = useState([]);
    const [random, setRandoms] = useState([]);

    const search = async (query) => {
        await fetch(`https://api.unsplash.com/search/photos/?client_id=XNTqM2xvTnEFo9-LRypjJ0rmsasrQOcjWsqV6xl_UB4&query=${query}&per_page=30`)
            .then((response) => response.json())
            // .then((result) => console.log(result))
            .then((result) => setImages(result.results))
            .catch((error) => console.log('error', error));
    };

    useEffect(() => {
        fetch('https://api.unsplash.com/photos/random?client_id=XNTqM2xvTnEFo9-LRypjJ0rmsasrQOcjWsqV6xl_UB4&query=sea&count=30')
            .then((response) => response.json())
            // .then((result) => console.log(result))
            .then((result) => setImages(result))
            .catch((error) => console.log('error', error));
    }, []);

    useEffect(() => {
        fetch('https://api.unsplash.com/photos/random?client_id=XNTqM2xvTnEFo9-LRypjJ0rmsasrQOcjWsqV6xl_UB4&count=10')
            .then((response) => response.json())
            // .then((result) => console.log(result))
            .then((result) => setRandoms(result))
            .catch((error) => console.log('error', error));
    }, []);

    return (
        <>
            <Header />
            <Contents>
                <Title title={['Unsplash', 'referce api']} />
                <UnsplashSlider random={random} />
                <UnsplashSearch onSearch={search} />
                <UnsplashBtn onSearch={search} />
                <UnsplashCont images={images} />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};
