import styled from 'styled-components';


export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 1.5rem;
  
  background: var(--background);
  border-bottom: 1px solid var(--backgroundSecondary);
 
  width: 100%;
  height: 50px;

   img {
     height: 50px;
     padding: 7px 0;
   }
   h1 {
    font-family: 'Roboto';
    font-size: 1.3rem;
    font-weight: 600;
   }

   #divBusca{
     display: flex;
     flex-direction: row-reverse;
     justify-content: space-between;
     align-items: center;
   
    background-color: #B591D1;
    filter: brightness(0.8);
    border:solid 1px;
    border-radius: 9px;
    padding: 0 7px;
   
    
    width: 241px;
    height: 30px;
  }

  #txtBusca{
    width: 90%;
    outline: none;
    font-family: 'Ubuntu', sans-serif;
    float:left;
    background-color:transparent;
    
    padding: 0 0 0 7px;
    font-style:italic;
    font-size:18px;
    border:none;
  
  }

  .container__central {
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style:none;
      height: 50px;
      border-bottom: 2px solid var(--colorPrimary);

      li:last-child {
        margin: 0;
      }
      li {

        margin: 0 2rem 0 0;

        button {
          background: none;
          color: var(--text);
          font-weight: 500;
          margin: 0;
          border: none;
        }
      
      }
    }
  }
   
`;
