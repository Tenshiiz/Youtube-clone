import styles from "./PostsSugeridos.module.css"
function PostsSugeridos({ thumb, titulo, nomeCanal, Visualizações, link, Icon }) {
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
            <div className={styles.descriçãoMobile}>
                <img src={Icon} className={styles.Icone} />
                <div>
                    <a href={link} className={styles.link}>
                        <h2 className={styles.titulo}>
                            {titulo}
                        </h2>
                    </a>
                    <span className={styles.nomeCanalMobile}>
                        {nomeCanal}
                    </span>
                    <span className={styles.visualizaçõesMobile}>
                        {Visualizações}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default PostsSugeridos;