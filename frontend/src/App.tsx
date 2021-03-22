import {GlobalStyle} from '../src/styles/global'
import {Header} from './components/Header'

function App(): JSX.Element {

 
  return (
    <div className="App">
      <Header/>
     
       <GlobalStyle/>
    </div>
  );
}

export default App;
