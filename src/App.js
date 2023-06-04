
import './App.css';
import Tag  from './components/Tag';
import Random from './components/Random';

function App() {
  return (
    <div className="App" >

   
    <div className='app-head'><h3>Gif Generator Application </h3></div>
    <div className="gif-box">

    <Random/>
    <Tag/>


    
  
    </div>

    </div>
  );
}

export default App;
