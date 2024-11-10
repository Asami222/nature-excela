import { HeaderLogoSimple } from "./logo"
import Nav from "./nav"
import styles from 'styles/header.module.css'
import Container from "./container"
import cx from "classnames"
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { cartState } from "store/cart"
import Image from "next/image"


export default function Header({isHome = false}) {

    const cart = useRecoilValue(cartState);


    return (
        <header className={styles.header}>
            <Container large>
            <div className={cx(styles.flexContainer, isHome && styles.flexContainerHeader)}>
                { !isHome &&
                <HeaderLogoSimple />
                }
                <Nav isHeader isHome={isHome}/>
                <Link href="/payments">
                <div className={styles.bag}>
                    <div className={styles.img}>
                        <Image
                            src="/items/bag.svg"
                            alt="shopping bag"
                            layout="fixed"
                            width={30}
                            height={30}
                        />
                    </div>
                {cart.products.length >= 1 && <div className={styles.count}>{cart.products.length}</div>}
                </div>
                </Link>
            </div>
            </Container>
        </header>
    )
}