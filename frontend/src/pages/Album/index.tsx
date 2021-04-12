
import { Header } from "../../components/Header/index";

import { CardFaixa } from "../../components/CardFaixa";

import Adele from '../../utils/imagens/album_Adele.jpg'

import { Container} from "./style";
import { usePlaylist } from "../../components/contexts/contextPlaylist";
//mocado

const faixaMocada = [
    {
        id: "1",
        descricao: "TUDO SOBRE A FAIXA 1",
        time: 30,
        tipo_gravacao: "NAO SEI O TIPO",
    },
    {
        id: "2",
        descricao: "TUDO SOBRE A FAIXA 2",
        time: 30,
        tipo_gravacao: "NAO sei",
    },
    {
        id: "3",
        descricao: "TUDO SOBRE A FAIXA 3",
        time: 30,
        tipo_gravacao: "NAO sei",
    }
]

function Album() {
  const { recordCompany }: any = usePlaylist();

  return (
    <div className="App">
      <Header />
  

      <Container>
        <div className="box">
          <img src={Adele} alt=""/>
          <div></div>

          <button>Título</button>

        </div>
  
      
      </Container>

    </div>
  );
}
export default Album;
