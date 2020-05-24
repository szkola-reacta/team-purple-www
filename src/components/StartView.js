import React from 'react';
import '../css/StartView.css'
import img1 from '../img/Mati.png'
import img2 from "../img/Jędrzej.jpg"
import img3 from "../img/Aleksandra.jpg"
import img4 from "../img/Łukasz.jpg"
import img5 from "../img/Dawid.png"

const StartView = () => {
    return (
        <div className="mainWrapper">
            <h1>#team-purple</h1>
            <section className="members">
                <div className="singleMember">
                    <h2>Mati T</h2>
                    <img src={img1} alt="" />
                    <p className="memberDescription">Tutaj coś o sobie</p>
                </div>
                <div className="singleMember">
                    <h2>Jędrek Knapik</h2>
                    <img src={img2} alt="" />
                    <p className="memberDescription">Student, lubiący ciągle uczyć się nowych rzeczy, od niedawna zwłaszcza Reacta.</p>
                </div>
                <div className="singleMember">
                    <h2>Ola Michniewicz</h2>
                    <img src={img3} alt="" />
                    <p className="memberDescription">Najfajniejsza dziewczyna w fioletowej drużynie.</p>
                </div>
                <div className="singleMember">
                    <h2>Łukasz Czuba</h2>
                    <img src={img4} alt="" />
                    <p className="memberDescription">Pasjonat frontendu nonowych technologii i druku 3D.
                    Miłośnik literatury s-f i yerba mate.</p>
                </div>
                <div className="singleMember">
                    <h2>Dawid Łakomiec</h2>
                    <img src={img5} alt="" />
                    <p className="memberDescription">Tutaj coś o sobie</p>
                </div>
            </section>
        </div>
    );
}

export default StartView;