import styles from "./PostsSugeridos.module.css"
function PostsSugeridos({ thumb, titulo, nomeCanal, Visualizações, link }) {
    return (
        <div className={styles.VideosSugestão}>
            <a href={link} className={styles.link}>
                <img src={thumb} className={styles.thumbSugestão} />
            </a>
            <div className={styles.descrições}>
                <a href={link} className={styles.link}>
                    <h2 className={styles.titulo}>
                        {titulo}
                    </h2>
                </a>
                <span className={styles.nomeCanal}>
                    {nomeCanal}
                </span>
                <span className={styles.visualizações}>
                    {Visualizações}
                </span>
            </div>
        </div>
    )
}
export default PostsSugeridos;