import style from "./TestPhoto.module.css"

import urlPhoto1 from "../../assets/photosTest/1men-1.png"
// import urlPhoto2 from "../../assets/photosTest/1men-2.png"
import { useState } from "react"
import { IPropsTask1Test } from "../../models/type"

function TestPhoto(props: IPropsTask1Test) {


    const { answers, stateAnswer, stateUserArr, funcCheckUserAnswer } = props;
    const [isChecked, setIsChecked] = useState(stateUserArr[0] + "")

    const clickBtn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isChecked) return
        funcCheckUserAnswer([+isChecked])

    }
    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.value)
    }

    return (
        <>
            <form onSubmit={clickBtn} className={style.form}>
                <div className={style.photosWrapper}>
                    <div className={style.photos}>
                        {answers.map((item, index) => <div key={index} className={style.photos__item}>
                            <input type="radio" name="photo" id={`item${index}`} className={style.inputRadio} value={index} checked={((isChecked !== "") && (+isChecked === index) && (stateAnswer === "wait"))} onChange={changeInput} disabled={stateAnswer !== "wait" ? true : false} />
                            <label htmlFor={`item${index}`} className={((stateAnswer === "wait" || (stateUserArr.indexOf(index) === -1)) ? "" : (stateUserArr.indexOf(index) !== -1 && item.isWin) ? style.success : style.error)} >
                                <div className={style.wrapImg}>
                                    <img src={urlPhoto1} alt="photo3" />
                                </div>

                            </label>
                        </div>)}

                    </div>
                </div>
                {stateAnswer === "wait" && <button className={"btn " + style.btn + (isChecked ? "" : " btn_grey")}>Выбрать</button>}
            </form>

        </>
    );
}

export default TestPhoto;