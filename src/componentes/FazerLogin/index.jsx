import styles from "./FazerLogin.module.css"
import Profile from "../../assets/SvgIcons/profile-circle-svgrepo-com.svg"

function FazerLogin() {
    return (
        <div className={styles.divLogin}>
            <img src={Profile} className={styles.Profile} />
            <span>Fazer Login</span>
        </div>
    )
}
export default FazerLogin;