import React, { useEffect, useState } from 'react';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Title from '../layout/Title';
import AboutCont from '../include/AboutCont';
import Contact from '../layout/Contact';

export const About = () => {
    const [abouts, setAbouts] = useState([]);
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=891244fed71f3e78a463eb2a1801b383&language=ko-kr&query=마블&page=1&include_adult=false')
            .then((response) => response.json())
            // .then(result => console.log(result.results))
            .then((result) => setAbouts(result.about))
            .catch((error) => console.log('error', error));
    }, []);

    return (
        <>
            <Header />
            <Contents>
                <Title title={['ABOUT', 'ME']} />
                <AboutCont abouts={abouts} />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};
