import Singin from './component/singin';
import Home from './component/home'
import Protected from './component/protected'
import './App.css';
import Error from './component/Error'
import { Routes ,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Protected Comp={Home} />} />
        <Route path='/singin' element={<Singin />} />
        <Route path='*' element={<Error />} />

      </Routes>
     
    </div>
  );
}

export default App;
