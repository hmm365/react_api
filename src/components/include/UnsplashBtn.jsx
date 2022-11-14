import React from 'react';

const unsplashTags = [{ name: 'Sky' }, { name: 'Sea' }, { name: 'Moon' }, { name: 'Star' }];

const UnsplashTagList = ({ tag }) => {
    return <span>{tag}</span>;
};

const UnsplashBtn = ({ onSearch }) => {
    const handleSearch = (tag) => {
        onSearch(tag);
    };

    const btnClick = (e) => {
        handleSearch(e.target.innerText);
    };
    return (
        <div className='unsplash__btns'>
            <div className='container'>
                {unsplashTags.map((tag, inx) => (
                    <button type='button' className='btn' onClick={btnClick} key={inx}>
                        <UnsplashTagList tag={tag.name} />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default UnsplashBtn;
