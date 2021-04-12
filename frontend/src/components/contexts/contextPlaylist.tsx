import React, { createContext, useState, useEffect, ReactNode, useContext  } from 'react';
import api from '../../services/api';

import moment from 'moment'

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
      timeExecution: number;
      numberExecutions: number;
        name: string;
        track: Array< {
          id: string;
          description: string;
          numberTrack: number;
          timeExecution: string;
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
      }>;
      namePlaylist: string;
      setNamePlaylist: Function;
    
   
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
    const[namePlaylist, setNamePlaylist] = useState("");
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

      }
      )
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });
     api.get("/playlist")
      .then((response) => {setAllPlaylistBack(response.data)
        
        console.log(response.data, "Aqui")
      }
      )
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });
    setCurrentPlaylist([])
    }, [])

    function handleAddNewPlaylist(name: string, faixas: any) {

      var timeOverall = 0;
      faixas.map((faixa: any) => timeOverall= timeOverall+  faixa.timeExecution)
        const newPlaylist = {
          timeExecution : timeOverall,
          numberExecutions: 2,
          dateCreation: moment(),
          dateLastExecution: moment(),
          name: name,
          track: faixas
          
      }
      setAllPlaylistBack((prev:any) => {
        return [...allPlaylistBack, newPlaylist]
      })

      api.post("/playlist",newPlaylist)
      .then((response) => {
        console.log(response.data)

      }
      )
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });

      setCurrentPlaylist([])
      

    }

    

    function handleCurrentPlaylist(faixa: any) {
        

      const newPlaylist = {
          id: faixa.id,
          description: faixa.description,
          timeExecution: faixa.timeExecution,
          numberTrack: faixa.numberTrack,
          typeRecording: faixa.typeRecording
      }

      var playlistAux = [...currentPlaylist, newPlaylist]
      var cont = 0;
      for (var i = 0; i < playlistAux.length ; i++) {
        if(playlistAux[i].description === newPlaylist.description){
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
        setFaixas,
        namePlaylist,
        setNamePlaylist
      
        
      }}
    >
      {children}


    </PlaylistContext.Provider>
  );
}
