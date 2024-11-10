import Meta from '@/components/meta'
import Layout from "/components/layout";
import ProductHero from '/components/productHero'
import ProductMain from '@/components/productMain'
import dataProducts from 'components/products-link'


export default function Skincare() {

    const products = dataProducts.skincare
    const data = products.filter(product => product.link !== undefined)
    return (
        <Layout>
            <Meta pageTitle="基礎化粧品" pageDesc="化粧水、乳液などの基礎化粧品" />
            <ProductHero background="/hero/skincare.webp" title="SKINCARE" subtitle="基礎化粧品"/>
            <ProductMain items={data}/> 
        </Layout>  
    )
}