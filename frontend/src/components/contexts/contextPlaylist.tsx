import React, { createContext, useState, useEffect, ReactNode, useContext  } from 'react';
import api from '../../services/api';

interface PlaylistNewData {
  handlePlaylist:Array< {
    id: number;
    descricao: string;
    time: number;
    tipo_gravacao: string;
    }>;
    setHandlePlaylist: Function;
    handleCurrentPlaylist: Function;
    setCurrentPlaylist: Function;
  currentPlaylist: Array< {
      id: number;
      descricao: string;
      time: number;
      tipo_gravacao: string;
      }>;
    albunsBack: Array< {
        
        }>;
  allPlaylistBack: {
        tempo_execucao: number;
       
        name: string;
        faixas: Array< {
          id: number;
          descricao: string;
          time: number;
          tipo_gravacao: string;
          }>;
        
      };
      recordCompany: {
        id: number;
        name: string;
        phone: number;
        address: string;
        address_number:number,
        homepage:string
        
      };
      handleAddNewPlaylist: Function;
      setFaixas: Function;
      faixas: Array<{
        id: number;
        time_execution: number;
        type_recording: string;
        number_track: number;
        description: string;
        albumId: number;
        typeCompositionId: number;
      }>
    
   
  }
  interface PlaylistProviderProps {
    children: ReactNode;
  }

// export const PlaylistContext = createContext<PlaylistNewData | null>(null);
const PlaylistContext = createContext<PlaylistNewData | undefined>(
    undefined
  );
export const usePlaylist = () => useContext(PlaylistContext);

export function PlaylistsProvider({children, ...rest}: PlaylistProviderProps) {
    const[handlePlaylist, setHandlePlaylist] = useState([]);
    const[currentPlaylist, setCurrentPlaylist] = useState<any>([]);
    const[allPlaylistBack, setAllPlaylistBack]  = useState<any>([]

    );

    const[faixas, setFaixas] = useState<any>([{
        id: 1,
        time_execution: 30,
        type_recording: "nao sei 2",
        number_track: 12,
        description: "teste",
        albumId: 2,
        typeCompositionId: 1,
     },
     {
      id: 2,
      time_execution: 30,
      type_recording: "nao  2",
      number_track: 12,
      description: "teste",
      albumId: 2,
      typeCompositionId: 1,
   },

    ])
    const[albunsBack, setAlbunsBack] = useState<any>([
      {
        id: 2,
        description: "Xuxa so para baixinhos 5",
        date_purchase: '2001/01/01'
      }
    ])
    const[recordCompany, setRecordCompany] = useState<any>([])

    //Buscando na API 

    useEffect(()=>{
      api.get("/recordCompany")
      .then((response) => {setRecordCompany(response.data)
        console.log(response.data)
      }
      )
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });
     api.get("/album")
      .then((response) => {setAlbunsBack(response.data)
        console.log(response.data)
      }
      )
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });
    }, [])
    // useEffect(()=>{
      
    //  api.get("/track")
    //   .then((response) => {
    //     setFaixas(response.data)
    //     //para cada faixa, veja todos os albuns 
    //     var newFaixa:any = [];

    //     response.data.map((faixa: any) => {
    //       for (var i = 0; i < albunsBack.length ; i++) {
    //         if(albunsBack[i].id === faixa.albumId){
              
    //         }
    //      }


    //     })
        
      
       
    //   }
    //   )
    //   .catch((err) => {
    //     console.error("ops! ocorreu um erro" + err);
    //  });
    //  console.log("TESTEEEE: ", faixas)
    // }, [albunsBack])

    function handleAddNewPlaylist(name: string, faixas: any) {

      var timeOverall = 0;
      faixas.map((faixa: any) => timeOverall= timeOverall+  faixa.time)
        const newPlaylist = {
          tempo_execucao : timeOverall,
          name: name,
          faixas: faixas
          
      }
      setAllPlaylistBack((prev:any) => {
        return [...allPlaylistBack, newPlaylist]
      })

      setCurrentPlaylist([])
      

    }

    

    function handleCurrentPlaylist(faixa: any) {
        

      const newPlaylist = {
          id: faixa.id,
          descricao: faixa.descricao,
          time: faixa.time,
          tipo_gravacao: faixa.tipo_gravacao
      }

      var playlistAux = [...currentPlaylist, newPlaylist]
      var cont = 0;
      for (var i = 0; i < playlistAux.length ; i++) {
        if(playlistAux[i].descricao === newPlaylist.descricao){
          cont++;
        }
     }
     if(cont<2) {
       setCurrentPlaylist(playlistAux)
     }

    
     
     console.log("currentPlaylist", currentPlaylist)

    }



  return (
    <PlaylistContext.Provider
      value={{
        handlePlaylist,
        setHandlePlaylist,
        currentPlaylist,
        handleCurrentPlaylist,
        setCurrentPlaylist,
        handleAddNewPlaylist,
        allPlaylistBack,
        albunsBack,
        recordCompany,
        faixas,
        setFaixas
      
        
      }}
    >
      {children}


    </PlaylistContext.Provider>
  );
}
