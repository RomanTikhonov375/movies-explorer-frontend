import React from 'react';
import Foto from '../../images/AbouMe-foto.JPG'

function AboutMe() {

    return (
        <section className="aboutMe" id='about-me'>
            <div className="section-wrapper">
                <h2 className="section-wrapper__title">Студент</h2>
                <div className="aboutMe__wrapper">
                    <div className="aboutMe__profile">
                        <h3 className="aboutMe__title">Роман</h3>
                        <p className="aboutMe__career">Фронтенд-разработчик, 33 года</p>
                        <p className="aboutMe__caption">Я родился в городе Тверь, закончил ТГТУ по специальности инженер технолог.
                        В свободное время люблю читать. У меня есть любимая жена и сын. На данный момент работаю в крупном DIY ретейле.</p>
                        <a className="aboutMe__link" href="https://github.com/RomanTikhonov375" target='_blank' rel='noreferrer'>GitHub</a>
                    </div>
                    <img src={Foto} alt="Фото" className="aboutMe__image" />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;