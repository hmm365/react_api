import React from 'react';

const movieTags = [{ name: '마블' }, { name: '올드보이' }, { name: '타짜' }, { name: '테이큰' }];

const MovieBtn = ({ onSearch }) => {
    const handleSearch = (tag) => {
        onSearch(tag);
    };

    const btnClick = (e) => {
        handleSearch(e.target.innerText);
    };
    return (
        <div className='movie__btns'>
            <div className='container'>
                {movieTags.map((tag, inx) => (
                    <button type='button' className='btn' onClick={btnClick} key={inx}>
                        {tag.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MovieBtn;
