import { useCallback } from "react";
import Layout from "/components/layout"
import Meta from "@/components/meta"
import Container from "components/container";
import { useRecoilValue } from "recoil";
import { cartState, totalPriceSelector,totalCountSelector } from "store/cart";
import { Bag } from "@/components/bag";
import styles from 'styles/payments.module.css';

const PaymentsPage = () => {
    const cart = useRecoilValue(cartState);
    const totalCount = useRecoilValue(totalCountSelector);
    let totalPrice = useRecoilValue(totalPriceSelector);
    totalPrice =totalPrice.toLocaleString();
    

    return (
        <Layout>
        <Meta pageTitle="カート" pageDesc="カートの中身"/>
        <main className={styles.wrapper}>
            <Container>
            <div className={styles.titleWrap}>
                <h1>カート</h1>
                <div>
                    <p>個数&emsp;{totalCount}点</p>
                    <p>合計&emsp;{totalPrice}円（税込）</p>
                </div>
            </div>
            <div>
                <div className={styles.productContainer}>
                {cart.products.length === 0 && <p>カートにアイテムが入っていません</p>}
                {cart.products.map((product) => (
                <Bag product={product} key={product.id} />
                ))}
                </div>
            </div>
            </Container>
        </main>
        </Layout>
    )
}

export default PaymentsPage;