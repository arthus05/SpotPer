import React, { createContext, useState, useEffect, ReactNode, useContext  } from 'react';

interface PlaylistNewData {
  handlePlaylist:Array< {
    id: string;
    descricao: string;
    time: number;
    tipo_gravacao: string;
    }>;
    setHandlePlaylist: Function;
    handleCurrentPlaylist: Function;
    setCurrentPlaylist: Function;
  currentPlaylist: Array< {
      id: string;
      descricao: string;
      time: number;
      tipo_gravacao: string;
      }>;
  allPlaylistBack: {
        tempo_execucao: number;
       
        name: string;
        faixas: Array< {
          id: string;
          descricao: string;
          time: number;
          tipo_gravacao: string;
          }>;
        
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

    )

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
      
        
      }}
    >
      {children}


    </PlaylistContext.Provider>
  );
}
