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
        id: string;
        descricao: string;
        date_purchase: Date;
        type_purchase: string;
        date_recording: Date;
        cost_purchase: number;
        faixas: Array<{}>
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
    const[albunsBack, setAlbunsBack] = useState<any>([])
    const[recordCompany, setRecordCompany] = useState<any>([])

    //Buscando na API 

    useEffect(()=>{
      api.get("/recordCompany")
      .then((response) => setRecordCompany(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });
    }, [])

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
        recordCompany
      
        
      }}
    >
      {children}


    </PlaylistContext.Provider>
  );
}
