import { createContext } from 'react';
import './App.css';
import ChildA from '../src/Component/ChildA';

const Password  = createContext()
const Founder = createContext()
const Version = createContext()
function App() {
  return (
    <div className="App">
      <h1>Learn Props Drilling</h1>

      <Password.Provider value='React@123'>
        <Founder.Provider value='Jorden Walke'>
          <Version.Provider value ={18}>
              <ChildA/>
          </Version.Provider>
        </Founder.Provider>
      </Password.Provider>

    </div>
  );
}

export default App;
export {Password,Founder,Version}
