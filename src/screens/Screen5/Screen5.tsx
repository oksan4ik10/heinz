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

import photoMen from "../../assets/5photoMen.png"

import data from "../../data/screen5data.json"


function Screen5() {
    const { info, job, experience, education, photo, skills } = data[0];
    const index = 3; //для блока навыки для последнего персонажа

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
            <div className={style.section + " " + ((info.check || photo.check || job.check) ? style.check : "")}>
                <div className={style.section__item + " " + style.personInfo + " " + (info.check ? style.check : "")} >
                    <div className={style.section__head}>Личная и контактная информация</div>
                    <div className={style.section__content + " " + (info.check ? style.check : "")}>
                        <img src={urlPlusYellow} className={style.plus} alt="plus" />
                        {/* Стажёр-химик в пищевой промышленности */}
                        {info.check && <ul className={style.list}>
                            {info.text.map((item, index) => <li key={index}>
                                <span>  {item}</span>
                            </li>)}
                        </ul>
                        }

                    </div>
                </div>
                <div className={style.section__item + " " + (job.check ? style.check : "")}>
                    <div className={style.section__head}>Желаемая должность</div>
                    <div className={style.section__content + " " + (job.check ? style.check : "")}>
                        <img src={urlPlusYellow} className={style.plus} alt="plus" />
                        {job.check && job.text}

                    </div>
                </div>
                <div className={style.section__item + " " + style.personPhoto + " " + (photo.check ? style.check : "")}>
                    <div className={style.section__head}>Фото</div>
                    <div className={style.section__content}>
                        <img src={urlPlusYellow} className={style.plus} alt="plus" />
                        <img src={photoMen} alt="photo" className={style.photo} />
                    </div>
                </div>
                <div className={style.section__item + " " + style.personEducation + " " + (education.check ? style.check : "")}>
                    <div className={style.section__head}>Образование и дополнительные курсы</div>
                    <div className={style.section__content + " " + (education.check ? style.check : "")}>
                        <img src={urlPlusBlue} className={style.plus} alt="plus" />
                        {education.check && <ul className={style.list}>
                            {education.text.map((item, index) => <li key={index}>
                                <span>  {item}</span>
                            </li>)}
                        </ul>
                        }
                    </div>

                </div>
                <div className={style.section__item + " " + style.personExper + " " + (experience.check ? style.check : "")}>
                    <div className={style.section__head}>Опыт работы</div>
                    <div className={style.section__content + " " + (experience.check ? style.check : "")}>
                        <img src={urlPlusRed} className={style.plus} alt="plus" />
                        {experience.check && <ul className={style.list}>
                            {experience.text.map((item, index) => {
                                if (index === 2) return <li> <span>{item}</span>
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
                <div className={style.section__item + " " + style.personSkills + " " + (skills.check ? style.check : "")}>
                    <div className={style.section__head}>Навыки</div>
                    <div className={style.section__content + " " + (skills.check ? style.check : "")}>
                        <img src={urlPlusMiamie} className={style.plus} alt="plus" />
                        {skills.check && <ul className={style.list + " " + (index === 3 ? style.listMenLast : "")}>
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

export default Screen5;