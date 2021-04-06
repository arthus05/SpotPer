
import { Header } from "../../components/Header/index";

import { CardFaixa } from "../../components/CardFaixa";

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
  return (
    <div className="App">
      <Header />
      <CardFaixa faixas={faixaMocada}/>

     

    </div>
  );
}
export default Album;
