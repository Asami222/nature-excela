import Meta from "@/components/meta";
import Layout from "/components/layout";
import products from "/components/products"
import ProductText from "@/components/product-text";
import EachItem from "@/components/each-item";
import Container from "components/container";
import styles from 'styles/product.module.css'


export default function NewProduct() {

    const items = products.filter(product => product.id == 'new')
    const {title,text,colors} = {...items[0]}

    return (
        <Layout>
            <Meta pageTitle="新商品" pageDesc="NATURE EXCELAの新商品の紹介"/>
            <main className={styles.container}>
            <Container large>
            <ProductText title={title} text={text}/>
                <div className={styles.grid}>
                {colors.map((color,id) => (
                    <EachItem key={id} product={color} isNew isRow/>
                ))}
                </div>
            </Container>
            </main>
        </Layout>
    )
}