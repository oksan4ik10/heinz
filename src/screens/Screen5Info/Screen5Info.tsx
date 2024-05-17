import { useEffect, useRef } from "react";


import Profile from "../../components/Profile/Profile";


import { arrNameQuestion } from "../../models/type";
import { TNamesQuestion, ICheckSection } from "../../models/type";

import style from "./Screen5.module.css"

import urlIconInfo from "../../assets/infoIcons.svg"


import photoPerson0 from "../../assets/5photoMen.png"
import photoPerson1 from "../../assets/5photoUser1.png"
import photoPerson2 from "../../assets/5photoUser2.png"

import data from "../../data/screen5data.json"



interface IProps {
    changeInfoTask: (str: TNamesQuestion) => void
    isEndGame: boolean
    changeScreen: () => void
    sectionAnswers: ICheckSection
    user: number
}



function Screen5Info(props: IProps) {
    const { changeInfoTask, isEndGame, changeScreen, sectionAnswers, user } = props;

    const refWrapper = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const wrapper = refWrapper.current;
        if (!wrapper) return
        wrapper.scrollIntoView();
    }, [])

    const { info, job, experience, education, skills } = data[user];

    const userPhoto = [photoPerson0, photoPerson1, photoPerson2]

    const openTask = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isEndGame) return
        const target = e.target as HTMLElement;
        const elem = target.closest(`.${style.section__item}`) as HTMLElement;
        if (!elem) return
        const dataInfo = elem.dataset.id as TNamesQuestion;
        if (!dataInfo) return;
        changeInfoTask(dataInfo)

    }


    return (
        <>
            <div className={style.wrapper + " wrapper"} ref={refWrapper}>


                {!isEndGame && <div className={style.head}>
                    <div className={style.head__info}>
                        <div className={style.infoIcon}>
                            <img src={urlIconInfo} alt="info" />
                        </div>
                        <p className={style.info__text}>Загляни в каждый раздел<br />и заполни его, нажав на плюсик.</p>
                    </div>
                    <Profile></Profile>

                </div>}
                <div className={style.section + " " + ((Object.values(sectionAnswers).filter((item) => item)).length !== 0 ? style.check : "")} onClick={openTask}>
                    <div className={style.section__item + " " + style.personInfo + " " + (sectionAnswers.info ? style.check : "")} data-id={arrNameQuestion[0]}>

                        <div className={style.section__head}>Личная и контактная информация</div>
                        <div className={style.section__content + " " + (sectionAnswers.info ? style.check : "")}>
                            <svg className={style.plus} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.5 0.5H8.5V8.5L0.5 8.5V12.5H8.5V20.5H12.5V12.5H20.5V8.5L12.5 8.5V0.5Z" fill="#FEBD01" />
                            </svg>


                            {sectionAnswers.info && <ul className={style.list}>
                                {info.text.map((item, index) => <li key={index}>
                                    <span dangerouslySetInnerHTML={{ __html: item }}></span>
                                </li>)}
                            </ul>
                            }

                        </div>
                    </div>
                    <div className={style.section__item + " " + (sectionAnswers.job ? style.check : "") + " " + style.personJob} data-id={arrNameQuestion[1]}>
                        <div className={style.section__head}>Желаемая должность</div>
                        <div className={style.section__content + " " + (sectionAnswers.job ? style.check : "")}>
                            <svg className={style.plus} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.5 0.5H8.5V8.5L0.5 8.5V12.5H8.5V20.5H12.5V12.5H20.5V8.5L12.5 8.5V0.5Z" fill="#FEBD01" />
                            </svg>
                            {sectionAnswers.job && <span dangerouslySetInnerHTML={{ __html: job.text }}></span>}

                        </div>
                    </div>
                    <div className={style.section__item + " " + style.personPhoto + " " + (sectionAnswers.photo ? style.check : "")} data-id={arrNameQuestion[2]}>
                        <div className={style.section__head}>Фото</div>
                        <div className={style.section__content}>
                            <svg className={style.plus} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.5 0.5H8.5V8.5L0.5 8.5V12.5H8.5V20.5H12.5V12.5H20.5V8.5L12.5 8.5V0.5Z" fill="#FEBD01" />
                            </svg>
                            <img src={userPhoto[user]} alt="photo" className={style.photo} />
                        </div>
                    </div>
                    <div className={style.section__item + " " + style.personEducation + " " + (sectionAnswers.education ? style.check : "")} data-id={arrNameQuestion[3]}>
                        <div className={style.section__head}>Образование и дополнительные курсы</div>
                        <div className={style.section__content + " " + (sectionAnswers.education ? style.check : "")}>
                            <svg className={style.plus} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.5 0H8.5V8L0.5 8V12H8.5V20H12.5V12H20.5V8L12.5 8V0Z" fill="#1B3D6D" />
                            </svg>

                            {sectionAnswers.education && <ul className={style.list}>
                                {education.text.map((item, index) => <li key={index}>
                                    <span dangerouslySetInnerHTML={{ __html: item }}></span>
                                </li>)}
                            </ul>
                            }
                        </div>

                    </div>
                    <div data-id={arrNameQuestion[4]} className={style.section__item + " " + style.personExper + " " + (sectionAnswers.experience ? style.check : "")}>
                        <div className={style.section__head}>Опыт работы</div>
                        <div className={style.section__content + " " + (sectionAnswers.experience ? style.check : "")}>
                            <svg className={style.plus} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.5 0H8.5V8L0.5 8V12H8.5V20H12.5V12H20.5V8L12.5 8V0Z" fill="#E02725" />
                            </svg>

                            {sectionAnswers.experience && <ul className={style.list}>
                                {experience.text.map((item, index) => {
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
                    <div data-id={arrNameQuestion[5]} className={style.section__item + " " + style.personSkills + " " + (sectionAnswers.skills ? style.check : "")}>
                        <div className={style.section__head}>Навыки</div>
                        <div className={style.section__content + " " + (sectionAnswers.skills ? style.check : "")}>
                            <svg className={style.plus} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.5 0H8.5V8L0.5 8V12H8.5V20H12.5V12H20.5V8L12.5 8V0Z" fill="#08AFDC" />
                            </svg>
                            {sectionAnswers.skills && <ul className={style.list + " " + (user === 2 ? style.listMenLast : "")}>
                                {skills.text.map((item, index) => <li key={index}>
                                    <span dangerouslySetInnerHTML={{ __html: item }}></span>
                                </li>)}
                            </ul>
                            }
                        </div>
                    </div>
                </div>


            </div >
            {isEndGame && <div className={style.blur}>
                <button className={"btn " + style.btn} onClick={changeScreen}>Далее</button>
            </div>}
        </>
    );
}

export default Screen5Info;