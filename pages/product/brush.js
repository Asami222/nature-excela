import Layout from "/components/layout"
import Meta from '@/components/meta'
import ProductHero from '/components/productHero'
import ProductMain from '@/components/productMain'
import dataProducts from 'components/products-link'


export default function Skincare() {

    const data = dataProducts.brush

    return (
        <Layout>
            <Meta pageTitle="ブラシ" pageDesc="メイクブラシ" />
            <ProductHero background="/hero/brush.webp" title="BRUSH" subtitle="メイクブラシ" white/>
            <ProductMain items={data}/> 
        </Layout>  
    )
}