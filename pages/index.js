import Meta from "components/meta"
import Header from "components/header"
import Footer from "components/footer"
import HomeHero from "components/homeHero"
import styles from 'styles/index.module.css'
import HomeSection from '@/components/home-section'
import data from "components/products-link"
/** img */
import skincareImg from 'public/home/skincareImg.webp'
import skincareImgM from 'public/home/skincareImgMobile.webp'
import faceImg from 'public/home/faceImg.webp'
import faceImgM from 'public/home/faceImgMobile.webp'
import eyeImg from 'public/home/eyeImg.webp'
import ripImg from 'public/home/ripImg.webp'
import ripImgM from 'public/home/ripImgMobile.webp'
import brushImg from 'public/home/brushImg.webp'


export default function Home() {

  return  (
    <>
      <Meta />
      <div className={styles.headContainer}>
        <Header isHome/>
        <HomeHero />
      </div>
      <main className={styles.mainContainer}>
        <HomeSection data={data.skincare} img={skincareImg} imgM={skincareImgM} name="skincare" color="var(--skincare)" size='(min-width: 1440px) 570px, 39.6vw'/>
        <HomeSection data={data.face} img={faceImg} imgM={faceImgM} name="face" color="var(--face)" size='(min-width: 1440px) 1140px, 79vw'/>
        <HomeSection data={data.eye} img={eyeImg} name="eye" titleDesc="EYE" color="var(--eye)" size='(min-width: 1440px) 674px, 46.8vw'/>
        <HomeSection data={data.rip} img={ripImg} imgM={ripImgM} name="rip" titleDesc="RIP" color="var(--rip)" size='(min-width: 1440px) 500px, 34.7vw'/>
        <HomeSection data={data.brush} img={brushImg} name="brush" titleDesc="BRUSH" color="var(--brush)" size='(min-width: 1440px) 500px, 34.7vw'/>
      </main>
      <Footer isHome/>
    </>
  )
}