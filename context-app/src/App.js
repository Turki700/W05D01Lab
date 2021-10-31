import React, { createContext, useState } from 'react'
import Header from './components/header';

export const DataContext = createContext()

function App() {

  const [info, setInfo] = useState([])
  
  return (
    <div className="App">
      <DataContext.Provider value={info}>
        <button onClick={() => setInfo({title: "Hello World", img: "https://images.pexels.com/photos/3782134/pexels-photo-3782134.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"})}>English</button>
        <button onClick={() => setInfo({title: "السلام عليكم ورحمة الله وبركاته", img: "https://images.pexels.com/photos/809060/pexels-photo-809060.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"})}>Arabic</button>
        <button onClick={() => setInfo({title: "Japanese", img: "https://images.pexels.com/photos/1325837/pexels-photo-1325837.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"})}>Japanese</button>
        <Header />
      </DataContext.Provider>
    </div>
  );
}

export default App;
