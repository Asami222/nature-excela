import styles from 'styles/term-body.module.css'

export default function TermBody({ children }) {
    return (
        <main className={styles.stack}>
            {children}
        </main>
    )
}