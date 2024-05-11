import style from "./Screen8.module.css"
import urlLogo from "../../assets/1logo.png"
import urlLogoPhoto from "../../assets/1photo-logo.png"

interface IProps {
    changeScreen: () => void
}
function Screen8(props: IProps) {
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
                        Наша тренировка подошла к концу!<br />Теперь ты умеешь не только<br />составлять идеальное резюме,<br />но и находить ошибки в чужих.<br />Мы с Kraft Heinz дарим тебе шаблон<br />для резюме! Оно будет не только<br />грамотно составленным,<br />но и красивым ❤️
                    </p>
                    <a href="http://vk.com" target="_blank" className={"btn " + style.link}>Открыть шаблон</a>
                    <button className="btn btn_darkBlue" onClick={changeScreen}>Далее</button>
                </div>

            </section></div>
    );
}

export default Screen8;