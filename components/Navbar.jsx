import Link from 'next/link'
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}></div>

            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link href='/'>
                            Home
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href='#products'>
                            Products
                        </Link>
                    </li>
                    <p className={styles.logo}>ISIS CELLY</p>
                    <li className={styles.listItem}>
                        <Link href='/orders/1'>
                            Menu
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href='#contacts'>
                            Contacts
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={styles.item}></div>
        </div>
    )
}

export default Navbar
