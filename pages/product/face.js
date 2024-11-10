import Layout from "/components/layout";
import Meta from "@/components/meta";
import ProductHero from "components/productHero";
import ProductMain from '@/components/productMain'
import dataProducts from 'components/products-link'


export default function Face() {

    const products = dataProducts.face
    const data = products.filter(product => product.link !== undefined)

    return (
        <Layout>
            <Meta pageTitle="ベースメイク" pageDesc="ファンデーション類" />
            <ProductHero background="/hero/face.webp" title="FACE" subtitle="ベースメイク"/>
            <ProductMain items={data}/>
        </Layout>
    )
}