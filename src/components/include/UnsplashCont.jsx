import React from 'react';

const ImagesItem = (image) => {
    return (
        <li className='card'>
            <a href={`${image.link}`} target='blank'>
                <img src={`${image.img}`} alt={`${image.alt}`} />
            </a>
        </li>
    );
};

const UnsplashCont = ({ images }) => {
    return (
        <section className='cont__unsplash'>
            <div className='container'>
                <div className='unsplash__inner'>
                    <ul>
                        {images.map((image) => (
                            <ImagesItem
                                key={image.id}
                                img={image.urls.regular}
                                link={image.links.html}
                                likes={image.likes}
                                userName={image.user.username}
                                alt={image.alt_description}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default UnsplashCont;
