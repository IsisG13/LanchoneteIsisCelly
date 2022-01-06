import styles from "../styles/Cart.module.css";
import Image from "next/image";
import Link from 'next/link';

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.trTitle}>
                            <th>Produto</th>
                            <th>Nome</th>
                            <th>Extras</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className={styles.tr}>
                            <td>
                                <div className={styles.imgContainer}>
                                    <Image
                                        src="/img/suco.png"
                                        layout="fill"
                                        objectFit="cover"
                                        alt=""
                                    />
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>SUCO DE LARANJA</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    + Fruta, com caramelo
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>R$3,50</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>2</span>
                            </td>
                            <td>
                                <span className={styles.total}>R$7,00</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>PREÇO TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>R$7,00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Desconto:</b>R$0,00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>R$7,00
                    </div>
                    <Link passHref={true} to="/orders/1" href="/orders/1" >
                        <button className={styles.button}>
                            Pagar agora
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;