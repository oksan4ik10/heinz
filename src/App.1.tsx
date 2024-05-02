import { useState } from 'react';
import Screen4 from './screens/Screen4/Screen4';

export function App() {
    const [screen, setScreen] = useState(0);
    console.log(screen);

    return <div className="container scroll__elem">
        <Screen5></Screen5>
        {screen === 4 && <Screen4 changeScreen={() => setScreen(5)}></Screen4>}
    </div>;
}
