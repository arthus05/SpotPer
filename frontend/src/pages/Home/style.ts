import styled from 'styled-components';


export const Container = styled.div`
background: rgb(18,19,20);
background: linear-gradient(112deg, rgba(18,19,20,1) 0%, rgba(73,2,113,1) 62%, rgba(96,7,133,1) 100%, rgba(96,7,133,1) 100%);
display: flex;
    flex-direction: row;
    width: 100%;
    padding: 30px 50px;
    height: 100vh;

    p {
        font-size: 3.5rem;
        margin: 10px 0;
    }
    p{
        color: #fff;
 
        font-size: 3.5rem;
  margin: 10px 0 0 0px;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  animation: type 5s steps(60, end); 
}

p:nth-child(2){
  animation: type2 8s steps(60, end);
}

p a{
 
  text-decoration: none;
}

span{
  animation: blink 1s infinite;
}

@keyframes type{ 
  from { width: 0; } 
} 

@keyframes type2{
  0%{width: 0;}
  50%{width: 0;}
  100%{ width: 100; } 
} 

@keyframes blink{
  to{opacity: .0;}
}
    h2 {
        font-size: 2.4rem;
        margin: 5px 0 0 0;
    }

    p, h2 {
        font-family: 'Fira Sans Condensed', sans-serif;
    }
    .container__left {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 25px 0 0 50px;
        width: 50%;
    }
    .container__right {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        padding: 25px 0 0 100px;
     
        img {
            height: 400px;
            width: auto;
        }
    }

`