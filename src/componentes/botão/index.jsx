import styles from "./botão.module.css"

function botão({ children }) {
    return (
        <a href="#" className={styles.linksCategoria}>
            {children}
        </a>
    )
}
export default botão;