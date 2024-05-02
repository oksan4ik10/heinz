import style from "./Screen5.module.css"
import Profile from "../../components/Profile/Profile";

import urlIconInfo from "../../assets/infoIcons.svg"
import urlPlusYellow from "../../assets/5yellowPlus.svg"
import urlPlusBlue from "../../assets/5bluePlus.svg"
import urlPlusRed from "../../assets/5redPlus.svg"
import urlPlusMiamie from "../../assets/5miamiePlus.svg"

import photoMen from "../../assets/5photoMen.png"


function Screen5() {
    return (
        <div className={style.wrapper + " wrapper"}>
            <div className={style.head}>
                <div className={style.head__info}>
                    <div className={style.infoIcon}>
                        <img src={urlIconInfo} alt="info" />
                    </div>
                    <p className={style.info__text}>Загляни в каждый раздел<br />и заполни его, нажав на плюсик.</p>
                </div>
                <Profile></Profile>

            </div>
            <div className={style.section + " " + style.check}>
                <div className={style.section__item + " " + style.personInfo + " " + style.check} >
                    <div className={style.section__head}>Личная и контактная информация</div>
                    <div className={style.section__content + " " + style.check}>
                        <img src={urlPlusYellow} className={style.plus} alt="plus" />
                        {/* Стажёр-химик в пищевой промышленности */}
                        <ul className={style.list}>
                            <li>
                                <span>  Приоритетный способ:</span>

                            </li>
                            <li>
                                <span>  Приоритетный способ :</span>

                            </li>
                            <li>
                                <span>  Приоритетный способ:</span>

                            </li>
                            <li>
                                <span>  Приоритетный способ связи: Telegram/WhatsApp</span>

                            </li>

                        </ul>
                    </div>
                </div>
                <div className={style.section__item + " " + style.personJob}>
                    <div className={style.section__head}>Желаемая должность</div>
                    <div className={style.section__content}>
                        <img src={urlPlusYellow} className={style.plus} alt="plus" />

                    </div>
                </div>
                <div className={style.section__item + " " + style.personPhoto + " " + style.check}>
                    <div className={style.section__head}>Фото</div>
                    <div className={style.section__content}>
                        <img src={urlPlusYellow} className={style.plus} alt="plus" />
                        <img src={photoMen} alt="photo" className={style.photo} />
                    </div>
                </div>
                <div className={style.section__item + " " + style.personEducation}>
                    <div className={style.section__head}>Образование и дополнительные курсы</div>
                    <div className={style.section__content}>
                        <img src={urlPlusBlue} className={style.plus} alt="plus" />
                    </div>
                </div>
                <div className={style.section__item + " " + style.personExper + " " + style.check}>
                    <div className={style.section__head}>Опыт работы</div>
                    <div className={style.section__content + " " + style.check}>
                        <img src={urlPlusRed} className={style.plus} alt="plus" />
                        <ul className={style.list}>
                            <li>
                                <span>Приоритетный способ связи: Telegram/WhatsApp</span>
                            </li>
                            <li> <span>Приоритетный способ связи: Telegram/WhatsApp</span>
                                <ul className={style.list + " " + style.listSecond}>
                                    <li>
                                        <span>TEST</span>
                                    </li>
                                    <li>
                                        <span>TEST</span>
                                    </li>
                                    <li>
                                        <span>TEST</span>
                                    </li></ul>
                            </li>
                            <li> <span>Приоритетный способ связи: Telegram/WhatsApp</span></li>
                            <li> <span>Приоритетный способ связи: Telegram/WhatsApp</span></li>

                        </ul>
                    </div>
                </div>
                <div className={style.section__item + " " + style.personInfo + " " + style.check}>
                    <div className={style.section__head}>Навыки</div>
                    <div className={style.section__content + " " + style.check}>
                        <img src={urlPlusMiamie} className={style.plus} alt="plus" />
                        <ul className={style.list + " " + style.listMenLast}>
                            <li>
                                <span>  Приоритетный способ:</span>

                            </li>
                            <li>
                                <span>  Приоритетный способ :</span>

                            </li>
                            <li>
                                <span>  Приоритетный способ:</span>

                            </li>
                            <li>
                                <span>  Приоритетный способ связи: Telegram/WhatsApp</span>

                            </li>
                            <li>
                                <span>  Приоритетный способ:</span>

                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Screen5;