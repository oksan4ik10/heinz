import { useEffect, useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { setIsScroll } from "../../store/reducers/scrollReducer";
import style from "./Screen7.module.css"
import urlArrow from "../../assets/bg-items/7arrow.svg"


import Profile from "../../components/Profile/Profile";
import Screen7Info from "../Screen7Info/Screen7Info";
import Screen7Test from "../Screen7Test/Screen7Test";
import ScreenBlur
    from "../../components/ScreenBlur/ScreenBlur";
import Modal from "../../components/Modal/Modal";

import { TNamesQuestion } from "../../models/type";

import dataModal from "../../data/screen7data.json"

interface IProps {
    changeScreen: () => void
}
function Screen7(props: IProps) {
    const { changeScreen } = props;


    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setIsScroll(false))
    }, [])

    const clickStartGame = () => {
        dispatch(setIsScroll(true))
        setIsStartGame(false)
    }


    const [infoTask, setInfoTask] = useState<TNamesQuestion | "">("");
    const changeInfoTask = (str: TNamesQuestion) => {
        setInfoTask(str);
    }
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
            dispatch(setIsScroll(false))
        }
    }

    const clickShowResume = () => {
        setIsEndGame(false)
        dispatch(setIsScroll(true))
    }

    const [modalNum, setModalNum] = useState(0);
    const { text } = dataModal.info;

    const modalElem = useRef<HTMLDivElement>(null);
    const changeRefElem = (x: number, y: number, width: number, height: number) => {
        if (!modalElem.current) return
        modalElem.current.style.setProperty("--widthElem", width + "px")
        modalElem.current.style.setProperty("--heightElem", height + "px")
        modalElem.current.style.setProperty("--topElem", y + "px")
        modalElem.current.style.setProperty("--leftElem", x + "px")

    }


    return (
        <>
            <ScreenBlur screen={isStartGame}>
                {modalNum === 0 && <div className="modal__start">
                    <Modal border={false} btnText="Давай" funcBtn={() => setModalNum(1)} text={"Все основные правила мы обсудили<br/>при составлении резюме. Теперь давай<br/>закрепим навыки и найдём ошибки<br/>в резюме Иры, которая собирается стать<br/>дизайнером в Kraft Heinz. Она учится<br/>в НИУ ВШЭ и участвует в учебных<br/>проектах. Ира работала экскурсоводом<br/>в музее, а ещё проходила курсы по Figma."} />
                </div>}
                {modalNum === 1 && <>
                    <div className={style.profile}>
                        <Profile></Profile>
                    </div>
                    <div className={style.modal2}>
                        <div className={style.arrow}>
                            <img src={urlArrow} alt="arrow" />
                        </div>
                        <Modal border={false} btnText="Далее" funcBtn={() => setModalNum(2)} text={"Информация об Ире доступна тут."}></Modal>
                    </div>
                </>}
                <>
                    <div className={style.modal3 + " " + (modalNum !== 2 ? style.none : "")} ref={modalElem}>
                        <div className={style.section__item + " " + style.personInfo + " " + style.check} >
                            <div className={style.section__head}>Личная и контактная информация</div>
                            <div className={style.section__content + " " + style.check}>
                                <ul className={style.list}>
                                    {text.map((item, index) => <li key={index}>
                                        <span dangerouslySetInnerHTML={{ __html: item }}></span>
                                    </li>)}
                                </ul>


                            </div>
                        </div>
                        <div className={style.modalStart}>
                            <div className={style.arrow}>
                                <img src={urlArrow} alt="arrow" />
                            </div>
                            <Modal border={false} btnText="Начать" funcBtn={clickStartGame} text={"Нажимай на раздел и ищи ошибку."}></Modal>
                        </div>
                    </div>
                </>
            </ScreenBlur>

            <ScreenBlur screen={isEndGame}>
                <div className="modal__start">
                    <Modal border={false} minFont={true} btnText="Приступить" funcBtn={clickShowResume} text={`Супер! Все ошибки исправлены. Теперь Ира готова<br/>к поиску работы.`} />
                </div>
            </ScreenBlur>
            {!infoTask && <Screen7Info isStartGame={isStartGame} changeRefElem={changeRefElem} isEndGame={isFinal} sectionAnswers={sectionAnswers} changeInfoTask={changeInfoTask} changeScreen={changeScreen}></Screen7Info>}
            {infoTask && <Screen7Test setInfoSection={setInfoSection} infoSection={infoTask}></Screen7Test>}

        </>
    );
}

export default Screen7;