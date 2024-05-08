/* eslint-disable @typescript-eslint/no-explicit-any */
import style from "./Screen7Test.module.css"
import { TNamesQuestion } from "../../models/type";

import Profile from "../../components/Profile/Profile";
import Modal from "../../components/Modal/Modal";

import urlArrow from "../../assets/5arrow-prev.svg"
import urlInfoIcon from "../../assets/infoIcons.svg"

import bgStart from "../../assets/5bg-starTest.svg"
import bgCircle from "../../assets/5bg-circleTest.svg"
import bgCircle2 from "../../assets/5bg-circle2Test.svg"
import userPhoto from "../../assets/screen7/photoInfo1.png"


import { useAppSelector, useAppDispatch } from "../../store/store";
import { setStateAnswer, setAnswerUser } from "../../store/reducers/tasksUserAnswerReducer";
import { setChekSection } from "../../store/reducers/tasksInfoReducer";


import data from "../../data/task2InfoTest.json"
import dataModal from "../../data/task2Modal.json"
import dataQuestion from "../../data/screen7data.json"


import Test from "../../components/Test/Test";

import { useEffect, useRef } from "react";

interface IProps {
    infoSection: TNamesQuestion;
    setInfoSection: () => void

}

function Screen7Test(props: IProps) {
    const { infoSection, setInfoSection } = props;
    const dispatch = useAppDispatch();


    const infoState = useAppSelector((state) => state.task1UserAnswerReducer)[infoSection];

    const stateUserArr = infoState.user
    const stateAnswer = infoState.stateAnswer

    const { answers, wins } = data[infoSection];
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


    const infoQuestion: any = dataQuestion[infoSection];
    const titles = {
        info: "Личная и контактная информация",
        job: "Желаемая должность",
        photo: "Фото",
        education: "Образование и дополнительные курсы",
        experience: "Опыт работы",
        skills: "Навыки"
    }


    return (
        <div className={style.wrapper + " wrapper"} ref={refWrapper}>
            <img src={bgCircle} alt="circle" className={style.bgCircle} />
            <img src={bgCircle2} alt="circle" className={style.bgCircle2} />
            <img src={bgStart} alt="star" className={style.bgStart} />

            <div className={style.head} onClick={clickPrev}>
                <div className={style.arrow + " " + (stateAnswer === "success" ? style.arrowNone : "")}>
                    <img src={urlArrow} alt="arrow" />
                </div>
                <Profile></Profile>
            </div>
            <div className={style.section__item + " " + style.check + " " + style[infoSection]} >
                <div className={style.section__head}>{titles[infoSection]}</div>
                <div className={style.section__content + " " + style.check}>

                    {infoSection !== "photo" && infoSection !== "job" && <ul className={style.list + " " + (infoSection === "skills" ? style.listMenLast : "")}>
                        {infoQuestion.text.map((item: any, index: number) => <li key={index}>
                            <span dangerouslySetInnerHTML={{ __html: item }}></span>
                        </li>)}
                    </ul>}
                    {infoSection === "job" && <span dangerouslySetInnerHTML={{ __html: infoQuestion.text }}></span>}
                    {infoSection === "photo" && <img src={userPhoto} alt="photo" className={style.photo} />}


                </div>
            </div>
            {stateAnswer === "wait" && <div className={style.question} >
                <img src={urlInfoIcon} alt="icon" />
                <p className={style.question__text} dangerouslySetInnerHTML={{ __html: "Какая допущена ошибка?" }}></p>
            </div>}
            <Test funcCheckUserAnswer={funcCheckUserAnswer} answers={answers} stateUserArr={stateUserArr} stateAnswer={stateAnswer}></Test>

            <div className={style.modal}>
                {stateAnswer === "error" && <Modal border={true} btnText="Выбрать заново" text={textError} funcBtn={clickModalError} />}
                {stateAnswer === "success" && <Modal border={true} btnText="Выбрать следующий раздел" text={textSuccess} funcBtn={() => setInfoSection()} />}
            </div>




        </div>
    );
}

export default Screen7Test;