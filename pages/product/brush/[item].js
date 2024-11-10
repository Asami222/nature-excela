import Layout from "/components/layout"
import { useRouter } from 'next/router'
import Product from "/components/product-basic";
import products from "/components/products"
import styles from 'styles/[item].module.css';


export default function ProductItem() {

    const router = useRouter()
    const item = router.query.item
    const applies = products.filter(product => product.id == item)

    return (
        <Layout>
        {  
            applies.length === 0 ? (
                <div className={styles.noProduct}><p>商品はありません</p></div>) : (
                applies.map((apply,i) => <Product key={i} {...apply}/>) 
            )   
        }
        </Layout>
    )
}
