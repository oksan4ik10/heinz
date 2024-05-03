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
                <div>
                    <input type="radio" name="info" id="photo1" className={style.inputRadio} value={"photo1"} checked={isChecked === "photo1"} onChange={changeInput} disabled={true} />
                    <label htmlFor="photo1" className={style.answers__item}>Стажёр</label>
                </div>
                <div>

                    <input type="radio" name="info" id="photo2" className={style.inputRadio} value={"photo2"} checked={isChecked === "photo2"} onChange={changeInput} />
                    <label htmlFor="photo2" className={style.answers__item + " " + style.success}>Стажёр</label>

                </div>



            </div>
            <button className={"btn " + style.btn + (isChecked ? "" : " btn_grey")}>Выбрать</button>
        </form>


    );
}

export default Test;