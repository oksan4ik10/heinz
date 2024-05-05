
import style from "./Screen6FinalTask1.module.css"


interface IProps {
    changeScreen: () => void
}


function Screen6FinalTask1(props: IProps) {
    const { changeScreen } = props;
    return (
        <div className={"wrapper " + style.wrapper}>
            <div className={style.modals}>
                <div className={style.modals__item}>
                    <div className={style.modals__text}>
                        Теперь твоя очередь — отправь своё резюме<br />и попади на стажировку мечты в Kraft Heinz,<br />где производят всемирно известные<br />кетчупы и соусы.
                    </div>
                    <a href="http://vk.com" target="_blank" className={"btn " + style.btn}>Стажировка Kraft Heinz</a>
                </div>
                <div className={style.modals__item}>
                    <div className={style.modals__text}>
                        Чтобы больше прокачаться в написании<br />резюме, ты можешь ещё потренироваться<br />и получить подарок от HR-команды<br />Kraft Heinz.
                    </div>
                    <button className={"btn btn_blue " + style.btn} onClick={changeScreen}>Продолжить</button>
                </div>
                <div className={style.modals__item}>
                    <div className={style.modals__text}>
                        А ещё больше компаний, куда можно подать<br />своё резюме, ты можешь найти в каталоге<br />стажировок FutureToday.

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Screen6FinalTask1;