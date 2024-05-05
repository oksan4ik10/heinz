import style from "./Screen1.module.css"

import urlLogo from "../../assets/1logo.png"
import urlLogoPhoto from "../../assets/1photo-logo.png"
import urlResume from "../../assets/1photo.png"
import urlHeinz from "../../assets/1heinz.png"
import urlArrow from "../../assets/bg-items/1bg-arrow.svg"
import urlStar from "../../assets/bg-items/1bg-star.svg"
import urlLine from "../../assets/bg-items/1bg-line.png"

interface IProps {
    changeScreen: () => void
}

function Screen1(props: IProps) {
    const { changeScreen } = props;

    return (
        <div className={"wrapper " + style.wrapper}>
            <section className={style.sectionInfo}>
                <header className={style.header}>
                    <div className={style.logo}> <img src={urlLogo} alt="logo" /></div>
                    <div className={style.logoPhoto}><img src={urlLogoPhoto} alt="logoPhoto" /></div>
                </header>
                <div className={style.sectionInfo__text}>
                    <p className={style.text}>
                        У кетчупа&nbsp;и резюме есть много общего, например, проверенный временем&nbsp;рецепт.

                    </p>
                    <p className={style.text}>
                        Научись подбирать идеальные ингредиенты, которые точно придутся по вкусу любому рекрутеру, вместе с&nbsp;Kraft Heinz.
                    </p>
                </div>

            </section>
            <button className={"btn " + style.btn} onClick={changeScreen}>Приступить</button>
            <section className={style.sectionPhoto}>
                <div className={style.photoTomate}>
                    <img src={urlStar} alt="heinz" className={style.star} />
                    <div className={style.photoTomate__wrapper}>
                        <img src={urlArrow} alt="arrow" className={style.arrow} />
                        <img src={urlHeinz} alt="heinz" className={style.heinz} />

                    </div>

                </div>
                <div className={style.photoResume}>
                    <div className={style.photoResume__wrapper}>
                        <img src={urlResume} alt="resume" className={style.resume} />
                        <img src={urlLine} alt="line" className={style.line} />
                    </div>

                </div>
            </section>

        </div>
    );
}

export default Screen1;