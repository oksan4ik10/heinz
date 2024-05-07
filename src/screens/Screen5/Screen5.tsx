import { useState } from "react";
import Screen5Info from "../Screen5Info/Screen5Info";
import Screen5Test from "../Screen5Test/Screen5Test";
import { TNamesQuestion } from "../../models/type";
import ScreenBlur from "../../components/ScreenBlur/ScreenBlur";
import Modal from "../../components/Modal/Modal";

import { useAppSelector } from "../../store/store";

interface IProps {
    changeScreen: () => void
}
function Screen5(props: IProps) {

    const { changeScreen } = props;


    const [infoTask, setInfoTask] = useState<TNamesQuestion | "">("");
    const changeInfoTask = (str: TNamesQuestion) => {
        setInfoTask(str);
    }
    const textModalEnd = ["Саша<br/>уже готов", "Юля<br/>уже готова", "Миша<br/>уже готов"]

    const user = useAppSelector((state) => state.personaReducer).user;
    const sectionAnswers = useAppSelector((state) => state.task1InfoReducer);

    const [isStartGame, setIsStartGame] = useState(true);
    const [isEndGame, setIsEndGame] = useState(false);

    const [isFinal, setIsFinalGame] = useState(false);


    const setInfoSection = () => {
        setInfoTask("")
        const isWin = Object.values(sectionAnswers).filter((item) => item).length === 6
        if (isWin) {
            setIsFinalGame(true)
            setIsEndGame(true)
            setInfoTask("")
        }
    }
    return (
        <>
            <ScreenBlur screen={isStartGame}>
                <div className="modal__start">
                    <Modal border={false} btnText="Приступить" funcBtn={() => setIsStartGame(false)} text={"Отлично! Ты выбрал верные заголовки.<br/>Со структурой резюме определились.<br/>Теперь загляни в каждый раздел и заполни<br/>его, нажав на плюсик."} />
                </div>
            </ScreenBlur>
            <ScreenBlur screen={isEndGame}>
                <div className="modal__start">
                    <Modal border={false} btnText="Приступить" funcBtn={() => setIsEndGame(false)} text={`Генри Хайнц говорил: «Делайте<br/>обыкновенные вещи необыкновенно хорошо,<br/>и в этом залог успеха». Это относится<br/>и к резюме — если оно хорошее<br/>и структурированное, тебе будет проще<br/>выделиться среди кандидатов.<br/><br/>Посмотри, что у тебя получилось — ${textModalEnd[user]} уже готов отправлять своё резюме!`} />
                </div>
            </ScreenBlur>
            {!infoTask && <Screen5Info user={user} sectionAnswers={sectionAnswers} isEndGame={isFinal} changeInfoTask={changeInfoTask} changeScreen={changeScreen}></Screen5Info>}
            {infoTask && <Screen5Test user={user} setInfoSection={setInfoSection} infoSection={infoTask}></Screen5Test>}
        </>
    );
}

export default Screen5;