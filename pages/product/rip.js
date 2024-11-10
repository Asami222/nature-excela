import Meta from '@/components/meta'
import Layout from "/components/layout";
import ProductHero from '/components/productHero'
import ProductMain from '@/components/productMain'
import dataProducts from 'components/products-link'


export default function Rip() {

    const data = dataProducts.rip

    return (
        <Layout>
            <Meta pageTitle="リップメイク" pageDesc="口紅などのリップメイク" />
            <ProductHero background="/hero/rip.webp" title="RIP" subtitle="口紅類"/>
            <ProductMain items={data}/>
        </Layout>
    )
}