
import { useState } from 'react'
import './App.css'

import { useAppSelector } from './store/store';

import Screen1 from './screens/Screen1/Screen1';
import Screen2 from './screens/Screen2/Screen2';
import Screen3 from './screens/Screen3/Screen3';
import Screen4 from './screens/Screen4/Screen4'
import Screen5 from './screens/Screen5/Screen5';
import Screen6FinalTask1 from './screens/Screen6FinalTask1/Screen6FinalTask1';
import ScreenPersona from './screens/ScreenPersona/ScreenPersona';


function App() {
  const [screen, setScreen] = useState(3);

  const isScreenPersona = useAppSelector((state) => state.screenPersonaReducser).isScreen;


  return <div className="container scroll__elem">
    {isScreenPersona && <ScreenPersona></ScreenPersona>}
    {screen === 1 && <Screen1 changeScreen={() => setScreen(2)} />}
    {screen === 2 && <Screen2 changeScreen={() => setScreen(3)} />}
    {screen === 3 && <Screen3 changeScreen={() => setScreen(4)} />}
    {screen === 4 && <Screen4 changeScreen={() => setScreen(5)}></Screen4>}
    {screen === 5 && <Screen5 changeScreen={() => setScreen(6)} />}
    {screen === 6 && <Screen6FinalTask1 />}
  </div>
}

export default App
