import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title} id="products">A MELHOR LANCHONETE DA CIDADE</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
                in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
            </p>
            <div className={styles.wrapper}>
                <PizzaCard>
                    <Link passHref={true} href="/product/1" >
                        <Image src="/img/suco.png" alt="" width="500" height="500" />
                    </Link>
                    <p className={styles.titleCard}>SUCO</p>
                    <span className={styles.priceCard}>R$ 3,50</span>
                    <p className={styles.descCard}>
                        Laranja, morango, manga, banana, maçã, abacaxi, etc...
                    </p>
                </PizzaCard>
                <PizzaCard>
                    <Link passHref={true} href="/product/2" >
                        <Image src="/img/milkshake.png" alt="" width="500" height="500" />
                    </Link>
                    <p className={styles.titleCard}>MILKSHAKE</p>
                    <span className={styles.priceCard}>R$8,50</span>
                    <p className={styles.descCard}>
                        Morango, chocolate, baunilha, ovomaltine, banana, etc...
                    </p>
                </PizzaCard>
                <PizzaCard>
                    <Link passHref={true} href="/product/3" >
                        <Image src="/img/sorvete.png" alt="" width="500" height="500" />
                    </Link>
                    <p className={styles.titleCard}>SORVETE</p>
                    <span className={styles.priceCard}>R$ 5,60</span>
                    <p className={styles.descCard}>
                        Creme, passas, morango, chocolate, flocos, napolitano, etc...
                    </p>
                </PizzaCard>
                <PizzaCard>
                    <Link passHref={true} href="/product/4" >
                        <Image src="/img/acai.png" alt="" width="500" height="500" />
                    </Link>
                    <p className={styles.titleCard}>AÇAÍ</p>
                    <span className={styles.priceCard}>R$10.90</span>
                    <p className={styles.descCard}>
                        Açaí, Açaí com morango, Açaí com banana, Açaí com cupuaçu, etc
                    </p>
                </PizzaCard>
            </div>
        </div>
    )
}

export default PizzaList
