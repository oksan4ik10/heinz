import style from "./Screen7Info.module.css"
import Profile from "../../components/Profile/Profile";



import bgStart from "../../assets/bg-items/5bg-star.svg"
import bgCircle from "../../assets/bg-items/5bg-circle.svg"
import bgCircle2 from "../../assets/bg-items/5bg-circle2.svg"
import bgTomato from "../../assets/bg-items/5bg-tomato.png"
import bgSheet from "../../assets/bg-items/5bg-sheet.png"

import photoPerson from "../../assets/screen7/photoInfo1.png"
import photoPersonWin from "../../assets/screen7/photoInfo2.png"

import data from "../../data/screen7data.json"
import { arrNameQuestion } from "../../models/type";

import { TNamesQuestion, ICheckSection } from "../../models/type";
import { useEffect, useRef } from "react";

interface IProps {
    changeInfoTask: (str: TNamesQuestion) => void
    isEndGame: boolean
    changeScreen: () => void
    sectionAnswers: ICheckSection
    changeRefElem: (x: number, y: number, width: number, height: number) => void
    isStartGame: boolean
}



function Screen5Info(props: IProps) {
    const { changeInfoTask, isEndGame, changeScreen, sectionAnswers, changeRefElem, isStartGame } = props;

    const refWrapper = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const wrapper = refWrapper.current;
        if (!wrapper) return
        wrapper.scrollIntoView();
        if (!isStartGame) return
        if (refElem.current) {
            const dataWrapper = wrapper.getBoundingClientRect();
            const dataRef = refElem.current.getBoundingClientRect();
            const x = dataRef.x - dataWrapper.x;
            const y = dataRef.y - dataWrapper.y;
            changeRefElem(x, y, dataRef.width, dataRef.height)
        }
    }, [])

    const { info, job, experience, education, skills } = data;

    const userPhoto = [photoPerson, photoPersonWin]

    const openTask = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isEndGame) return

        const target = e.target as HTMLElement;
        const elem = target.closest(`.${style.section__item}`) as HTMLElement;
        if (!elem) return
        const dataInfo = elem.dataset.id as TNamesQuestion;
        if (!dataInfo) return;
        changeInfoTask(dataInfo)

    }

    const refElem = useRef<HTMLDivElement>(null)



    return (
        <div className={style.wrapper + " wrapper"} ref={refWrapper}>
            <img src={bgCircle} alt="" className={style.bgCircle} />
            <img src={bgCircle2} alt="" className={style.bgCircle2} />
            <img src={bgStart} alt="" className={style.bgStart} />
            <img src={bgTomato} alt="" className={style.bgTomato} />
            <img src={bgSheet} alt="" className={style.bgSheet} />
            {!isEndGame && <div className={style.head}>

                <Profile></Profile>

            </div>}
            <div className={style.section + " " + style.check} onClick={openTask}>
                <div ref={refElem} className={style.section__item + " " + style.personInfo + " " + style.check} data-id={arrNameQuestion[0]}>
                    <div className={style.section__head + " " + (sectionAnswers.info ? style.check : "")}>Личная и контактная информация</div>
                    <div className={style.section__content + " " + style.check}>


                        {sectionAnswers.info && <ul className={style.list}>
                            {info.textWin.map((item, index) => <li key={index}>
                                <span dangerouslySetInnerHTML={{ __html: item }}></span>
                            </li>)}
                        </ul>
                        }
                        {!sectionAnswers.info && <ul className={style.list}>
                            {info.text.map((item, index) => <li key={index}>
                                <span dangerouslySetInnerHTML={{ __html: item }}></span>
                            </li>)}
                        </ul>
                        }

                    </div>
                </div>
                <div className={style.section__item + " " + style.check + " " + style.personJob} data-id={arrNameQuestion[1]}>
                    <div className={style.section__head + " " + (sectionAnswers.job ? style.check : "")}>Желаемая должность</div>
                    <div className={style.section__content + " " + style.check}>
                        <span dangerouslySetInnerHTML={{ __html: (sectionAnswers.job) ? job.textWin : job.text }}></span>
                    </div>
                </div>
                <div className={style.section__item + " " + style.personPhoto + " " + style.check} data-id={arrNameQuestion[2]}>
                    <div className={style.section__head + " " + (sectionAnswers.photo ? style.check : "")}>Фото</div>
                    <div className={style.section__content}>
                        <img src={sectionAnswers["photo"] ? userPhoto[1] : userPhoto[0]} alt="photo" className={style.photo} />
                    </div>
                </div>
                <div className={style.section__item + " " + style.personEducation + " " + style.check} data-id={arrNameQuestion[3]}>
                    <div className={style.section__head + " " + (sectionAnswers.education ? style.check : "")}>Образование и дополнительные курсы</div>
                    <div className={style.section__content + " " + style.check}>

                        {!sectionAnswers.education && <ul className={style.list}>
                            {education.text.map((item, index) => <li key={index}>
                                <span dangerouslySetInnerHTML={{ __html: item }}></span>
                            </li>)}
                        </ul>
                        }
                        {sectionAnswers.education && <ul className={style.list}>
                            {education.textWin.map((item, index) => <li key={index}>
                                <span dangerouslySetInnerHTML={{ __html: item }}></span>
                            </li>)}
                        </ul>
                        }
                    </div>

                </div>
                <div data-id={arrNameQuestion[4]} className={style.section__item + " " + style.personExper + " " + style.check}>
                    <div className={style.section__head + " " + (sectionAnswers.experience ? style.check : "")} >Опыт работы</div>
                    <div className={style.section__content + " " + style.check}>

                        {!sectionAnswers.experience && <ul className={style.list}>
                            {experience.text.map((item, index) => {
                                return <li key={index}>
                                    <span dangerouslySetInnerHTML={{ __html: item }}></span>
                                </li>
                            })}
                        </ul>
                        }

                        {sectionAnswers.experience && <ul className={style.list}>
                            {experience.textWin.map((item, index) => {
                                if (index === 2) return <li key={index} > <span >{item}</span>
                                    <ul className={style.list + " " + style.listSecond}>
                                        {experience.textIN.map((i, j) =>
                                            <li key={j}>
                                                <span>{i}</span>
                                            </li>)
                                        }
                                    </ul>
                                </li>
                                return <li key={index}>
                                    <span dangerouslySetInnerHTML={{ __html: item }}></span>
                                </li>
                            })}
                        </ul>
                        }
                    </div>
                </div>
                <div data-id={arrNameQuestion[5]} className={style.section__item + " " + style.personSkills + " " + style.check}>
                    <div className={style.section__head + " " + (sectionAnswers.skills ? style.check : "")}>Навыки</div>
                    <div className={style.section__content + " " + style.check}>

                        {!sectionAnswers.skills && <ul className={style.list + " " + style.listMenLast}>
                            {skills.text.map((item, index) => <li key={index}>
                                <span dangerouslySetInnerHTML={{ __html: item }}></span>
                            </li>)}

                        </ul>
                        }
                        {sectionAnswers.skills && <ul className={style.list + " " + style.listMenLast}>
                            {skills.textWin.map((item, index) => <li key={index}>
                                <span dangerouslySetInnerHTML={{ __html: item }}></span>
                            </li>)}

                        </ul>
                        }
                    </div>
                </div>
            </div>
            {isEndGame && <button className={"btn " + style.btn} onClick={changeScreen}>Далее</button>}

        </div>
    );
}

export default Screen5Info;