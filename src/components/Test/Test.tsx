import { useState } from "react";
import style from "./Test.module.css"
import { IPropsTask1Test } from "../../models/type";


function Test(props: IPropsTask1Test) {
    const { answers, stateAnswer, stateUserArr, funcCheckUserAnswer } = props;

    const [isChecked, setIsChecked] = useState(stateUserArr[0] ? stateUserArr[0] + "" : "")
    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.value)
    }

    const clickBtn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isChecked) return
        funcCheckUserAnswer([+isChecked])
    }


    return (
        <form onSubmit={clickBtn} className={style.form}>
            <div className={style.answers}>
                {answers.map((item, index) =>
                    <div key={index}>
                        <input type="radio" name="info" id={`item${index}`} className={style.inputRadio} value={index} checked={((isChecked !== "") && (+isChecked === index) && (stateAnswer === "wait"))} onChange={changeInput} disabled={stateAnswer !== "wait" ? true : false} />
                        <label htmlFor={`item${index}`} className={style.answers__item + " " + ((stateAnswer === "wait" || (stateUserArr.indexOf(index) === -1)) ? "" : (stateUserArr.indexOf(index) !== -1 && item.isWin) ? style.success : style.error)} dangerouslySetInnerHTML={{ __html: item.text }}></label>
                    </div>
                )}




            </div>
            {stateAnswer === "wait" && <button className={"btn " + style.btn + (isChecked ? "" : " btn_grey")}>Выбрать</button>}
        </form>


    );
}

export default Test;