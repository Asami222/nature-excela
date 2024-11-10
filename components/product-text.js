
import styles from 'styles/product-text.module.css'

export default function ProductText({title, text}) {

    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}