import './App.css';
import imgOne from './yoga.jpg';
import imgTwo from './friends.jpg';
import { ToDo } from './ToDo';

function App() {
  return (
    <div className="App">
      <img src={imgOne} alt='yoga' width='200px' className='ImgOne' />
      <h1>TO-DO-LISTE</h1>
      <ToDo />
      <img src={imgTwo} alt='friends' width='170px' className='ImgTwo' />
    </div>
  );
}

export default App;
