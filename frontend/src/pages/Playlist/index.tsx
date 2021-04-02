import React from "react";
import { Header } from "../../components/Header";
import { Container, Section, Carousel} from "./styles";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


// MOCADOS
import album_adele from '../../utils/imagens/album_Adele.jpg'
import album_Selvagens from '../../utils/imagens/album_selvagens.jpg'
import album_Beatles from '../../utils/imagens/album_beatles.jpg'
import album_xuxa from '../../utils/imagens/album_xuxa.jpg'
import { CardAlbum } from "../../components/CardAlbum";

export function Playlist() {
    // let test  = document.getElementById("scroll__carousel") || null;
    let element_scroll : any = (document.getElementById("scroll__carousel") || HTMLInputElement);
    function handleScrollBack() {
        console.log(element_scroll)
        if(element_scroll) {
            element_scroll.scrollLeft -= 200;
        }

    }
    function handleScrollForward() {
        console.log(element_scroll)
        if(element_scroll) {
            element_scroll.scrollLeft += 200;
        }

    }

    return (
        <Container>
            <Header/>
            <Section>
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
                    <CardAlbum id="1" image={album_adele} data="20/10/2020" nome="Nova Adele"/>
                    <CardAlbum id="2" image={album_Beatles} data="20/10/2000" nome="Beatles"/>
                    <CardAlbum id="3" image={album_Selvagens} data="20/10/2020" nome="Paraíso Portátil"/>
                    <CardAlbum id="4" image={album_xuxa} data="20/10/2010" nome="Só para baixinhos 3"/>
                    <CardAlbum id="1" image={album_adele} data="20/10/2020" nome="Nova Adele"/>
                    <CardAlbum id="2" image={album_Beatles} data="20/10/2000" nome="Beatles"/>
                    <CardAlbum id="3" image={album_Selvagens} data="20/10/2020" nome="Paraíso Portátil"/>
                    <CardAlbum id="3" image={album_Selvagens} data="20/10/2020" nome="Paraíso Portátil"/>
                    <CardAlbum id="4" image={album_xuxa} data="20/10/2010" nome="Só para baixinhos 3"/>
                    <CardAlbum id="1" image={album_adele} data="20/10/2020" nome="Nova Adele"/>
                    <CardAlbum id="2" image={album_Beatles} data="20/10/2000" nome="Beatles"/>
                    <CardAlbum id="3" image={album_Selvagens} data="20/10/2020" nome="Paraíso Portátil"/>
                    <CardAlbum id="2" image={album_Beatles} data="20/10/2000" nome="Beatles"/>
                    <CardAlbum id="3" image={album_Selvagens} data="20/10/2020" nome="Paraíso Portátil"/>
                    <CardAlbum id="3" image={album_Selvagens} data="20/10/2020" nome="Paraíso Portátil"/>
                    <CardAlbum id="4" image={album_xuxa} data="20/10/2010" nome="Só para baixinhos 3"/>
                    <CardAlbum id="1" image={album_adele} data="20/10/2020" nome="Nova Adele"/>
                    <CardAlbum id="2" image={album_Beatles} data="20/10/2000" nome="Beatles"/>
                    <CardAlbum id="3" image={album_Selvagens} data="20/10/2020" nome="Paraíso Portátil"/>
                    <CardAlbum id="3" image={album_Selvagens} data="20/10/2020" nome="Paraíso Portátil"/>
                    <CardAlbum id="3" image={album_Selvagens} data="20/10/2020" nome="Paraíso Portátil"/>
                    <CardAlbum id="4" image={album_xuxa} data="20/10/2010" nome="Só para baixinhos 3"/>
                    <CardAlbum id="1" image={album_adele} data="20/10/2020" nome="Nova Adele"/>
                    <CardAlbum id="2" image={album_Beatles} data="20/10/2000" nome="Beatles"/>
                    <CardAlbum id="3" image={album_Selvagens} data="20/10/2020" nome="Paraíso Portátil"/>
          
                    </div>

                </Carousel>
            
            </Section>
           
          
           
        </Container>
    )
}