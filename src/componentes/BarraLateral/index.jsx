import styles from "./BarraLateral.module.css"
import Home from "../../assets/SvgIcons/home.svg"
import Shorts from "../../assets/SvgIcons/youtubeShorts.svg"
import Inscrições from "../../assets/SvgIcons/se-inscrever.png"
import Biblioteca from "../../assets/SvgIcons/Biblioteca.png"
import Historico from "../../assets/SvgIcons/Relogio.svg"
import EmAlta from "../../assets/SvgIcons/Meteoro.png"
import Shopping from "../../assets/SvgIcons/Shopping.png"
import notaMusical from "../../assets/SvgIcons/notaMusical.png"
import Cinema from "../../assets/SvgIcons/cinema.png"
import aoVivo from "../../assets/SvgIcons/aoVivo.png"
import Controle from "../../assets/SvgIcons/controle.png"
import Panfleto from "../../assets/SvgIcons/folheto.png"
import Trofeu from "../../assets/SvgIcons/trofeu.png"
import Lampada from "../../assets/SvgIcons/lampada-de-ideia.png"
import Mais from "../../assets/SvgIcons/mais.png"
import Youtube from "../../assets/SvgIcons/youtube.png"
import Youtube2 from "../../assets/SvgIcons/youtube2.png"
import Youtube3 from "../../assets/SvgIcons/youtube3.png"
import Engrenagem from "../../assets/SvgIcons/engrenagem.png"
import Bandeira from "../../assets/SvgIcons/bandeiras.png"
import Interrogação from "../../assets/SvgIcons/sinal-de-interrogacao.png"
import Exclamação from "../../assets/SvgIcons/ponto-de-exclamacao.png"
import FazerLogin from "../FazerLogin"
import { Links, LinksTwo } from "../Links"
function BarraLateral() {
    return (
        <>
            <div className={styles.BarraLateral}>
                <Links img={Home}>
                    Início
                </Links>

                <Links img={Shorts}>
                    Shorts
                </Links>

                <Links img={Inscrições}>
                    Inscrições
                </Links>

                <LinksTwo img={Biblioteca}>
                    Biblioteca
                </LinksTwo>

                <hr className={styles.hrOne} />

                <LinksTwo img={Historico}>
                    Histórico
                </LinksTwo>

                <hr className={styles.hrTwo} />

                <div className={styles.textos}>
                    <p>Faça login para curtir vídeos, comentar e se inscrever.</p>
                    <div className={styles.LoginLateral}>
                        <FazerLogin />
                    </div>
                </div>

                <hr className={styles.hrThree} />
                <h2 className={styles.explorar}>Explorar</h2>
                <Links img={EmAlta}>
                    Em alta
                </Links>
                <Links img={Shopping}>
                    Shopping
                </Links>
                <Links img={notaMusical}>
                    Música
                </Links>
                <Links img={Cinema}>
                    Filmes
                </Links>
                <Links img={aoVivo}>
                    Ao vivo
                </Links>
                <Links img={Controle}>
                    Jogos
                </Links>
                <Links img={Panfleto}>
                    Notícias
                </Links>
                <Links img={Trofeu}>
                    Esportes
                </Links>
                <Links img={Lampada}>
                    Aprender
                </Links>

                <hr className={styles.hrFour} />

                <Links img={Mais} className={styles.classe}>
                    Procurar canais
                </Links>

                <hr className={styles.hrFive} />

                <h2>Mais do YouTube</h2>
                <Links img={Youtube}>
                    Youtube premium
                </Links>
                <Links img={Youtube3}>
                    Youtube music
                </Links>
                <Links img={Youtube2}>
                    Youtube kids
                </Links>

                <hr className={styles.hrSix}/>

                <Links img={Engrenagem}>
                    Configurações
                </Links>
                <Links img={Bandeira}>
                    Histórico de denúnc...
                </Links>
                <Links img={Interrogação}>
                    Ajuda
                </Links>
                <Links img={Exclamação}>
                    Enviar feedback
                </Links>
                <hr  className={styles.hrSeven}/>
            </div>
        </>
    )
}

export default BarraLateral;