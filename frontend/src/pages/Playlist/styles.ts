import styled from 'styled-components';


export const Container = styled.header`
    display: flex;
    flex-direction: column;
    

    p{
        color: var(--text);
    }



`

export const Section = styled.header`
    width: 100%;
    height: 100vh;
    padding: 0 30px;
    /* background: pink; */

`
export const Carousel = styled.div`
    width: 100%;
    height: auto;
    padding: 10px 30px;
    /* background: red; */
    
     #scroll__carousel {
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
             height: 25px;
             width: 25px;

             border: solid 1px var(--text);
             margin: 0 2px;
             border-radius: 50%;
         }
     }
     >div::-webkit-scrollbar {
        width: 1px;
        height: 2px;
        }

        /* Track */
        >div::-webkit-scrollbar-track {
        background: #f1f1f1;
        }
    h1 {
        font-size: 1.1rem;
        padding: 0 10px;
        margin: 0 0 5px 0;
    }

`