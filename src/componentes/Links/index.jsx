import styles from "./Links.module.css"

export function Links({img, children}) {
    return (
        <a href="#" className={`${styles.linksLaterais}`}>
            <div className={styles.IconsText}>
                <img src={img} className={styles.icons} /> 
                <span className={styles.texto}>
                    {children}
                </span>
            </div>
        </a>
    )
}
export function LinksTwo({img, children}) {
    return (
        <a href="#" className={`${styles.linksLaterais} ${styles.linksLateraisTwo}`}>
        <div className={styles.IconsText}>
            <img src={img} className={styles.icons} />
            <span className={styles.texto}>
                {children}
            </span>
        </div>
    </a>
    )
}
