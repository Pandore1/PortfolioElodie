import './App.css';
import './grille.css';
import Navbar from './components/Navbar/navbar';
import Blob from "./components/Shapes/blob";
import Header from './components/Header/header';
import SkillCircle from './components/skillCircle/skillCircle';
function App() {
 

  return (
    <div className='App container'>
      
      <Navbar/>
      <Header/>
      <div className="carousselBox">
          <SkillCircle></SkillCircle>
      </div>
      
      
    </div>
  )
}

export default App
