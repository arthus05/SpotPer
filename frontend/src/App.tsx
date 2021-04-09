import { GlobalStyle } from "../src/styles/global";

import {PlaylistsProvider} from '../src/components/contexts/contextPlaylist'


// MOCADOS
import {Routes} from './routes'

function App() {
  return (
    <>
   <PlaylistsProvider>
    <Routes/>
      <GlobalStyle/>
   </PlaylistsProvider>
    
  

    </>
  );
}

export default App;