import Layout from "/components/layout"
import Meta from '@/components/meta'
import ProductHero from '/components/productHero'
import ProductMain from '@/components/productMain'
import dataProducts from 'components/products-link'


export default function Eye() {

    const data = dataProducts.eye

    return (
        <Layout>
            <Meta pageTitle="アイメイク" pageDesc="マスカラなどのアイメイク商品" />
            <ProductHero background="/hero/eye.webp" title="EYE" subtitle="アイメイク"/>
            <ProductMain items={data}/> 
        </Layout>
    )
}