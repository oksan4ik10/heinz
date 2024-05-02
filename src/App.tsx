
import { useState } from 'react'
import './App.css'
import Screen4 from './screens/Screen4/Screen4'

import Screen5 from './screens/Screen5/Screen5';

function App() {
  const [screen, setScreen] = useState(0);


  return <div className="container scroll__elem">
    <Screen5 />

    {screen === 4 && <Screen4 changeScreen={() => setScreen(5)}></Screen4>}
  </div>
}

export default App
