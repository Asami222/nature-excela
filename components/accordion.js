import { useState, useRef } from 'react'
import Image from 'next/image'
import styles from 'styles/accordion.module.css'

export default function Accordion({heading, children}) {

    const [ textIsOpen, setTextIsOpen] = useState(false)

    const toggleText = () => {
        setTextIsOpen((prev) => !prev)
    }

    const refText = useRef(null)

    return (
        <div className={textIsOpen ? styles.open : styles.close}>
            <h4 className={styles.heading}>
                <button onClick={toggleText}>
                    {heading}
                    <div className={styles.arrow}>
                        <Image
                            src="/items/contact/arrow.svg"
                            alt="open"
                            layout="responsive"
                            width={15}
                            height={7}
                            sizes='(min-width: 700px) 15px, 2.1vw'
                        />
                    </div>
                </button>
            </h4>
            <div className={styles.text} ref={refText} style={{'--text-height': refText.current ? `${refText.current.scrollHeight}px` : '0px',}}>
                <div className={styles.textInner}>{children}</div>
            </div>
        </div>
    )
}