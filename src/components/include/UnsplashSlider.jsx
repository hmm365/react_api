import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

// import { EffectCoverflow, Pagination, Autoplay } from 'swiper';
import { EffectCards, Autoplay } from 'swiper';

const ImageRandom = (image) => {
    return (
        <article className='card'>
            <a href={`${image.link}`} target='blank'>
                <img src={`${image.img}`} alt={`${image.alt}`} />
            </a>
        </article>
    );
};

const UnsplashSlider = ({ random }) => {
    return (
        <section className='unsplash__slider'>
            <div className='container'>
                <h2>Rander images</h2>
                <div className='unsplash__inner'>
                    <Swiper
                        initialSlide={'5'}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards, Autoplay]}
                        className='mySwiper'
                    >
                        {random.map((imageRandom, idx) => (
                            <SwiperSlide key={idx}>
                                <ImageRandom
                                    img={imageRandom.urls.regular}
                                    link={imageRandom.links.html}
                                    likes={imageRandom.likes}
                                    userName={imageRandom.user.username}
                                    alt={imageRandom.alt_description}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default UnsplashSlider;
