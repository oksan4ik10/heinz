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
                        Теперь пришло время составить<br />своё резюме и отправить его<br />в компанию мечты!
                    </p>
                    <p className={style.text}>
                        Если тебе интересны карьерные перспективы<br />в Kraft Heinz, то переходи<br />на cайт и узнавай больше<br />о работе в компании.
                    </p>
                    <a href="https://fut.ru/programs/kraftheinz_gmtp/" target="_blank" className={"btn " + style.link}>Kraft Heinz</a>
                    <p className={style.text}>
                        А посмотреть информацию о стажировках<br />в других компаниях ты сможешь<br />на сайте <a className={style.textLink} href=" https://fut.ru/" target="_blank">FutureToday</a>

                    </p>
                    <p className={style.text + " " + style.text2}>
                        До новых встреч и удачи в&nbsp;поиске работы!
                    </p>

                </div>

            </section></div>
    );
}

export default Screen9;