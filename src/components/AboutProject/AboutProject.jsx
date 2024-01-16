import React from 'react';

function AboutProject() {


    return (
        <section className="aboutProject" id='about-project'>
            <div className="section-wrapper">
                <h2 className="section-wrapper__title">О проекте</h2>
                <div className="aboutProject__wrapper">
                    <article>
                        <h3 className="aboutProject__title">Дипломный проект включал 5 этапов</h3>
                        <p className="aboutProject__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </article>
                    <article>
                        <h3 className="aboutProject__title">На выполнение диплома ушло 5 недель</h3>
                        <p className="aboutProject__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </article>
                    <div className="aboutProject__grid-wrapper">
                        <figure className="aboutProject__image aboutProject__image_color_green">1 неделя</figure>
                        <figure className="aboutProject__image aboutProject__image_color_gray">4 недели</figure>
                        <p className="aboutProject__caption aboutProject__caption_size_s">Back-end</p>
                        <p className="aboutProject__caption aboutProject__caption_size_l">Front-end</p>
                    </div>
                </div>
            </div>
        </section>
    );
}




export default AboutProject;