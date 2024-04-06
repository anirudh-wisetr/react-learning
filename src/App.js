import React, { createContext, useState } from 'react';
import './App.css';
import CompoA from './CompoentA';
import Header from './Header';

const AppState = createContext()

function App() {

  const [data, setData] = useState("Hello,")
  const [name, setname] = useState({ name: "PRAGYA PANDEY", age: 20 })

  return (
    <>
      <AppState.Provider value={{ data, name }}>
        <Header />
        <div className='main-coMPO'>
          <CompoA />
        </div>;
      </AppState.Provider>
    </>
  );
}

export default App;
export { AppState };
