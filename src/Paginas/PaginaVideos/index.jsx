import styles from "./PaginaVideos.module.css"
import Header from "../../componentes/Header";
import videos from "../../Videos.json";
import { useParams } from "react-router";
import InfosVideo from "../../componentes/InfosVideo";
import PostsSugeridos from "../../componentes/PostsSugeridos";
function PaginaVideos() {
    const parameters = useParams();
    const post = videos.find((video) => {
        if (video.id == parameters.id) {
            return video;
        }
    })
    const ArrayVideos = [];

    for (var i = 0; i < 5; i++) {
        var result = Math.round(Math.random() * videos.length);
        while (result == 0 || result == parameters.id || ArrayVideos.includes(result)) {
            result = Math.round(Math.random() * videos.length);
        }
        ArrayVideos.push(result);
    }
    console.log(ArrayVideos);
    
    const videosSugeridos = [];

    for (var u = 0; u < ArrayVideos.length; u++) {
        const itemArray = videos.find((video) => {
            return video.id == ArrayVideos[u];
        })
        videosSugeridos.push(itemArray);
    }
    console.log(videosSugeridos);
    return (
        <>
            <Header />
            <div className={styles.divOne}>
                <div className={styles.divVideos}>
                    <iframe src={post.iframe} title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share allowfullscreen'></iframe>
                    <InfosVideo
                        titulo={post.titulo}
                        icone={post.icone}
                        nomeCanal={post.nomeCanal}
                        inscritos={post.inscritos}
                        likes={post.likes} />
                </div>
                <div className={styles.divTwo}>
                    {
                       videosSugeridos.map((value) => {
                        return <PostsSugeridos key={value.id} thumb={value.thumb} titulo={value.titulo} nomeCanal={value.nomeCanal} Visualizações={value.visualizações} link={value.link} Icon={value.icone}/>
                        
                       })
                       
                    }
                </div>

            </div>
        </>
    )
}
export default PaginaVideos;