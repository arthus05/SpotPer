import React from 'react';
import { useContext } from 'react';
import {  usePlaylist } from '../contexts/contextPlaylist';

import { ContainerAlbum } from './styles'

interface PropsCardAlbum {
    faixas: Array<{
        id: string;
        descricao: string;
        time: number;
        tipo_gravacao: string;
    }>;
    image: string;
    nome: string;
    data: string;
    id: string;
}

export function CardAlbum({ image,
    nome,
    data, id, faixas,
}: PropsCardAlbum) {

    const { setHandlePlaylist }: any = usePlaylist();
    return (


        <ContainerAlbum onClick={() => setHandlePlaylist(faixas)}>
            <img className="img_album" src={image} alt="album" />

            <div className="container__titles">
                <h1>{nome}</h1>
                <h2>{data}</h2>
            </div>


        </ContainerAlbum>
    )
}