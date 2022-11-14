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
        <div className='youtube__Slider'>
            <div className='container'>
                <h2>Rander youtube</h2>
                <div className='youtube__inner'>
                    <Swiper
                        // initialSlide={'5'}
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        // }}
                        // effect={'coverflow'}
                        // grabCursor={true}
                        // centeredSlides={true}
                        // slidesPerView={'auto'}
                        // coverflowEffect={{
                        //     rotate: 50,
                        //     stretch: 0,
                        //     depth: 100,
                        //     modifier: 1,
                        //     slideShadows: false,
                        // }}
                        // pagination={true}
                        // modules={[EffectCoverflow, Pagination, Autoplay]}
                        // className='mySwiper'

                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        // }}
                        pagination={{
                            type: 'progressbar',
                        }}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        navigation={true}
                        modules={[Navigation, Pagination]}
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
        </div>
    );
};

export default YoutubeSlider;
