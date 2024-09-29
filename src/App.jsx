import './style.css';

//import imageUrl from "util/types"
import Blob from "./components/blob";
import Header from './components/header';
import Realization from './components/realization';
function App() {
 

  return (
    <div className='App'>
      
   
      <Header/>
      <main>

        <section className='aboutSection'>
          <h2>À propos</h2>
        </section>
      <Realization></Realization>
      </main>
  
      
      
    </div>
  )
}

export default App
