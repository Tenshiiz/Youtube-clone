import styles from "./InfosVideo.module.css"
import Like from "../../assets/SvgIcons/like.png"
import Unlike from "../../assets/SvgIcons/unlike.png"
import mais from "../../assets/SvgIcons/icons8-ellipsis-30.png"
function InfosVideo({ titulo, icone, nomeCanal, inscritos, likes }) {
    return (
        <>
            <div className={styles.infoVideo}>
                <span className={styles.titulo}>{titulo}</span>
                <div className={styles.infosCanal}>
                    <img src={icone} className={styles.avatar} />
                    <div className={styles.nomeInscritos}>
                        <span>{nomeCanal}</span>
                        <span className={styles.inscritos}>{inscritos}</span>
                    </div>
                    <div className={styles.DivBotoes}>
                        <button className={styles.botoes}>
                            Inscrever-se
                        </button>
                        <button className={`${styles.botoes} ${styles.likeDeslike}`}>
                            <img src={Like} className={styles.like} />
                            <span>{likes}</span>
                            <img src={Unlike} className={styles.unlike} />
                        </button>
                        <button className={`${styles.botoes} ${styles.compartilhar}`}>compartilhar</button>
                        <button className={`${styles.botoes} ${styles.botaomais}`}><img src={mais} className={styles.mais} /></button>
                    </div>
                    <div className={styles.InscreverMobile}>
                        <button className={`${styles.botoes} ${styles.botaoinscrever}`}>
                            Inscrever-se
                        </button>
                    </div>
                </div>
                <div className={styles.DivBotoesMobile}>
                    <button className={`${styles.botoes} ${styles.likesDeslikeMobile}`}>
                        <img src={Like} className={styles.like} />
                        <span>{likes}</span>
                        <img src={Unlike} className={styles.unlike} />
                    </button>
                    <button className={`${styles.botoes} ${styles.compartilhar}`}>compartilhar</button>
                    <button className={`${styles.botoes} ${styles.botaomais}`}><img src={mais} className={styles.mais} /></button>
                </div>
            </div>

        </>
    )
}

export default InfosVideo;