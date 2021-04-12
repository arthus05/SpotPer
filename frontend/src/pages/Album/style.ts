import styled from 'styled-components';


export const Container = styled.div`
.box {

  padding: 25px;
  display: flex;

  flex-direction: column;
 
  width: 100%;
  min-height: 500px;

}.minhas__playlist-names {
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

  `