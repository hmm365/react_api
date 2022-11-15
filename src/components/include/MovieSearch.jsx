import React, { useRef } from 'react';

const MovieSearch = ({ onSearch }) => {
    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    };

    const onKeyPress = (e) => {
        if (e.charCode === 13) {
            handleSearch();
        }
    };

    const onClick = () => {
        handleSearch();
        console.log('onClick');
    };

    return (
        <section className='movie__search'>
            <div className='container'>
                <h2>검색하기</h2>
                <input ref={inputRef} type='search' placeholder='검색하세요!' onKeyPress={onKeyPress} />
                <button type='submit' onClick={onClick}>
                    검색
                </button>
            </div>
        </section>
    );
};

export default MovieSearch;
