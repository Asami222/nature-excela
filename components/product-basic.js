import Meta from "/components/meta";
import ProductText from "/components/product-text";
import EachItem from "/components/each-item";
import Container from "components/container";
import styles from 'styles/product.module.css';


export default function Product({id,title,text,colors,isCol = false, isRow = false, hasColor=false}) {

    return (
        <>
        <Meta pageTitle={title} pageDesc={text}/>
        <main className={styles.container}>
        <Container large>
        <ProductText title={title} text={text}/>
        <div className={styles.grid}>
        {colors.map((color,i) => (
            <EachItem key={i} product={color} isCol={isCol} isRow={isRow} hasColor={hasColor} id={id}/>
        ))}
        </div>
        </Container>
        </main>
        </>
    )
}