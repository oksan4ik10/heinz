
import { useRef, useState } from 'react'
import './App.css'

import { useAppSelector } from './store/store';

import Screen1 from './screens/Screen1/Screen1';
import Screen2 from './screens/Screen2/Screen2';
import Screen3 from './screens/Screen3/Screen3';
import Screen4 from './screens/Screen4/Screen4'
import Screen5 from './screens/Screen5/Screen5';
import Screen6FinalTask1 from './screens/Screen6FinalTask1/Screen6FinalTask1';
import ScreenPersona from './screens/ScreenPersona/ScreenPersona';

import Screen7 from './screens/Screen7/Screen7';
import Screen8 from './screens/Screen8/Screen8';
import Screen9 from './screens/Screen9/Screen9';


function App() {
  const [screen, setScreen] = useState(5);

  const isScreenPersona = useAppSelector((state) => state.screenPersonaReducser).isScreen;
  const isScroll = useAppSelector((state) => state.scrollReducer).isScroll;

  const refContainer = useRef<HTMLDivElement>(null);


  const [scrollTop, setScrollTop] = useState(0)
  const scrollWrapperCoordinate = () => {

    if (!isScroll || screen !== 5) return
    if (!refContainer.current) return
    const top = refContainer.current.scrollTop
    refContainer.current.style.setProperty("--top", top + "px")
    setScrollTop(top)
  }

  const scrollTopScreen5 = () => {

    setTimeout(() => {
      refContainer.current?.scrollTo({ top: scrollTop, behavior: 'auto' })
    }, 0)
  }

  return <div onScroll={scrollWrapperCoordinate} ref={refContainer} className={"container " + (screen === 6 ? " screen7" : "") + " " + (isScroll ? "scroll__elem" : "")}>
    {isScreenPersona && <ScreenPersona></ScreenPersona>}
    {screen === 1 && <Screen1 changeScreen={() => setScreen(2)} />}
    {screen === 2 && <Screen2 changeScreen={() => setScreen(3)} />}
    {screen === 3 && <Screen3 changeScreen={() => setScreen(4)} />}
    {screen === 4 && <Screen4 changeScreen={() => setScreen(5)}></Screen4>}
    {screen === 5 && <Screen5 scrollWindow={scrollTopScreen5} changeScreen={() => setScreen(6)} />}
    {screen === 6 && <Screen6FinalTask1 changeScreen={() => setScreen(7)} />}
    {screen === 7 && <Screen7 changeScreen={() => setScreen(8)} />}
    {screen === 8 && <Screen8 changeScreen={() => setScreen(9)} />}
    {screen === 9 && <Screen9 />}
  </div>
}

export default App
