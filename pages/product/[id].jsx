import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from "../../styles/Product.module.css"

const Product = () => {

  const [size, setSize] = useState(2);
  const [soma, setSoma] = useState(0);
  const [change, setChange] = useState(false);

  const suco = {
    id: 1,
    img: "/img/suco.png",
    sizeImg: "/img/size.png",
    price: [1.50, 2.50, 3.50, 4.50, 5.50, 6.50, 7.50, 8.50, 9.50, 10.50, 11.50, 12.50, 13.50, 14.50, 15.50, 16.50, 17.50],
    name: "SUCO",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  };

  function handleSoma() {
    return setSoma((soma) = soma + 1)
  }
  function handleSub() {
    return setSoma((soma) = soma - 1)
  }
  function handleChange() {
    setChange(!change)

    if (change == false) {
      handleSoma()
    } else {
      handleSub()
    }

  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={suco.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{suco.name}</h1>
        <span className={styles.price}>R${suco.price[size + soma]}</span>
        <p className={styles.desc}>{suco.desc}</p>
        <h3 className={styles.choose}>Tamanho do copo</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src={suco.sizeImg} layout="fill" alt="" />
            <span className={styles.number}>Pequeno</span>
          </div>
          <div className={styles.size} onClick={() => setSize(3)}>
            <Image src={suco.sizeImg} layout="fill" alt="" />
            <span className={styles.number}>Médio</span>
          </div>
          <div className={styles.size} onClick={() => setSize(4)}>
            <Image src={suco.sizeImg} layout="fill" alt="" />
            <span className={styles.number}>Grande</span>
          </div>
        </div>
        <h3 className={styles.choose}>Adicionar ingredientes</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="fruta"
              name="fruta"
              onClick={handleChange}
            />
            <label htmlFor="">+ Fruta</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="acucar"
              name="acucar"
              onClick={handleChange}
            />

            <label htmlFor="cheese">+ Açúcar</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="leite"
              name="leite"
              onClick={handleChange}
            />

            <label htmlFor="spicy">Com leite</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="caramelo"
              name="caramelo"
              onClick={handleChange}
            />


            <label htmlFor="garlic">Com caramelo</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <Link passHref={true} to="/cart" href="/cart" >
            <button className={styles.button}>
              Adicionar ao cartão
            </button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Product