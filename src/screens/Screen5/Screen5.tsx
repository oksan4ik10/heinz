import { useEffect, useState } from "react";
import Screen5Info from "../Screen5Info/Screen5Info";
import Screen5Test from "../Screen5Test/Screen5Test";
import { TNamesQuestion } from "../../models/type";
import ScreenBlur from "../../components/ScreenBlur/ScreenBlur";
import Modal from "../../components/Modal/Modal";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { setIsScroll } from "../../store/reducers/scrollReducer";


interface IProps {
    changeScreen: () => void
    scrollWindow: () => void
    isLouserModal: boolean;
}
function Screen5(props: IProps) {

    const { changeScreen, scrollWindow, isLouserModal } = props;
    const dispatch = useAppDispatch()
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

    useEffect(() => {
        if (isLouserModal) dispatch(setIsScroll(false))
    }, [])

    const clickStart = () => {
        dispatch(setIsScroll(true))
        setIsStartGame(false)
    }


    const setInfoSection = () => {
        setInfoTask("")

        const isWin = Object.values(sectionAnswers).filter((item) => item).length === 6
        if (isWin) {
            setIsFinalGame(true)
            setIsEndGame(true)
            setInfoTask("")
            dispatch(setIsScroll(false))
        }
    }

    const clickShowResume = () => {
        dispatch(setIsScroll(true))
        setIsEndGame(false)
    }
    return (
        <>
            <ScreenBlur screen={isStartGame && isLouserModal}>
                <div className="modal__start">
                    <Modal border={false} btnText="Приступить" funcBtn={clickStart} text={isLouserModal ? "Отлично! Со структурой резюме<br/>определились. Теперь загляни в каждый<br/>раздел и заполни его, нажав на плюсик." : "Отлично! Ты выбрал верные заголовки.<br/>Со структурой резюме определились.<br/>Теперь загляни в каждый раздел и заполни<br/>его, нажав на плюсик."} />
                </div>
            </ScreenBlur>
            <ScreenBlur screen={isEndGame}>
                <div className="modal__start">
                    <Modal border={false} btnText="Посмотреть" funcBtn={clickShowResume} text={`Генри Хайнц говорил: «Делайте<br/>обыкновенные вещи необыкновенно хорошо,<br/>и в этом залог успеха». Это относится<br/>и к резюме — если оно хорошее<br/>и структурированное, тебе будет проще<br/>выделиться среди кандидатов.<br/><br/>Посмотри, что у тебя получилось — ${textModalEnd[user]} отправлять своё резюме!`} />
                </div>
            </ScreenBlur>
            {!infoTask && <Screen5Info user={user} sectionAnswers={sectionAnswers} isEndGame={isFinal} changeInfoTask={changeInfoTask} changeScreen={changeScreen}></Screen5Info>}
            {infoTask && <Screen5Test scrollWindow={scrollWindow} user={user} setInfoSection={setInfoSection} infoSection={infoTask}></Screen5Test>}
        </>
    );
}

export default Screen5;