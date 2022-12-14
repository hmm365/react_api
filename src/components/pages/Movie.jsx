import React from 'react';
import { useState, useEffect } from 'react';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Title from '../layout/Title';
import MovieCont from '../include/MovieCont';
import Contact from '../layout/Contact';
import MovieSearch from '../include/MovieSearch';
import MoviePopular from '../include/MoviePopular';
import MovieBtn from '../include/MovieBtn';

export const Movie = () => {
    const [movies, setMoives] = useState([]);
    const [listMovies, setListMovies] = useState([]);

    const search = async (query) => {
        await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=891244fed71f3e78a463eb2a1801b383&language=ko-kr&query=${query}&page=1&include_adult=false`
        )
            .then((response) => response.json())
            // .then(result => console.log(result.results))
            .then((result) => setMoives(result.results))
            .catch((error) => console.log('error', error));
    };

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=891244fed71f3e78a463eb2a1801b383&language=ko-kr&query=마블&page=1&include_adult=false')
            .then((response) => response.json())
            // .then(result => console.log(result.results))
            .then((result) => setMoives(result.results))
            .catch((error) => console.log('error', error));
    }, []);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=891244fed71f3e78a463eb2a1801b383&language=ko-kr&page=1')
            .then((response) => response.json())
            // .then(result => console.log(result.results))
            .then((result) => setListMovies(result.results))
            .catch((error) => console.log('error', error));
    }, []);

    return (
        <>
            <Header />
            <Contents>
                <Title title={['movie', 'referce api']} />
                <MoviePopular popularMovies={listMovies} />
                <MovieSearch onSearch={search} />
                <MovieBtn onSearch={search} />
                <MovieCont movies={movies} />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};
