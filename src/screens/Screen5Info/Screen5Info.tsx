import style from "./Screen5.module.css"
import Profile from "../../components/Profile/Profile";

import urlIconInfo from "../../assets/infoIcons.svg"
import urlPlusYellow from "../../assets/5yellowPlus.svg"
import urlPlusBlue from "../../assets/5bluePlus.svg"
import urlPlusRed from "../../assets/5redPlus.svg"
import urlPlusMiamie from "../../assets/5miamiePlus.svg"

import bgStart from "../../assets/5bg-star.svg"
import bgCircle from "../../assets/5bg-circle.svg"
import bgCircle2 from "../../assets/5bg-circle2.svg"
import bgTomato from "../../assets/5bg-tomato.png"
import bgSheet from "../../assets/5bg-sheet.png"

import photoPerson0 from "../../assets/5photoMen.png"
import photoPerson1 from "../../assets/5photoUser1.png"
import photoPerson2 from "../../assets/5photoUser2.png"

import data from "../../data/screen5data.json"
import { arrNameQuestion } from "../../models/type";

import { useAppSelector } from "../../store/store";

interface IProps {
    changeInfoTask: (str: string) => void
}



function Screen5Info(props: IProps) {
    const { changeInfoTask } = props;


    const user = useAppSelector((state) => state.personaReducer).user;
    const checkSections = useAppSelector((state) => state.task1InfoReducer);
    const { info, job, experience, education, skills } = data[user];

    const userPhoto = [photoPerson0, photoPerson1, photoPerson2]

    const openTask = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        const elem = target.closest(`.${style.section__item}`) as HTMLElement;
        if (!elem) return
        const dataInfo = elem.dataset.id;
        if (!dataInfo) return;
        changeInfoTask(dataInfo)
        console.log(dataInfo);

    }

    return (
        <div className={style.wrapper + " wrapper"}>
            <img src={bgCircle} alt="" className={style.bgCircle} />
            <img src={bgCircle2} alt="" className={style.bgCircle2} />
            <img src={bgStart} alt="" className={style.bgStart} />
            <img src={bgTomato} alt="" className={style.bgTomato} />
            <img src={bgSheet} alt="" className={style.bgSheet} />
            <div className={style.head}>
                <div className={style.head__info}>
                    <div className={style.infoIcon}>
                        <img src={urlIconInfo} alt="info" />
                    </div>
                    <p className={style.info__text}>Загляни в каждый раздел<br />и заполни его, нажав на плюсик.</p>
                </div>
                <Profile></Profile>

            </div>
            <div className={style.section + " " + ((Object.values(checkSections).filter((item) => item)).length !== 0 ? style.check : "")} onClick={openTask}>
                <div className={style.section__item + " " + style.personInfo + " " + (checkSections.info ? style.check : "")} data-id={arrNameQuestion[0]}>
                    <div className={style.section__head}>Личная и контактная информация</div>
                    <div className={style.section__content + " " + (checkSections.info ? style.check : "")}>
                        <img src={urlPlusYellow} className={style.plus} alt="plus" />
                        {/* Стажёр-химик в пищевой промышленности */}
                        {checkSections.info && <ul className={style.list}>
                            {info.text.map((item, index) => <li key={index}>
                                <span>  {item}</span>
                            </li>)}
                        </ul>
                        }

                    </div>
                </div>
                <div className={style.section__item + " " + (checkSections.job ? style.check : "")} data-id={arrNameQuestion[1]}>
                    <div className={style.section__head}>Желаемая должность</div>
                    <div className={style.section__content + " " + (checkSections.job ? style.check : "")}>
                        <img src={urlPlusYellow} className={style.plus} alt="plus" />
                        {checkSections.job && job.text}

                    </div>
                </div>
                <div className={style.section__item + " " + style.personPhoto + " " + (checkSections.photo ? style.check : "")} data-id={arrNameQuestion[2]}>
                    <div className={style.section__head}>Фото</div>
                    <div className={style.section__content}>
                        <img src={urlPlusYellow} className={style.plus} alt="plus" />
                        <img src={userPhoto[user]} alt="photo" className={style.photo} />
                    </div>
                </div>
                <div className={style.section__item + " " + style.personEducation + " " + (checkSections.education ? style.check : "")} data-id={arrNameQuestion[3]}>
                    <div className={style.section__head}>Образование и дополнительные курсы</div>
                    <div className={style.section__content + " " + (checkSections.education ? style.check : "")}>
                        <img src={urlPlusBlue} className={style.plus} alt="plus" />
                        {checkSections.education && <ul className={style.list}>
                            {education.text.map((item, index) => <li key={index}>
                                <span>  {item}</span>
                            </li>)}
                        </ul>
                        }
                    </div>

                </div>
                <div data-id={arrNameQuestion[4]} className={style.section__item + " " + style.personExper + " " + (checkSections.experience ? style.check : "")}>
                    <div className={style.section__head}>Опыт работы</div>
                    <div className={style.section__content + " " + (checkSections.experience ? style.check : "")}>
                        <img src={urlPlusRed} className={style.plus} alt="plus" />
                        {checkSections.experience && <ul className={style.list}>
                            {experience.text.map((item, index) => {
                                if (index === 2) return <li key={index}> <span>{item}</span>
                                    <ul className={style.list + " " + style.listSecond}>
                                        {experience.textIN.map((i, j) =>
                                            <li key={j}>
                                                <span>{i}</span>
                                            </li>)
                                        }
                                    </ul>
                                </li>
                                return <li key={index}>
                                    <span>  {item}</span>
                                </li>
                            })}
                        </ul>
                        }
                    </div>
                </div>
                <div data-id={arrNameQuestion[5]} className={style.section__item + " " + style.personSkills + " " + (checkSections.skills ? style.check : "")}>
                    <div className={style.section__head}>Навыки</div>
                    <div className={style.section__content + " " + (checkSections.skills ? style.check : "")}>
                        <img src={urlPlusMiamie} className={style.plus} alt="plus" />
                        {checkSections.skills && <ul className={style.list + " " + (user === 2 ? style.listMenLast : "")}>
                            {skills.text.map((item, index) => <li key={index}>
                                <span>  {item}</span>
                            </li>)}
                        </ul>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Screen5Info;