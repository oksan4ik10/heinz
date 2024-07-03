import { useEffect, useRef } from "react";


import { useAppSelector, useAppDispatch } from "../../store/store";
import { setStateAnswer, setAnswerUser } from "../../store/reducers/tasksUserAnswerReducer";
import { setChekSection } from "../../store/reducers/tasksInfoReducer";

import Profile from "../../components/Profile/Profile";
import Modal from "../../components/Modal/Modal";
import TestPhoto from "../../components/TestPhoto/TestPhoto";
import Test from "../../components/Test/Test";
import TestMultiple from "../../components/TestMultiple/TestMultiple";

import { TNamesQuestion, TStateQuestion } from "../../models/type";

import style from "./Screen5Test.module.css"

import urlArrow from "../../assets/5arrow-prev.svg"
import urlInfoIcon from "../../assets/infoIcons.svg"
import bgStart from "../../assets/5bg-starTest.svg"
import bgCircle from "../../assets/5bg-circleTest.svg"
import bgCircle2 from "../../assets/5bg-circle2Test.svg"




import data from "../../data/task1Info.json"
import dataModal from "../../data/task1Modal.json"




interface IProps {
    infoSection: TNamesQuestion;
    setInfoSection: () => void
    user: number
    scrollWindow: () => void

}

function Screen5Test(props: IProps) {
    const { infoSection, setInfoSection, user, scrollWindow } = props;
    const dispatch = useAppDispatch();


    const infoState = useAppSelector((state) => state.task1UserAnswerReducer)[infoSection];
    const isScroll = useAppSelector((state) => state.scrollReducer).isScroll;

    const stateUserArr = infoState.user
    const stateAnswer = infoState.stateAnswer
    const countUserAnswer = infoState.count;

    const { question, answers, wins } = data[user][infoSection];
    const { textSuccess, textError } = (infoSection === "experience") ? dataModal[infoSection][user] : dataModal[infoSection];

    const textMiddle = (infoSection === "skills") ? dataModal["skills"].textMiddle[user] : "";
    const funcCheckUserAnswer = (userAnswers: number[]) => {
        if (countUserAnswer === 3) {
            dispatch(setAnswerUser({ section: infoSection, stateAnswer: "successMiddle", arr: wins }))
            dispatch(setChekSection(infoSection))
            return
        }


        let checkWin = false;
        if (infoSection === "skills") {
            const sortUserAnswer = [...userAnswers].sort((a, b) => a - b);
            let state: TStateQuestion = "wait";
            let countWinsAnwer = 0;
            for (let index = 0; index < sortUserAnswer.length; index++) {


                if (wins.indexOf(sortUserAnswer[index]) !== -1) {
                    countWinsAnwer++;
                }
                else {
                    state = "error"
                    break
                }
            }



            if ((countWinsAnwer >= 5) && (countWinsAnwer < wins.length) && (state !== "error")) {
                state = "errorMiddle"
            } else if ((state !== "error") && (countWinsAnwer === wins.length)) {
                state = "success";
            } else {
                state = "error"
            }
            checkWin = ((state === "success") || (state === "errorMiddle"));
            dispatch(setAnswerUser({ section: infoSection, stateAnswer: state, arr: userAnswers }))


        } else {
            checkWin = [...userAnswers].sort((a, b) => a - b).toString() === [...wins].sort((a, b) => a - b).toString();
            dispatch(setAnswerUser({ section: infoSection, stateAnswer: checkWin ? "success" : "error", arr: userAnswers }))
        }

        if (checkWin) dispatch(setChekSection(infoSection))
    }

    const clickModalError = () => {
        dispatch(setStateAnswer({ section: infoSection, stateAnswer: "wait" }))
    }

    const clickPrev = () => {
        let state = stateAnswer;


        if (stateUserArr.length > 0 && state !== "errorMiddle") state = "error"

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
        <div className={style.wrapper + " wrapper " + (!isScroll ? style.isScroll : "")} ref={refWrapper} >
            <img src={bgCircle} alt="circle" className={style.bgCircle} />
            <img src={bgCircle2} alt="circle" className={style.bgCircle2} />
            {stateAnswer !== "wait" && <img src={bgStart} alt="star" className={style.bgStart} />}

            <div className={style.head}>
                <div className={style.arrow + " " + ((stateAnswer === "success" || stateAnswer === "successMiddle" || stateAnswer === "errorMiddle") ? style.arrowNone : "")} onClick={clickPrev}>
                    <img src={urlArrow} alt="arrow" />
                </div>
                <Profile></Profile>
            </div>
            <div className={style.question} >
                <img src={urlInfoIcon} alt="icon" />
                <p className={style.question__text} dangerouslySetInnerHTML={{ __html: question }}></p>
            </div>
            {infoSection !== "photo" && infoSection !== "job" && infoSection !== "experience" && <TestMultiple scrollWindow={scrollWindow} funcCheckUserAnswer={funcCheckUserAnswer} answers={answers} stateUserArr={stateUserArr} stateAnswer={stateAnswer}></TestMultiple>}
            {infoSection === "photo" && <TestPhoto user={user} funcCheckUserAnswer={funcCheckUserAnswer} answers={answers} stateUserArr={stateUserArr} stateAnswer={stateAnswer}></TestPhoto>}
            {(infoSection === "job" || infoSection === "experience") && <Test funcCheckUserAnswer={funcCheckUserAnswer} answers={answers} stateUserArr={stateUserArr} stateAnswer={stateAnswer}></Test>}

            <div className={style.modal}>
                {stateAnswer === "error" && <Modal border={true} btnText="Выбрать заново" text={textError} funcBtn={clickModalError} />}
                {stateAnswer === "errorMiddle" && <Modal border={true} btnText="Выбрать следующий раздел" text={textMiddle} funcBtn={() => setInfoSection()} />}
                {stateAnswer === "success" && <Modal border={true} btnText="Выбрать следующий раздел" text={textSuccess} funcBtn={() => setInfoSection()} />}
                {stateAnswer === "successMiddle" && <Modal border={true} btnText="Теперь понятно" text={"Давай мы тебе подскажем. Правильные<br/>ответы на вопрос выделены зелёным."} funcBtn={() => setInfoSection()} />}
            </div>




        </div>
    );
}

export default Screen5Test;