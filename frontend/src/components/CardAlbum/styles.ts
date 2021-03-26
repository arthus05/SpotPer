import styled from 'styled-components';


export const ContainerAlbum = styled.button`
   display: flex;
   flex-direction: column;
   align-items: center;
   border: none;
   outline: none;

   background: #191A1A;
   padding: 10px;
   border-radius: 6px;
   
   height: 250px;
   width:180px;
   margin: 0 5px;
   .img_album {
       width: 100%;
   }
   h1 {
       font-size: 1rem;
       text-align: left;
   
   }
   h2 {
       font-size: 0.9rem;
       color: var(--textSecun);
       font-weight: 500;
       text-align: left;
   }

   .container__titles {
       width: 100%;
       padding: 10px 0 0 0;
       /* background: blue; */
   }
   
   &:hover {
        cursor: pointer;
        background: #2A2B2B;
        -webkit-transform: scale(0.5);
        -ms-transform: scale(0.9);
        transform: scale(1.02);
        -o-transition: 0.5s ease-in;
transition: 0.5s ease-in;
   }

   
`;
