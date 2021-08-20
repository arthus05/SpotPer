import React from 'react';
import { usePlaylist } from '../contexts/contextPlaylist';

import {ContainerFaixa} from './style'

interface PropsCardFaixa{
    faixas: Array<{
        id: string;
    descricao: string;
    time: number;
    tipo_gravacao: string;
    }>
    
}

export function CardFaixa({faixas}: PropsCardFaixa) {

  const { handleCurrentPlaylist }: any = usePlaylist();
  
    return (
        <ContainerFaixa onClick={()=> console.log("nada")}>
          <table>
            <tr>
              <th>DESCRIÇÃO</th>
              <th>TIPO DE GRAVAÇÃO</th>
              
              <th style={{width: "120px"}}>TEMPO</th>
              <th>ADICIONAR NA PLAYLIST</th>
              
            </tr>
            <hr/>
            { faixas.map((faixa) =>(
                 <tr key={faixa.id}>
                 <td>{faixa.descricao}</td>
                 <td>{faixa.tipo_gravacao}</td>
                 <td>{faixa.time}</td>
                 <td >
			        <button className="button_adicionar" onClick={() => 
                handleCurrentPlaylist(faixa)
                }>Adicionar</button>
				</td>
                 </tr>
               ) )
              }
          </table>

        </ContainerFaixa>
    )
}