import Image from 'next/image'
import cx from "classnames"
import styles from 'styles/productHero.module.css'

 
export default function ProductHero({isAbout = false, isNew = false, background, title, subtitle, white = false}) {
    return (
        <div className={cx(isNew ? styles.newContainer : styles.heroContainer)} style={{backgroundImage: `url(${background})`}}>
            <h1 className={cx(isAbout ? styles.titleAbout : styles.title, white && styles.white)}>
                {isAbout && 
                <Image
                src="about/aboutTitle.svg"
                alt='NATURE EXCELA'
                layout='responsive'
                width={541}
                height={65}
                sizes='(min-width: 1260px) 541px, (min-width: 768px) 45vw, 100vw'
                /> 
                }
                {title}    
            </h1>
            <p className={cx(isAbout ? styles.subtitleAbout : styles.subtitle, white && styles.white)}>{subtitle}</p>
        </div>
    )
}
