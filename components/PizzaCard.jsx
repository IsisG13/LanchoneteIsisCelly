import Image from 'next/image'
import styles from '../styles/PizzaCard.module.css'

const PizzaCard = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default PizzaCard
