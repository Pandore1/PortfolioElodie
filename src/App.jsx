import './App.css';
import './grille.css';
//import imageUrl from "util/types"
import Blob from "./components/Shapes/blob";
import Header from './components/Header/header';
import SkillCircle from './components/skillCircle/skillCircle';
function App() {
 

  return (
    <div className='App'>
      
   
      <Header/>
      <main>
      <SkillCircle></SkillCircle>

      </main>
  
      
      
    </div>
  )
}

export default App
