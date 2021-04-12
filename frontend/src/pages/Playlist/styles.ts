import styled from 'styled-components';


export const Container = styled.header`
    display: flex;
    flex-direction: column;
    

    p{
        color: var(--text);
    }
    
    



`
export const Section = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    padding: 0 30px;
    margin: 0 0 25px 0;
    /* background: pink; */
    @media only screen and (max-width: 805px) {
        flex-direction: column;
    }

`


export const Article = styled.article`
    width: 70%;
    height: auto;
    padding: 0 30px;
    @media only screen and (max-width: 805px) {
        width: 100%;
        padding: 0px;
    }

    .container__faixas {
        max-height: 500px;
        overflow: auto;
        padding: 0px 30px;
        margin: 0 0 25px 0;
    }
    .container__faixas::-webkit-scrollbar {
            width: 1px;
            height: 1px;
            background-color: none; /* or add it to the track */
        }
    .container__faixas::-webkit-scrollbar-thumb {
            width: 1px;
            height: 1px;
            background: none; 
        }
  

`
export const Aside = styled.aside`
    width: 30%;
    /* background: pink; */
    @media only screen and (max-width: 805px) {
        width: 98%;
        padding: 0px;
    }

    .container__top, .container__low {
        padding: 10px;
        width: 100%;
        height: 50%;
        /* background: blue; */
        @media only screen and (max-width: 805px) {
            height: auto;
    }
       
    }
    .container__playlist {
       
        width: 100%;
        height: 85%;

    }
    .button__concluir {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin: 10px 0 0 0 ;
        
        button {
            border: none;
            border-radius: 25px;
            padding: 10px 15px;
            background: none;
            color: var(--text);
            border: 1px var(--colorSecondary) solid;
            border-bottom: solid var(--colorPrimary) 1px;
            
        }


    }
    .new__playlist {
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        border: 1px solid  rgba(114,119,127, 0.7);
       
        width: 100%;
            height: 50px;
       
            margin: 10px 0 0 0;
        position: relative;
        border-radius: 7px;
        

        label {
            font-size: 0.9rem;
            font-weight: 500;
            position: absolute;
            color: var(--text);
            background: var(--background);
            border: none;
            top: -10px;
            left: 15px;
           
        }

        input {
            width: 90%;
            height: 35px;
            border-radius: 6px;
            border: none;
            background: var(--background);
            margin: 0 0 0 5px;
            color: var(--text);
            padding: 0 10px;
            font-size: 1rem;
            outline: none;
        }
    }
    .new__playlist-names {
        width: 100%;
        overflow: auto;
        height: 80%;
      
        padding: 10px 0;

        

        tr {
            color: var(--text);
            td {
                padding: 10px 20px;
                border-bottom: solid var(--colorPrimary) 1px;
                
                
            }

            
            
        }
    }
    .new__playlist-names::-webkit-scrollbar, .minhas__playlist-names::-webkit-scrollbar {
            width: 1px;
            height: 1px;
            background-color: none; /* or add it to the track */
        }
    .new__playlist-names::-webkit-scrollbar-thumb, .minhas__playlist-names::-webkit-scrollbar-thumb {
            width: 1px;
            height: 1px;
            background: #f1f1f1; 
        }
    .button_remover {
                height: 100%;
                border: none;

                padding: 5px 10px;
                margin: 0 0px 0 10px;
                color: var(--text);
                background-color: #222326;
                border-radius: 25px;
                
                cursor: pointer;
            }

    .minhas__playlist-names {
        width: 100%;
        overflow: auto;
        height: 80%;
      
        padding: 10px 0;

        a {
            border: none;
            outline: none;
            text-decoration: none;
            
        }
        
   tr {
       height: 45px;
       color: #EEEFF0;
        :first-child {
        background-color: #222326;
        
    }

    th {
    padding: 12px 15px; 
    width: 250px;
   
    
    text-align: left;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 0.9rem;

    @media only screen and (max-width: 370px) {
      padding: 6px 12px;
      font-size: 14px;
    }

    @media only screen and (max-width: 310px) {
      font-size: 13.5px;
    }
  }

  td {
    max-width: 250px;
    padding: 12px 15px;
  
    
    font-family: 'Poppins', sans-serif;

  }
   }
        
    }

    .header__aside {
        display: flex;
        align-items:center;
        justify-content: center;
        height: 50px;
       

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: #39383F;
            border: none;
            

            p {
                
                margin: 0;
                padding: 0;
                font-size: 1.4rem;
            }
        }
        h1 {
            margin: 0 0 0 10px;
            font-size: 1rem;
            font-weight: 500;

        }
    }

`
export const Carousel = styled.div`
    width: 100%;
    height: auto;
    padding: 10px 30px;
    /* background: red; */
    
     #scroll__carousel {
        scroll-behavior: smooth;
        display: flex;
        justify-content: space-between;

        padding: 5px 0 5px 0;
         
        width: auto;
        overflow-x: auto;

     }
     .carousel__top {
         display: flex;
         width: 100%;
         
         justify-content: space-between;

         .icons__scroll {
             display: flex;
         }

         button {
             display: flex;
             flex-direction: row;
             justify-content: center;
             align-items: center;
             background: none;
             color: #f1f1f1;
             height: 27px;
             width: 27px;
             outline: none;
             border: solid 1px var(--text);
             margin: 0 0 0 7px;
             border-radius: 50%;
         }
     }
    
        >div::-webkit-scrollbar {
            cursor: pointer;
            width: 2px;
            height: 2px;
            background-color: none; /* or add it to the track */
        }
        >div::-webkit-scrollbar:hover {
            width: 4px;
            height: 4px;
            background-color: none; /* or add it to the track */
        }
        >div::-webkit-scrollbar-thumb {
            width: 4px;
            height: 4px;
            background: #f1f1f1; 
        }
    h1 {
        font-size: 1.1rem;
        padding: 0 10px;
        margin: 0 0 5px 0;
    }

`