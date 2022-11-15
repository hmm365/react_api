import React from 'react';

const unsplashTags = [{ name: '이바다' }, { name: '소각소각' }, { name: '윤하' }, { name: '리엑트' }];
const YoutubeBtn = ({ onSearch }) => {
    const handleSearch = (tag) => {
        onSearch(tag);
    };

    const btnClick = (e) => {
        handleSearch(e.target.innerText);
    };
    return (
        <section className='youtube__btns'>
            <div className='container'>
                {unsplashTags.map((tag, inx) => (
                    <button type='button' className='btn' onClick={btnClick} key={inx}>
                        {tag.name}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default YoutubeBtn;
