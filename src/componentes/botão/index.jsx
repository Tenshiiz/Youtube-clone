import styles from "./botão.module.css"

function botão() {
    var botoes = ["Tudo", "Música", "Jogos", "Lofi", "HipHop", "Valorant", "Minecraft", "M4rkim", "Tomates", "Mangá", "React", "Cómedia"]

    return (
            botoes.map((value) => (
            <a href="#" className={styles.linksCategoria}>
                {value}
            </a>
            ))

    )
}  
export default botão;