import { useState } from "react";
import Screen5Info from "../Screen5Info/Screen5Info";
import Screen5Test from "../Screen5Test/Screen5Test";
function Screen5() {
    const [infoTask, setInfoTask] = useState("");
    const changeInfoTask = (str: string) => {
        setInfoTask(str);
    }
    return (
        <>
            {infoTask && <Screen5Info changeInfoTask={changeInfoTask}></Screen5Info>}
            {!infoTask && <Screen5Test infoSection={infoTask}></Screen5Test>}
        </>
    );
}

export default Screen5;