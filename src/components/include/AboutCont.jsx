import React from 'react';

const AboutCont = ({ abouts }) => {
    return (
        <section className='cont__about'>
            <div className='container'>
                {abouts.map((about, inx) => (
                    <article key={inx}>
                        <img src={`${about.img}`} alt='mypp' />
                        <h2>꿈을 설계하고 디자인 하다.</h2>
                        <p>
                            나는 공간을 만드는 것을 좋아한다 어려을 때부터 나만의 공간을 만드는 것을 좋아했고 나만의 다락방을 좋아했다. 단 한 사람이라도 내가
                            만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다. 서울에는 집이 없지만, 이곳에서는 나만의 집이 많다. 그 집은 비용도 들지 않고
                            언제든지 만들 수 있다. 나만의 공간을 마음것 만들 수 있다는 건 코딩에 엄청난 매력인거 같다. 그 한구석에 나만의 꿈을 설계하고 디자인을
                            하며 앞으로도 살고 싶다.
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default AboutCont;
