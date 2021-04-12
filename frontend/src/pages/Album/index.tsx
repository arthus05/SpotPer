
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
  const {namePlaylist, setNamePlaylist, currentPlaylist}: any = usePlaylist();


  return (
    <div className="App">
      <Header />
   

      <Container>
        <div className="box">
          <h1>Editar Playlist</h1>
        

          <div className="minhas__playlist-names">
                            <table>
                            <tr>
                                <th>NOME</th>
                                <th>TEMPO DE EXECUÇÃO</th>
                                <th>TIPO</th>
                                <th>NÚMERO</th>
                                
                                {/* <th style={{width: "120px"}}>TEMPO</th> */}
                              
                                
                            </tr>
                           
                        { currentPlaylist?.map((playlist: any) =>(
                                    <tr key={playlist.id}>
                                    <td>{playlist.description}</td>
                                  
                                    <td>{playlist.timeExecution}</td>
                                    <td>{playlist.typeRecording}</td>
                                    <td>{playlist.numberTrack}</td>
                                  
                                
                                    
                                    
                                    </tr>
                                ) )
                                }
                         </table>
                        </div>
        </div>
  
      
      </Container>

    </div>
  );
}
export default Album;
