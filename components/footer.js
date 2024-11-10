import Link from "next/link";
import { FooterLogo } from "./logo"
import Nav from "./nav"
import styles from 'styles/footer.module.css'
import Container from "./container";
import cx from "classnames"
import Sns from "components/sns"



export default function Footer({isHome = false}) {

    return (
        <footer className={cx(styles.wrapper, isHome && styles.homeWrapper)}>
            <Container>
            <div className={styles.footerFlex}>
                <div className={styles.flexContainer}>
                    {isHome ? <FooterLogo isHome={isHome} /> : <FooterLogo />}
                        <Nav isFooter isHome={isHome}/> 
                    <div className={styles.sns}>
                    <Sns isHome={isHome}/>
                    </div>         
                </div>
                <div>
                    <div className={styles.privacy}>
                        <p><Link href="/terms">利用規約</Link></p>
                        <p><Link href="/commercial">特定商取引法に基づく表記</Link></p>
                    </div> 
                    <p className={styles.copyright}>©︎ NATURE EXCELA. All Rights Reserved.</p>
                </div>
            </div>
            </Container>
        </footer>
    )
}