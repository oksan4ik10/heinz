import style from "./TestPhoto.module.css"

import urlPhoto1 from "../../assets/photosTest/1men-1.png"
import urlPhoto2 from "../../assets/photosTest/1men-2.png"
import urlPhoto3 from "../../assets/photosTest/1men-3.png"
import urlPhoto4 from "../../assets/photosTest/1men-4.png"
import urlPhoto5 from "../../assets/photosTest/2men-1.png"
import urlPhoto6 from "../../assets/photosTest/2men-2.png"
import urlPhoto7 from "../../assets/photosTest/2men-3.png"
import urlPhoto8 from "../../assets/photosTest/2men-4.png"
import urlPhoto9 from "../../assets/photosTest/3men-1.png"
import urlPhoto10 from "../../assets/photosTest/3men-2.png"
import urlPhoto11 from "../../assets/photosTest/3men-3.png"
import urlPhoto12 from "../../assets/photosTest/3men-4.png"
import { useState } from "react"
import { IPropsTask1Test } from "../../models/type"

function TestPhoto(props: IPropsTask1Test) {


    const { answers, stateAnswer, stateUserArr, funcCheckUserAnswer, user } = props;
    const [isChecked, setIsChecked] = useState(stateUserArr[0] + "")

    const clickBtn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isChecked) return
        funcCheckUserAnswer([+isChecked])

    }
    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.value)
    }


    const arrPhotos = [[urlPhoto1, urlPhoto2, urlPhoto3, urlPhoto4], [urlPhoto5, urlPhoto6, urlPhoto7, urlPhoto8], [urlPhoto9, urlPhoto10, urlPhoto11, urlPhoto12]]

    return (
        <>
            <form onSubmit={clickBtn} className={style.form}>
                <div className={style.photosWrapper}>
                    <div className={style.photos}>
                        {answers.map((item, index) => <div key={index} className={style.photos__item}>
                            <input type="radio" name="photo" id={`item${index}`} className={style.inputRadio} value={index} checked={((isChecked !== "") && (+isChecked === index) && (stateAnswer === "wait"))} onChange={changeInput} disabled={stateAnswer !== "wait" ? true : false} />
                            <label htmlFor={`item${index}`} className={((stateAnswer === "wait" || (stateUserArr.indexOf(index) === -1)) ? "" : (stateUserArr.indexOf(index) !== -1 && item.isWin) ? style.success : style.error)} >
                                <div className={style.wrapImg}>
                                    {item.info}
                                    <img src={arrPhotos[user ? user : 0][index]} alt={`photo${index}`} />
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