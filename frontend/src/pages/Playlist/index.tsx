import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Container, Section, Carousel, Article, Aside} from "./styles";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";



// MOCADOS
import album_adele from '../../utils/imagens/album_Adele.jpg'
import album_Selvagens from '../../utils/imagens/album_selvagens.jpg'
import album_Beatles from '../../utils/imagens/album_beatles.jpg'
import album_xuxa from '../../utils/imagens/album_xuxa.jpg'
import { CardAlbum } from "../../components/CardAlbum";
import {  usePlaylist } from "../../components/contexts/contextPlaylist";
import { CardFaixa } from "../../components/CardFaixa";
import api from "../../services/api";


//mocado

const faixaMocada = [
    {
        id: "1",
        descricao: "Xuxa pula pula",
        time: 30,
        tipo_gravacao: "Xuxa Sorria!",
    },
    {
        id: "2",
        descricao: "Xuxa Sorria!",
        time: 30,
        tipo_gravacao: "NAO sei",
    },
    {
        id: "3",
        descricao: "TUDO SOBRE A FAIXA 3",
        time: 50,
        tipo_gravacao: "NAO sei",
    }
    ,
    {
        id: "4",
        descricao: "Vem brincar",
        time: 5,
        tipo_gravacao: "NAO a faixa",
    }
]
const faixaMocadaSelv = [
    {
        id: "1",
        descricao: "Mucambo cafundo",
        time: 3,
        tipo_gravacao: "Fortal",
    },
    {
        id: "2",
        descricao: "Sr. Coronel",
        time: 5,
        tipo_gravacao: "NAO sei",
    },
    {
        id: "3",
        descricao: "Paraiso portatil",
        time: 50,
        tipo_gravacao: "NAO sei",
    }
    ,
    {
        id: "4",
        descricao: "Paraiso portatil",
        time: 50,
        tipo_gravacao: "NAO sei",
    }, 
    {
        id: "5",
        descricao: "Mucambo cafundo",
        time: 3,
        tipo_gravacao: "Fortal",
    },
    {
        id: "2",
        descricao: "Sr. Coronel",
        time: 5,
        tipo_gravacao: "NAO sei",
    }
  
]
const faixaMocadaBe = [
    {
        id: "1",
        descricao: "AAAAAAAAAA",
        time: 3,
        tipo_gravacao: "fscdyr",
    },
    {
        id: "2",
        descricao: "bbbbbb bbb",
        time: 5,
        tipo_gravacao: "NAO sei",
    },
    {
        id: "3",
        descricao: "cccccccccc",
        time: 50,
        tipo_gravacao: "NAO sei",
    }
    ,
    {
        id: "4",
        descricao: "ddddddddddd d",
        time: 50,
        tipo_gravacao: "NAO gsdecye gedch",
    }, 
    {
        id: "5",
        descricao: "fffff ff f ff",
        time: 3,
        tipo_gravacao: "Fortal",
    },
    {
        id: "6",
        descricao: "kkkk klcsgks ",
        time: 5,
        tipo_gravacao: "NAO sei",
    }, 
    {
        id: "7",
        descricao: "fffff ff f ff",
        time: 3,
        tipo_gravacao: "Fortal",
    },
    {
        id: "8",
        descricao: "kkkk klcsgks ",
        time: 5,
        tipo_gravacao: "NAO sei",
    }
  
]

export function Playlist() {
   
    const { setCurrentPlaylist, handlePlaylist,setFaixas,faixas, currentPlaylist, handleAddNewPlaylist, allPlaylistBack, albunsBack }: any = usePlaylist();

    const[isNewPlaylist, setIsNewPlaylist] = useState(false);
    const[namePlaylist, setNamePlaylist] = useState("");
    // let test  = document.getElementById("scroll__carousel") || null;
    let element_scroll : any = (document.getElementById("scroll__carousel") || HTMLInputElement);
    function handleScrollBack() {
        console.log(element_scroll)
        if(element_scroll) {
            var maxScrollLeft = element_scroll.scrollWidth - element_scroll.clientWidth;
            element_scroll.scrollLeft -= maxScrollLeft;
        }

    }
    function handleScrollForward() {
        console.log(element_scroll)
        if(element_scroll) {
            var maxScrollLeft = element_scroll.scrollWidth - element_scroll.clientWidth;
            element_scroll.scrollLeft += maxScrollLeft;
        }

    }

    function handleNewPlaylist() {
        setIsNewPlaylist(!isNewPlaylist)
    }

    function handleNamePlaylist(event: any) {
        let element = event.target || HTMLElement;
        setNamePlaylist(element.value)
    }
    
    function handleDeleteFaixa(faixa: any) {
        for(var i = 0; i< currentPlaylist.length; i++) {
          if(currentPlaylist[i].descricao === faixa) {
            currentPlaylist.splice(i,1);
          }
        }
        console.log(currentPlaylist)
  
      }

      useEffect(()=>{
      
        api.get("/track")
         .then((response) => {
           setFaixas(response.data)
           //para cada faixa, veja todos os albuns 
           var newFaixa:any = [];
   
           response.data.map((faixa: any) => {
             for (var i = 0; i < albunsBack.length ; i++) {
               if(albunsBack[i].id === faixa.albumId){
                 newFaixa.push(faixa)
               }
            }
   
   
           })
           setFaixas(newFaixa)
           
         
          
         }
         )
         .catch((err) => {
           console.error("ops! ocorreu um erro" + err);
        });
        console.log("TESTEEEE: ", faixas )
       }, [albunsBack])
    
    return (
        <Container>
            <Header/>
            <Section>
                <Article>

                
                    <Carousel>
                        <div className="carousel__top">
                        <h1>Seus Álbums</h1>
                            <div className="icons__scroll">
                                <button onClick={()=> handleScrollBack()}>
                                <IoIosArrowBack/>
                                    
                                </button>
                                <button onClick={()=> handleScrollForward()}>
                                <IoIosArrowForward/>
                                </button>
                                </div>
                        </div>
            
                        <div id="scroll__carousel" >
                        {/* <CardAlbum faixas={faixaMocada} id="1" image={album_adele} data="20/10/2020" nome="Nova Adele"/>
                        <CardAlbum faixas={faixaMocadaBe} id="2" image={album_Beatles} data="20/10/2000" nome="Beatles"/>
                        <CardAlbum faixas={faixaMocadaSelv} id="3" image={album_Selvagens} data="20/10/2020" nome="Paraíso Portátil"/>
                        <CardAlbum faixas={faixaMocada} id="4" image={album_xuxa} data="20/10/2010" nome="Só para baixinhos 3"/>
                        <CardAlbum faixas={faixaMocada} id="1" image={album_adele} data="20/10/2020" nome="Nova Adele"/>
                        <CardAlbum faixas={faixaMocadaBe} id="2" image={album_Beatles} data="20/10/2000" nome="Beatles"/>
                        <CardAlbum faixas={faixaMocadaSelv} id="3" image={album_Selvagens} data="20/10/2020" nome="Paraíso Portátil"/>
                        <CardAlbum faixas={faixaMocada} id="4" image={album_xuxa} data="20/10/2010" nome="Só para baixinhos 3"/>
                        <CardAlbum faixas={faixaMocada} id="1" image={album_adele} data="20/10/2020" nome="Nova Adele"/>
                        <CardAlbum faixas={faixaMocadaBe} id="2" image={album_Beatles} data="20/10/2000" nome="Beatles"/>
                        <CardAlbum faixas={faixaMocadaSelv} id="3" image={album_Selvagens} data="20/10/2020" nome="Paraíso Portátil"/>
                        <CardAlbum faixas={faixaMocada} id="4" image={album_xuxa} data="20/10/2010" nome="Só para baixinhos 3"/>
                        <CardAlbum faixas={faixaMocada} id="1" image={album_adele} data="20/10/2020" nome="Nova Adele"/>
                        <CardAlbum faixas={faixaMocadaBe} id="2" image={album_Beatles} data="20/10/2000" nome="Beatles"/>
                        <CardAlbum faixas={faixaMocadaSelv} id="3" image={album_Selvagens} data="20/10/2020" nome="Paraíso Portátil"/>
                        <CardAlbum faixas={faixaMocada} id="4" image={album_xuxa} data="20/10/2010" nome="Só para baixinhos 3"/> */}

                        { albunsBack?.map((album: any) =>(
                                <>
                                    <CardAlbum faixas={faixas} id={album.id} image={album_xuxa} data={album.date_purchase} nome={album.description}/>

                                </>
                                ) )
                                }
                        
                        
                        </div>

                    </Carousel>

                    <div className="container__faixas">
                        {
                            handlePlaylist.length > 0 && <CardFaixa faixas={handlePlaylist}/>
                        }
                    </div>
                </Article>
                <Aside>
                    <section className="container__top">
                        <div className="header__aside">
                            <button className="button_header" onClick={()=> handleNewPlaylist()}>
                                <p className="new_playlist">+</p>
                            </button>
                            <h1>Criar playlist</h1>

                        </div>
                        <div className="container__playlist">
                         
                            {
                                isNewPlaylist && (
                                    <>
                                    <div className="new__playlist">
                                        <label> Nome</label>
                                        <input onChange={(event)=> handleNamePlaylist(event)} value={namePlaylist} type="text"/>
                                    </div>
                                    <div className="new__playlist-names">
                                    { currentPlaylist?.map((faixa: any) =>(
                                    <tr key={faixa.id}>
                                    <td>{faixa.descricao}</td>
                                    <td>{faixa.tipo_gravacao}</td>
                                    <td>{faixa.time}</td>
                                    <button className="button_remover" onClick={() => 
                                        handleDeleteFaixa(faixa.descricao)
                                    }>Remover</button>
                                    
                                    </tr>
                                ) )
                                }
                                </div>
                               
                                <div className="button__concluir">
                                        <button  onClick={() => {
                                            handleAddNewPlaylist(namePlaylist, currentPlaylist);
                                            setNamePlaylist("");
                                            setIsNewPlaylist(false)
                                        }
                                            
                                            }>Concluir</button>
                            </div>
                                </>

                                )
                            }
                            
                            
                            

                        </div>
                    </section>
                    <section className="container__low">
                        <div className="header__aside">
                            
                            <h1>Minhas playlists</h1>

                        </div>
                       
                        <div className="container__playlist">
                        <div className="minhas__playlist-names">
                            <table>
                            <tr>
                                <th>NOME</th>
                                <th>FAIXAS</th>
                                
                                <th style={{width: "120px"}}>TEMPO</th>
                              
                                
                            </tr>
                           
                        { allPlaylistBack?.map((playlist: any) =>(
                                    <tr key={playlist.id}>
                                    <td>{playlist.name}</td>
                                    <td>{playlist.faixas.length}</td>
                                    <td>{playlist.tempo_execucao}</td>
                                    <button className="button_remover" onClick={() => 
                                     {   setCurrentPlaylist(playlist.faixas);
                                        setNamePlaylist(playlist.name);
                                        setIsNewPlaylist(true);
                                    }
                                    }>Editar</button>
                                   
                                    
                                    
                                    </tr>
                                ) )
                                }
                         </table>
                        </div>
                        </div>
                    </section>
                    

                </Aside>
            
            </Section>
           
          
           
        </Container>
    )
}