import {ContainerHeader} from './styles'

import { BiSearchAlt } from 'react-icons/bi';
import logo from '../../utils/imagens/logo.png';

export function Header() {
  return (
     <ContainerHeader>
       <section className="container__logo">
          {/* <img src={logo} alt=""/> */}

       </section>

       <section className="container__central">
         <ul>
           <li>
             <button>HOME</button>
           </li>
           <li>
             <button>PLAYLISTS</button>
           </li>
           <li>
             <button>ALBUMS</button>
           </li>
           <li>
             <button>ARTISTAS</button>
           </li>
           <li>
             <button>GRAVADORAS</button>
           </li>
        
         </ul>

       </section>


       <div id="divBusca">
        <input type="text" id="txtBusca" />
        <BiSearchAlt/>
      </div>

     </ContainerHeader>
  )

}