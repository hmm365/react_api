import React from 'react';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Title from '../layout/Title';
import AboutCont from '../include/AboutCont';
import Contact from '../layout/Contact';

export const About = () => {
    return (
        <>
            <Header />
            <Contents>
                <Title title={['ABOUT', 'ME']} />
                <AboutCont />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};
