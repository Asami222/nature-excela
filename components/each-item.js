import Image from 'next/image'
import styles from 'styles/each-item.module.css'
import cx from "classnames"
import { useCart } from 'store/useCart'

export default function EachItem({isRow = false, isNew = false, hasColor = false, isCol =false, product, id}) {

    const { addCart } = useCart();
    const price = (product.price).toLocaleString();

    return (
        <div className={styles.container}>
            <div className={cx(isCol && styles.colImg, hasColor && styles.colorImg, id === "cream" && styles.cream, id === "serum" && styles.serum)} style={ product.color && {'--color-box': product.color} }>
                <Image
                    src={product.image.url}
                    alt={product.image.alt}
                    layout='responsive'
                    width={product.image.width}
                    height={product.image.height}
                    sizes='(min-width: 1320px) 1320px, 100vw'
                />
            </div>
            <div className={cx(styles.text, isCol && styles.colText, hasColor && styles.colorText)}>
                { isNew &&
                    <p className={styles.date}>{product.date}発売開始</p>
                }
                <h2>{product.name}</h2>
                
                <div className={cx(isRow ? styles.row : styles.col)}>
                    <p className={styles.price}>{price}円（税込）</p>
                    <button className={styles.btn} onClick={() => addCart(product)}>バッグに入れる</button>
                </div>
            </div>
        </div>
    )
}


