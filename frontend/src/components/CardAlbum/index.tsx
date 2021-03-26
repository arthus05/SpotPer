import React from 'react';

import {ContainerAlbum} from './styles'

interface PropsCardAlbum{
    image: string;
    nome: string;
    data: string;
    id: string;
}

export function CardAlbum({ image,
    nome,
    data, id
   }: PropsCardAlbum) {
    return (
        <ContainerAlbum onClick={()=> console.log(id)}>
            <img className="img_album" src={image} alt="album"/>

            <div className="container__titles">
                <h1>{nome}</h1>
                <h2>{data}</h2>
            </div>
          
           
        </ContainerAlbum>
    )
}