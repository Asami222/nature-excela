import styles from 'styles/product-menu.module.css'
import Link from "next/link";

export default function ProductMenu({items}) { 

    return (
            <ul className={styles.container}>
                {items.map((item,i) => (
                    <li key={i}>
                        <Link href={item.link} className={item.exist ? styles.exist : styles.noExist}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
    )
}