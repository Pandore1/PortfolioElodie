import './style.css';

//import imageUrl from "util/types"
import Blob from "./components/blob";
import Header from './components/header';
import Realisation from './components/Realisation';
function App() {
 

  return (
    <div className='App'>
      
   
      <Header/>
      <main>
      <Realisation></Realisation>
      </main>
  
      
      
    </div>
  )
}

export default App
