import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Container, Section, Carousel, Article, Aside} from "./styles";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";



// MOCADOS
import album_adele from '../../utils/imagens/album_Adele.jpg'
import album_Selvagens from '../../utils/imagens/album_selvagens.jpg'
import semImg from '../../utils/imagens/semImg.jpg'
import album_xuxa from '../../utils/imagens/album_xuxa.jpg'
import { CardAlbum } from "../../components/CardAlbum";
import {  usePlaylist } from "../../components/contexts/contextPlaylist";
import { CardFaixa } from "../../components/CardFaixa";
import api from "../../services/api";
import { Link } from "react-router-dom";


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
   
    const {namePlaylist, setNamePlaylist, setCurrentPlaylist, handlePlaylist,setFaixas,faixas, currentPlaylist, handleAddNewPlaylist, allPlaylistBack, albunsBack }: any = usePlaylist();

    const[isNewPlaylist, setIsNewPlaylist] = useState(false);
    
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
    function handleCriarPlaylist(faixa: any) {
       
  
      }

    
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

                        { albunsBack?.map((album: any) =>(
                                <>
                                    <CardAlbum faixas={album.track} id={album.id} image={semImg} data={album.date_purchase} nome={album.description}/>

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
                                    <td>{faixa.description}</td>
                                    <td>{faixa.numberTrack}</td>
                                    <td>{faixa.timeExecution}</td>
                                    <button className="button_remover" onClick={() => 
                                        handleDeleteFaixa(faixa.description)
                                    }>Remover</button>
                                    
                                    </tr>
                                ) )
                                }
                                </div>
                               
                                <div className="button__concluir">
                                        <button  onClick={() => {
                                            handleAddNewPlaylist(namePlaylist, currentPlaylist);
                                            setNamePlaylist(namePlaylist);
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
                                    <td>{playlist.track.length}</td>
                                    <td>{playlist.timeExecution}</td>
                                    <Link to="/albums" >
                                    <button className="button_remover" onClick={() => 
                                     {   setCurrentPlaylist(playlist.track);
                                        setNamePlaylist(playlist.name);
                                       
                                    }
                                    }>Editar</button></Link>
                                   
                                    
                                    
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