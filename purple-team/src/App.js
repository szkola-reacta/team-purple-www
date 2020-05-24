import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';

const App = () =>
    (
        <div className={styles.page}>
            <h1 className={styles.header}> Wspólny cel</h1>
            <section className={styles.wrapper}>
                <img src={logo} className={styles.logo} alt="react logo"/>
                <section className={styles.content}>
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
    );


export default App;
