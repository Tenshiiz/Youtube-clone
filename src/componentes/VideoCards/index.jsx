import "./VideoCards.css"
import Elipse from "../../assets/SvgIcons/ellipsis-vertical-white.svg"

function VideoCards({ img, imgIcon, titulo, nomeCanal, Visualizações, link }) {
    return (
        <div className="cards">
             <a href={link} className="linktitulo">
            <img src={img} className="thumbnail" alt={titulo} />
            </a>
            <div className="descrição">
                <span>
                    <img src={imgIcon} className="Avatar" alt={nomeCanal} />
                </span>

                <div className="descriçãoTwo">
                    <a href={link} className="linktitulo">
                        <p className="titulo">{titulo}</p>
                    </a>
                    <span className="nomeCanal">{nomeCanal}</span>
                    <span className="Visualizações">{Visualizações}</span>
                    <div className="divdescMobile">
                    <span className="nomeCanalMobile">{nomeCanal}</span>
                    <span className="VisualizaçõesMobile">{Visualizações}</span>
                    </div>
                </div>
                <img src={Elipse} className="logoConfigTwo" alt="Configurações" />
            </div>
            
        </div>
    )
}

export default VideoCards;