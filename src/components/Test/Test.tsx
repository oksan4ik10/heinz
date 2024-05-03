import { useState } from "react";
import style from "./Test.module.css"
function Test() {
    const [isChecked, setIsChecked] = useState("")
    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.value)
    }

    const clickBtn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isChecked) return
        console.log(isChecked);//функция для записи ответа


    }

    return (
        <form onSubmit={clickBtn}>
            <div className={style.answers}>
                <input type="radio" name="info" id="photo1" className={style.inputRadio1 + " " + style.inputRadio} value={"photo1"} checked={isChecked === "photo1"} onChange={changeInput} />
                <label htmlFor="photo1" className={style.answers__item + " " + style.label1}>Стажёр</label>
                <input type="radio" name="info" id="photo2" className={style.inputRadio2 + " " + style.inputRadio} value={"photo2"} checked={isChecked === "photo1"} onChange={changeInput} />
                <label htmlFor="photo2" className={style.answers__item + " " + style.label2}>Стажёр</label>
                <input type="radio" name="info" id="photo3" className={style.inputRadio3 + " " + style.inputRadio} value={"photo3"} checked={isChecked === "photo1"} onChange={changeInput} />
                <label htmlFor="photo3" className={style.answers__item + " " + style.label3}>Стажёр</label>
            </div>
            <button className={"btn " + style.btn + (isChecked ? "" : " btn_grey")}>Выбрать</button>
        </form>


    );
}

export default Test;