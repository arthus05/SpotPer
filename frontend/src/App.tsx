import { GlobalStyle } from "../src/styles/global";
import { Header } from "./components/Header";
import { CardAlbum } from "./components/CardAlbum";

// MOCADOS
import album_adele from '../src/utils/imagens/album_Adele.jpg'
import album_Selvagens from '../src/utils/imagens/album_selvagens.jpg'
import album_Beatles from '../src/utils/imagens/album_beatles.jpg'
import album_xuxa from '../src/utils/imagens/album_xuxa.jpg'
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{margin: "25px", display: "flex"}}>
      <CardAlbum id="1" image={album_adele} data="20/10/2020" nome="Nova Adele"/>
      <CardAlbum id="2" image={album_Beatles} data="20/10/2000" nome="Beatles"/>
      <CardAlbum id="3" image={album_Selvagens} data="20/10/2020" nome="Paraíso Portátil"/>
      <CardAlbum id="4" image={album_xuxa} data="20/10/2010" nome="Só para baixinhos 3"/>
      </div>
     
      

      <GlobalStyle />
    </div>
  );
}
export default App;
