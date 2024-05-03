import { useState } from "react";
import Screen5Info from "../Screen5Info/Screen5Info";
import Screen5Test from "../Screen5Test/Screen5Test";
import { TNamesQuestion } from "../../models/type";
function Screen5() {
    const [infoTask, setInfoTask] = useState<TNamesQuestion | "">("");
    const changeInfoTask = (str: TNamesQuestion) => {
        setInfoTask(str);
    }
    return (
        <>
            {!infoTask && <Screen5Info changeInfoTask={changeInfoTask}></Screen5Info>}
            {infoTask && <Screen5Test setInfoSection={() => setInfoTask("")} infoSection={infoTask}></Screen5Test>}
        </>
    );
}

export default Screen5;