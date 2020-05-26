import React from 'react';
import reactLogo from '../logo.svg';
import '../css/Goals.css'



const Goals = () =>
    (
        <div className="goalsWrapper">
            <section>
                <div className="page">
                    <h1 className="headerH1">#nasz_wspólny_cel</h1>
                    <section className="sectionWrapper">
                        <img src={reactLogo} className="logo" alt="react logo" />
                        <section className="content">
                            <p>
                                Naszym głównym celem jest poznanie Reacta, poprzez tworzenie projektu budowanego przez cały
                                zespół.
                                Przez kolejne tygodnie stworzymy aplikację webową o tematyce wyznaczonej przez naszego
                                prowadzącego - Patryka. Postępy będziemy umieszczać na pltaformie Github. Innymi zadaniami,
                                które przed sobą stawiamy to nauka pracy w grupie i współpraca przy tworzeniu kodu.
                                Końcowm etapem naszej pracy będzie umieszczenie w internecie w pełni działającej i
                                przetestowanej aplikacji, którą każdy z nas będzie mógł umieścić w swoim portfolio.
                    </p>
                        </section>
                    </section>

                </div>
            </section>
        </div>
    );



export default Goals;