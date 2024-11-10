import ProductColumn from "./product-column"
import ProductMenu from "./product-menu"
import Container from "components/container";
import styles from 'styles/productMain.module.css'

export default function ProductMain({items}) {
    return (
        <main className={styles.wrapper}>
            <Container>
                <div className={styles.container}>
                    <ProductColumn />
                    <ProductMenu items={items}/>
                </div>
            </Container>
        </main>
    )
}

