
import { useState } from 'react'
import './App.css'

import { useAppSelector } from './store/store';

import ScreenPersona from './screens/ScreenPersona/ScreenPersona';
import Screen4 from './screens/Screen4/Screen4'
import Screen5 from './screens/Screen5/Screen5';
import Screen6FinalTask1 from './screens/Screen6FinalTask1/Screen6FinalTask1';



function App() {
  const [screen, setScreen] = useState(4);

  const isScreenPersona = useAppSelector((state) => state.screenPersonaReducser).isScreen;


  return <div className="container scroll__elem">
    {isScreenPersona && <ScreenPersona></ScreenPersona>}


    {screen === 4 && <Screen4 changeScreen={() => setScreen(5)}></Screen4>}
    {screen === 5 && <Screen5 changeScreen={() => setScreen(6)} />}
    {screen === 6 && <Screen6FinalTask1 />}
  </div>
}

export default App
