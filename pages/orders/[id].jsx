import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
    const status = 0;

    const statusClass = (index) => {
        if (index - status < 1) return styles.done;
        if (index - status === 1) return styles.inProgress;
        if (index - status > 1) return styles.undone;
    };
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                    <table className={styles.table}>
                        <thead>
                            <tr className={styles.trTitle}>
                                <th>ID do pedido</th>
                                <th>Cliente</th>
                                <th>Endereço</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.tr}>
                                <td>
                                    <span className={styles.id}>129837819237</span>
                                </td>
                                <td>
                                    <span className={styles.name}>Isis Celly</span>
                                </td>
                                <td>
                                    <span className={styles.address}>Elton st. 212-33 LA</span>
                                </td>
                                <td>
                                    <span className={styles.total}>R$7,00</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.row}>
                    <div className={statusClass(0)}>
                        <Image src="/img/paid.png" width={30} height={30} alt="" />
                        <span>Pagamento</span>
                        <div className={styles.checkedIcon}>
                            <Image
                                className={styles.checkedIcon}
                                src="/img/checked.png"
                                width={20}
                                height={20}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image src="/img/bake.png" width={30} height={30} alt="" />
                        <span>Preparando</span>
                        <div className={styles.checkedIcon}>
                            <Image
                                className={styles.checkedIcon}
                                src="/img/checked.png"
                                width={20}
                                height={20}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image src="/img/bike.png" width={30} height={30} alt="" />
                        <span>A caminho</span>
                        <div className={styles.checkedIcon}>
                            <Image
                                className={styles.checkedIcon}
                                src="/img/checked.png"
                                width={20}
                                height={20}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <Image src="/img/delivered.png" width={30} height={30} alt="" />
                        <span>Entregue</span>
                        <div className={styles.checkedIcon}>
                            <Image
                                className={styles.checkedIcon}
                                src="/img/checked.png"
                                width={20}
                                height={20}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Preço total</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>R$7,00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Desconto:</b>R$0,00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>R$7,00
                    </div>
                    <button disabled className={styles.button}>
                        Pago
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Order;
