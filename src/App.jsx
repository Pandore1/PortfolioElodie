import './style.css';

//import imageUrl from "util/types"
import Blob from "./components/blob";
import Header from './components/header';
import SkillCircle from './components/skillCircle';
import RealisationTemplate from './components/realisationTemplate';
function App() {
 

  return (
    <div className='App'>
      
   
      <Header/>
      <main>
      <SkillCircle></SkillCircle>
      <RealisationTemplate></RealisationTemplate>
      </main>
  
      
      
    </div>
  )
}

export default App
