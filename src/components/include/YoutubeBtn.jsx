import React from 'react';

const YoutubeBtn = ({ onSearch }) => {
    const handleSearch = (tag) => {
        onSearch(tag);
    };

    const btnClick = (e) => {
        handleSearch(e.target.innerText);
    };
    return (
        <div className='youtube__btns'>
            <div className='container'>
                <button type='button' className='btn' onClick={btnClick}>
                    이바다
                </button>
                <button type='button' className='btn' onClick={btnClick}>
                    소각소각
                </button>
                <button type='button' className='btn' onClick={btnClick}>
                    윤하
                </button>
                <button type='button' className='btn' onClick={btnClick}>
                    리엑트
                </button>
            </div>
        </div>
    );
};

export default YoutubeBtn;
