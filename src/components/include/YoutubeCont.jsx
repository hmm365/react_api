import React from 'react';

const YoutubeItem = (youtube) => {
    return (
        <li className='card'>
            <a href={`https://www.youtube.com/watch?v=${youtube.videoId}`} target='blank'>
                <img src={youtube.thumbnails} alt={youtube.alt} />
            </a>
        </li>
    );
};

const YoutubeCont = ({ youtubes }) => {
    // console.log(youtubes);
    return (
        <section className='cont__youtube'>
            <div className='container'>
                <div className='youtube__inner'>
                    <ul>
                        {youtubes.map((youtube) => (
                            <YoutubeItem
                                key={youtube.id.videoId}
                                title={youtube.snippet.title}
                                thumbnails={youtube.snippet.thumbnails.high.url}
                                publishTime={youtube.snippet.publishTime}
                                alt={youtube.snippet.description}
                                channelId={youtube.snippet.channelId}
                                videoId={youtube.id.videoId}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default YoutubeCont;
