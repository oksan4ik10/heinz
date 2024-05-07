import style from "./Screen5Test.module.css"
import { TNamesQuestion } from "../../models/type";

import Profile from "../../components/Profile/Profile";
import Modal from "../../components/Modal/Modal";

import urlArrow from "../../assets/5arrow-prev.svg"
import urlInfoIcon from "../../assets/infoIcons.svg"

import bgStart from "../../assets/5bg-starTest.svg"
import bgCircle from "../../assets/5bg-circleTest.svg"
import bgCircle2 from "../../assets/5bg-circle2Test.svg"


import { useAppSelector, useAppDispatch } from "../../store/store";
import { setStateAnswer, setAnswerUser } from "../../store/reducers/task1UserAnswerReducer";
import { setChekSection } from "../../store/reducers/task1InfoReducer";


import data from "../../data/task1Info.json"
import dataModal from "../../data/task1Modal.json"

import TestPhoto from "../../components/TestPhoto/TestPhoto";
import Test from "../../components/Test/Test";
import TestMultiple from "../../components/TestMultiple/TestMultiple";
import { useEffect, useRef } from "react";

interface IProps {
    infoSection: TNamesQuestion;
    setInfoSection: () => void
    user: number

}

function Screen5Test(props: IProps) {
    const { infoSection, setInfoSection, user } = props;
    const dispatch = useAppDispatch();


    const infoState = useAppSelector((state) => state.task1UserAnswerReducer)[infoSection];

    const stateUserArr = infoState.user
    const stateAnswer = infoState.stateAnswer

    const { question, answers, wins } = data[user][infoSection];
    const { textSuccess, textError } = dataModal[infoSection];

    const funcCheckUserAnswer = (userAnswers: number[]) => {
        const checkWin = userAnswers.sort((a, b) => a - b).toString() === wins.sort((a, b) => a - b).toString();
        dispatch(setAnswerUser({ section: infoSection, stateAnswer: checkWin ? "success" : "error", arr: userAnswers }))
        if (checkWin) dispatch(setChekSection(infoSection))
    }

    const clickModalError = () => {
        dispatch(setStateAnswer({ section: infoSection, stateAnswer: "wait" }))
    }

    const clickPrev = () => {
        let state = stateAnswer;
        if (stateUserArr.length > 0) state = "error"

        dispatch(setStateAnswer({ section: infoSection, stateAnswer: state }))
        setInfoSection()
    }

    const refWrapper = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const wrapper = refWrapper.current;
        if (!wrapper) return
        wrapper.scrollIntoView();
    }, [])

    return (
        <div className={style.wrapper + " wrapper"} ref={refWrapper}>
            <img src={bgCircle} alt="circle" className={style.bgCircle} />
            <img src={bgCircle2} alt="circle" className={style.bgCircle2} />
            {stateAnswer !== "wait" && <img src={bgStart} alt="star" className={style.bgStart} />}

            <div className={style.head} onClick={clickPrev}>
                <div className={style.arrow + " " + (stateAnswer === "success" ? style.arrowNone : "")}>
                    <img src={urlArrow} alt="arrow" />
                </div>
                <Profile></Profile>
            </div>
            <div className={style.question} >
                <img src={urlInfoIcon} alt="icon" />
                <p className={style.question__text} dangerouslySetInnerHTML={{ __html: question }}></p>
            </div>
            {infoSection !== "photo" && infoSection !== "job" && infoSection !== "experience" && <TestMultiple funcCheckUserAnswer={funcCheckUserAnswer} answers={answers} stateUserArr={stateUserArr} stateAnswer={stateAnswer}></TestMultiple>}
            {infoSection === "photo" && <TestPhoto funcCheckUserAnswer={funcCheckUserAnswer} answers={answers} stateUserArr={stateUserArr} stateAnswer={stateAnswer}></TestPhoto>}
            {(infoSection === "job" || infoSection === "experience") && <Test funcCheckUserAnswer={funcCheckUserAnswer} answers={answers} stateUserArr={stateUserArr} stateAnswer={stateAnswer}></Test>}

            <div className={style.modal}>
                {stateAnswer === "error" && <Modal border={true} btnText="Выбрать заново" text={textError} funcBtn={clickModalError} />}
                {stateAnswer === "success" && <Modal border={true} btnText="Выбрать следующий раздел" text={textSuccess} funcBtn={() => setInfoSection()} />}
            </div>




        </div>
    );
}

export default Screen5Test;