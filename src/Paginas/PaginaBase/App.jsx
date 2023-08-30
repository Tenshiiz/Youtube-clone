import './App.css';
import BarraLateral from '../../componentes/BarraLateral';
import Header from '../../componentes/Header';
import VideoCards from '../../componentes/VideoCards';
import Botão from '../../componentes/botão';
import ThumbPrizza from "../../assets/SvgIcons/ThumbPrizza.jpg"
import PrizzaFoto from "../../assets/SvgIcons/Prizza.jpg"
import ThumbOkabe from "../../assets/SvgIcons/ThumbnailOkabe.jpg"
import OkabeFoto from "../../assets/SvgIcons/Okabe.jpg"
import ThumbSkank from "../../assets/SvgIcons/ThumbSkank.jpg"
import SkankFoto from "../../assets/SvgIcons/Skank.jpg"
import thumbGenshin from "../../assets/SvgIcons/thumbGenshin.jpg"
import BigBadBearFoto from "../../assets/SvgIcons/BigBadBearFoto.jpg"
import ThumbPrizzaTwo from "../../assets/SvgIcons/ThumbFotoTwo.jpg"
import ThumbPrizzaThree from "../../assets/SvgIcons/ThumbFotoThree.jpg"
import ThumbSteven from "../../assets/SvgIcons/lolRanked.jpg"
import GenshinIcon from "../../assets/SvgIcons/GenshinIcon.jpg"

function App() {
  return (
    <>
      <Header />
      <BarraLateral />
      <main>
        <div className="divCategoria">
          <Botão>
            Tudo
          </Botão>

          <Botão>
            Música
          </Botão>

          <Botão>
            Jogos
          </Botão>

          <Botão>
            League of Legends
          </Botão>

          <Botão>
            Genshin Impact
          </Botão>

          <Botão>
            Valorant
          </Botão>

          <Botão>
            Minecraft
          </Botão>

          <Botão>
            M4rkim
          </Botão>

          <Botão>
            Tomates
          </Botão>

          <Botão>
            World of Warcraft
          </Botão>
        </div>
        <div className='Videos'>
          <VideoCards
          link="videos/1"
          img={ThumbSkank} 
          imgIcon={SkankFoto} 
          titulo="Skank - Ainda Gosto Dela (legendado) | Tom & Summer" 
          nomeCanal="Joy" 
          Visualizações="2,5 mi de visualizações • há 1 ano" />

          <VideoCards 
          link="videos/2"
          img={ThumbPrizza} 
          imgIcon={PrizzaFoto} 
          titulo="Pq Japão tem tanto Suic*d*??? sistema de saude e cultura do trabalho" 
          nomeCanal="Prizza" 
          Visualizações="553 mil visualizações • há 2 semanas"/>

          <VideoCards
          link="videos/3" 
          img={ThumbOkabe} 
          imgIcon={OkabeFoto}
          titulo="Bad End Friends - Pior Versão | Okabe"
          nomeCanal="Okabe"
          Visualizações="1,7 mi de visualizações • há 1 mês"/>

          <VideoCards
          link="videos/4"  
          img={ThumbSteven} 
          imgIcon={BigBadBearFoto}
          titulo="League of Legends Season 1 Ranked game Jarvan"
          nomeCanal="Steven L"
          Visualizações="2,6 mi de visualizações • há 12 anos"/>

          <VideoCards
          link="videos/5"  
          img={ThumbPrizzaTwo} 
          imgIcon={PrizzaFoto}
          titulo="TOKYO QUER LEVAR TODO MEU DINHEIRO *studio ghibli cafe*"
          nomeCanal="Prizza"
          Visualizações="116 mil visualizações • há 2 meses"/>

          <VideoCards
          link="videos/6"  
          img={ThumbPrizzaThree} 
          imgIcon={PrizzaFoto}
          titulo="Rotina SOZINHA NO JAPÃO; comprei SORRISOS no mc donnalds de tokyo kk"
          nomeCanal="Prizza"
          Visualizações="445 mil visualizações • há 4 meses"/>

          <VideoCards 
          link="videos/7"  
          img={thumbGenshin} 
          imgIcon={GenshinIcon}
          titulo="Teaser da História de Genshin Impact: Iremos Nos Reunir"
          nomeCanal="Genshin Impact"
          Visualizações="32 mi visualizações • há 2 anos"/>

          <VideoCards 
          img={ThumbPrizza} />

          <VideoCards 
          img={ThumbPrizza} />

        </div>
      </main>
    </>
  );
}

export default App;
