
import { Header } from "../../components/Header/index";
import { CardAlbum } from "../../components/CardAlbum/index";

import Music from '../../utils/imagens/home_1.png'
import { Container} from "./style";


function Home() {
  return (
    <div className="App">
      <Header />

      <Container>
        <div className="container__left">
          
          <p>Bem-vindo ao SpotPer   
  
<span>|</span></p> 
          <h2>
            Encontre aqui suas músicas,
          </h2>
          <h2>
            compositores,
          </h2>
          <h2>
          playlists,
          </h2>
          <h2>
            álbuns,
          </h2>
          <h2>
            e muito mais!
          </h2>
            
          </div>
          <div className="container__right">
            <img src={Music} alt=""/>

          </div>
      </Container>

     

    </div>
  );
}
export default Home;
