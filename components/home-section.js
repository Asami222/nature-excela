import styles from 'styles/home-section.module.css'
import Link from "next/link";
import { useMediaQuery } from 'react-responsive'
import cx from "classnames"
import Image from 'next/image'

const Menu = ({data,isMobile= false}) => {

    return (
        <div className={styles.menu}>
            {isMobile ?
            (data.map((item,i) => (

                item.link ? (
                    <p key={i} className={styles.existFlex}>
                        {item.exist && <span className={styles.exist}>exists!</span>}
                        <Link href={item.link}>
                            {item.name}
                        </Link>
                    </p> 
                ):(
                    ''
                )
            )))
            :(data.map((item,i) => (

                item.link ? (
                    <p key={i}>
                        <Link href={item.link}>
                            {item.name}
                        </Link>
                        {item.exist && <span className={styles.exist}>exists!</span>}
                    </p>
                ):(
                    <h2 key={i}>
                        {item.name}
                    </h2>
                )
            )))
        }
        </div>
    )
}

const Img = ({img,imgM,size,isMobile=false}) => {

    return (
        <div className={styles.img}>
            {isMobile ?
             ( imgM &&
                <Image
                    src={imgM}
                    alt=''
                    layout='fill'
                    objectFit='cover'
                    placeholder='blur'
                />
            ):(
               <Image
                    src={img}
                    alt=''
                    layout='responsive'
                    sizes={size}
                    placeholder='blur'
                />
            )}   
        </div>
    )
}


export default function HomeSection({data,img,imgM,size,name,titleDesc,color}) {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const title = name.toUpperCase()
     
    return (
        <div className={cx(styles.container,styles[name])}>
            {isMobile && <h2>{title}</h2>}
            {!isMobile && <Menu data={data}/>}
            {isMobile && 
            <div className={styles.menuContainer}>
                <Menu data={data} name={name} isMobile/>
                <div className={styles.colorBox} style={{'--color-box':color}}></div>
            </div>
            }
            {!isMobile && 
                (titleDesc ?
                    <div className={styles.titleFlex}>
                        <h2>{titleDesc}</h2>
                        <Img img={img} size={size}/>
                    </div>
                :
                    <Img img={img} size={size}/>
                )   
            }
            {isMobile && <Img imgM={imgM} isMobile/>}
        </div>
    )
}