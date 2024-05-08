import { useState } from "react";
import { useAppSelector } from "../../store/store";
import Screen7Info from "../Screen7Info/Screen7Info";
import Screen7Test from "../Screen7Test/Screen7Test";

import { TNamesQuestion } from "../../models/type";

interface IProps {
    changeScreen: () => void
}
function Screen7(props: IProps) {
    const { changeScreen } = props;

    const [infoTask, setInfoTask] = useState<TNamesQuestion | "">("");
    const changeInfoTask = (str: TNamesQuestion) => {
        setInfoTask(str);
    }
    const sectionAnswers = useAppSelector((state) => state.task1InfoReducer);

    const setInfoSection = () => {
        setInfoTask("")
        const isWin = Object.values(sectionAnswers).filter((item) => item).length === 6
        if (isWin) {
            // setIsFinalGame(true)
            // setIsEndGame(true)
            setInfoTask("")
        }
    }
    return (
        <>
            {!infoTask && <Screen7Info isEndGame={false} sectionAnswers={sectionAnswers} changeInfoTask={changeInfoTask} changeScreen={changeScreen}></Screen7Info>}
            {infoTask && <Screen7Test setInfoSection={setInfoSection} infoSection={infoTask}></Screen7Test>}

        </>
    );
}

export default Screen7;