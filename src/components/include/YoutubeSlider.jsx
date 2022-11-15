import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import { EffectCoverflow, Pagination, Autoplay } from 'swiper';
import { Navigation, Pagination } from 'swiper';

const YoutubeRandom = (youtube) => {
    return (
        <article className='card'>
            <a href={`https://www.youtube.com/watch?v=${youtube.videoId}`} target='blank'>
                <img src={youtube.thumbnails} alt={youtube.alt} />
            </a>
        </article>
    );
};

const YoutubeSlider = ({ random }) => {
    return (
        <section className='youtube__slider'>
            <div className='container'>
                <h2>Rander youtube</h2>
                <div className='youtube__inner'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className='mySwiper'
                    >
                        {random.map((youtube) => (
                            <SwiperSlide key={youtube.id.videoId}>
                                <YoutubeRandom
                                    key={youtube.id.videoId}
                                    title={youtube.snippet.title}
                                    thumbnails={youtube.snippet.thumbnails.high.url}
                                    publishTime={youtube.snippet.publishTime}
                                    alt={youtube.snippet.description}
                                    channelId={youtube.snippet.channelId}
                                    videoId={youtube.id.videoId}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default YoutubeSlider;
