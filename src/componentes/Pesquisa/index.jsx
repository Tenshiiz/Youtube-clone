import styles from "./Pesquisa.module.css"
import Lupa from "../../assets/SvgIcons/icons8-lupa.svg"
import Microphone from "../../assets/SvgIcons/microphone-svgrepo-com (1).svg"
function Pesquisa() {
    return (
        <>
            <input type="search" placeholder="Pesquisar" className={styles.search}></input>
            <button className={styles.buttonLupa}>
                <img src={Lupa} className={styles.Lupa} />
            </button>
            <button className={styles.buttonMicrophone}>
                <img src={Microphone} className={styles.Microphone} />
            </button>
        </>
    )
}

export default Pesquisa;