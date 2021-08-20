import styled from 'styled-components';


export const ContainerFaixa = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   border: none;
   outline: none;

   background: #191A1A;
   padding: 10px;
   border-radius: 6px;
   
  
   height: auto;
   width:100%;

   margin: 0 5px;

   @media only screen and (max-width: 805px) {
    background: none;
    }

   h1 {
       font-size: 0.9rem;
       text-align: left;
   
   }
   h2 {
       font-size: 0.8rem;
       color: var(--textSecun);
       font-weight: 500;
       text-align: left;
   }

   table {
    border-collapse: collapse;

        hr {
        border: 4px solid transparent;
        }
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
   .button_adicionar {
       border: none;
       padding: 10px 15px;
       color: var(--text);
       background-color: #222326;
       border-radius: 25px;
   }


   
`;
