import './App.css';
import BarraLateral from '../../componentes/BarraLateral';
import Header from '../../componentes/Header';
import VideoCards from '../../componentes/VideoCards';
import Botão from '../../componentes/botão';
import videos from "../../Videos.json"
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
          {
            videos.map((value) => {
              return <VideoCards
              link={`videos/${value.link}`}
              img={value.thumb} 
              imgIcon={value.icone} 
              titulo={value.titulo}
              nomeCanal={value.nomeCanal} 
              Visualizações={value.visualizações} />
            })
          }
        </div>
      </main>
    </>
  );
}

export default App;
