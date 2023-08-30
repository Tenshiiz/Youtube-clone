import MenuLogoBranco from "../../assets/SvgIcons/icons8-menuWhite.svg"
import YoutubeLogo from "../../assets/SvgIcons/youtube.svg"
import Elipse from "../../assets/SvgIcons/ellipsis-vertical-white.svg"
import Pesquisa from "../Pesquisa";
import styles from "./Header.module.css"
import FazerLogin from "../FazerLogin";

function Header() {
    return (
        <header>
            <div>
                <button>
                    <img src={MenuLogoBranco} className={styles.Logo} />
                </button>
                <div className={styles.divLogo}>
                    <a href="http://localhost:3000" className={styles.linkYoutube}>
                        <img src={YoutubeLogo} className={styles.LogoYoutube} />
                        <span className={styles.nameLogo}>YouTube</span>
                        <span>BR</span>
                    </a>
                </div>
            </div>
            <div className={styles.divSearch}>
                <Pesquisa />
            </div>
            <div>
                <button className={styles.buttonConfig}>
                    <img src={Elipse} className={styles.logoConfig} />
                </button>
                <FazerLogin />
            </div>
        </header>
    )
}

export default Header;