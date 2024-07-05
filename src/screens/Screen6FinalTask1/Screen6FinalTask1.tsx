import { useAppDispatch } from "../../store/store";
import { setUser } from "../../store/reducers/personaReducer";
import { resetCheckSection } from "../../store/reducers/tasksInfoReducer";
import { resetStateAnswer } from "../../store/reducers/tasksUserAnswerReducer";

import style from "./Screen6FinalTask1.module.css"


interface IProps {
    changeScreen: () => void
}


function Screen6FinalTask1(props: IProps) {
    const { changeScreen } = props;

    const dispatch = useAppDispatch()

    const resetSettings = () => {
        dispatch(setUser(3))
        dispatch(resetCheckSection())
        dispatch(resetStateAnswer())
        changeScreen()
    }
    return (
        <div className={"wrapper " + style.wrapper}>
            <div className={style.modals}>
                <div className={style.modals__item}>
                    <div className={style.modals__text}>
                        Теперь ты можешь приступать<br />к поиску работы! Узнай больше о работе<br />в Kraft Heinz и карьерных перспективах<br />в компании.
                    </div>
                    <a href="https://fut.ru/kraftheinz/about" target="_blank" className={"btn " + style.btn}>Kraft Heinz</a>

                </div>
                <div className={style.modals__item}>
                    <div className={style.modals__text}>
                        Чтобы больше прокачаться в написании<br />резюме, ты можешь ещё потренироваться<br />и получить подарок от HR-команды<br />Kraft Heinz.
                    </div>
                    <button className={"btn btn_blue " + style.btn} onClick={resetSettings}>Продолжить</button>
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