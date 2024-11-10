import Image from 'next/image'
import styles from 'styles/homeHero.module.css'
import face from 'public/home/face.webp'
import faceMobile from 'public/home/faceMobile.webp'
import logo from 'public/home/topLogo.svg'
import logoMobile from 'public/home/topLogoMobile.svg'
import { useMediaQuery } from 'react-responsive'

const Face = ({isMobile = false}) => (

   isMobile ?
    <Image
        src={faceMobile}
        alt=''
        layout='fill'
        objectFit='cover'
        placeholder='blur'
        quality={75}
    />
    :
    <Image
        src={face}
        alt=''
        layout='responsive'
        sizes='(min-width: 1440px) 500px, 35vw'
        placeholder='blur'
    />    
);

const Title = ({isMobile = false}) => (

    isMobile ?
     <Image
         src={logoMobile}
         alt='NATURE EXCELA'
         layout='responsive'
         sizes='72vw'
     />
     :
     <Image
        src={logo}
        alt='NATURE EXCELA'
        layout='responsive'
        sizes='(min-width: 1440px) 277px, 29.5vw'
    /> 
 );
 
export default function HomeHero() {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <div className={styles.container}>
            <figure className={styles.face}>
                {!isMobile && <Face />}
                {isMobile && <Face isMobile/>}
            </figure>
            <div className={styles.titleFlex}>
                <h1 className={styles.title}>
                    {!isMobile && <Title/>}
                    {isMobile && <Title isMobile/>}
                </h1>
                <h2 className={styles.subtitle}>自然に秀でた化粧品</h2>
                {isMobile &&
                <p>自然から生まれた肌に良い成分を研究し、そのエッセンスを凝縮しました。使い続けていくうちに徐々に変化が訪れ、肌本来の力を蘇らせて自らの力で再生させる力を呼び覚まします。<br />まるで再生医療かのような新しい進化系化粧品です。</p>
                }
            </div>
        </div>
    )
}
