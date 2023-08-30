import "./VideoCards.css"

function VideoCards({ img, imgIcon, titulo, nomeCanal, Visualizações, link }) {
    return (
        <div className="cards">
             <a href={link} className="linktitulo">
            <img src={img} className="thumbnail" />
            </a>
            <div className="descrição">
                <span>
                    <img src={imgIcon} className="Avatar" />
                </span>

                <div className="descriçãoTwo">
                    <a href={link} className="linktitulo">
                        <p className="titulo">{titulo}</p>
                    </a>
                    <span className="nomeCanal">{nomeCanal}</span>
                    <span className="Visualizações">{Visualizações}</span>
                </div>
            </div>
        </div>
    )
}

export default VideoCards;