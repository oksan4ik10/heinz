import style from "./Screen9.module.css"
import urlLogo from "../../assets/1logo.png"



function Screen9() {

    return (
        <div className={"wrapper " + style.wrapper}>
            <section className={style.sectionInfo}>
                <header className={style.header}>
                    <div className={style.logo}> <img src={urlLogo} alt="logo" /></div>

                </header>
                <div className={style.sectionInfo__text}>
                    <p className={style.text}>
                        Пришло время отправлять своё<br />идеальное резюме в компанию мечты!<br />Если ты хочешь работать<br />на производстве, переходи на сайт<br />Kraft Heinz и подавай заявку<br />на&nbsp;стажировку.
                    </p>
                    <a href="http://vk.com" target="_blank" className={"btn " + style.link}>Стажировка Kraft Heinz</a>
                    <p className={style.text}>
                        А посмотреть варианты для других<br />направлений ты можешь в каталоге<br />стажировок FutureToday.
                    </p>
                    <p className={style.text}>
                        До новых встреч и удачи в&nbsp;поиске работы!
                    </p>

                </div>

            </section></div>
    );
}

export default Screen9;