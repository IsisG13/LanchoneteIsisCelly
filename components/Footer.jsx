import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container} id="contacts">
            <div className={styles.item}>
                <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        UAU, ESSE SITE FOI CRIADO POR ISIS E MARCELLY!! ATENÇÃO: NÃO SE ILUDA ACHANDO QUE VAI GANHAR COMIDA 😉.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>ENDEREÇOS DAS LANCHONETES</h1>
                    <p className={styles.text}>
                        8348 R. Caroll, Tomba  #304.
                        <br /> Brasil, 83764
                        <br /> (602) 867-1010
                    </p>
                    <p className={styles.text}>
                        7683K. R. Marechal Deodoro, Centro #235.
                        <br />Brasil, 93847
                        <br /> (602) 867-1011
                    </p>
                    <p className={styles.text}>
                        1614 R. E. Erwin #104.
                        <br /> Brasil 87394
                        <br /> (602) 867-1012
                    </p>
                    <p className={styles.text}>
                        1614 R. W. Caroll #125.
                        <br /> Brasil 73684s
                        <br /> (602) 867-1013
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>HORÁRIO DE FUNCIONAMENTO</h1>
                    <p className={styles.text}>
                        SEGUNDA A SEXTA
                        <br /> 9:00 – 22:00
                    </p>
                    <p className={styles.text}>
                        SÁBADO - DOMINGO
                        <br /> 12:00 – 24:00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
