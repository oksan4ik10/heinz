import style from "./TestPhoto.module.css"

import urlPhoto1 from "../../assets/photosTest/1men-1.png"
import urlPhoto2 from "../../assets/photosTest/1men-2.png"
import { useState } from "react"

function TestPhoto() {
    const [isChecked, setIsChecked] = useState("")

    const clickBtn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isChecked) return
        console.log(isChecked);//функция для записи ответа
    }
    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.value)
    }
    return (
        <>
            <form onSubmit={clickBtn} className={style.form}>
                <div className={style.photosWrapper}>
                    <div className={style.photos}>
                        <div className={style.photos__item}>
                            <input type="radio" name="photo" id="photo1" className={style.inputRadio1 + " " + style.inputRadio} value={"0"} checked={isChecked === "0"} onChange={changeInput} />
                            <label htmlFor="photo1" >
                                <div className={style.wrapImg}>
                                    <img src={urlPhoto1} alt="photo3" />
                                </div>

                            </label>
                        </div>
                        <div className={style.photos__item}>
                            <input type="radio" name="photo" id="photo2" className={style.inputRadio} value={"1"} checked={isChecked === "1"} onChange={changeInput} />
                            <label htmlFor="photo2">
                                <div className={style.wrapImg}>
                                    <img src={urlPhoto2} alt="photo3" />
                                </div>

                            </label>
                        </div>
                        <div className={style.photos__item}>
                            <input type="radio" name="photo" id="photo3" className={style.inputRadio} value={"2"} checked={isChecked === "2"} onChange={changeInput} />
                            <label htmlFor="photo3" >
                                <div className={style.wrapImg}>
                                    <img src={urlPhoto2} alt="photo3" />
                                </div>

                            </label>
                        </div>
                        <div className={style.photos__item}>
                            <input type="radio" name="photo" id="photo4" className={style.inputRadio} value={"3"} checked={isChecked === "3"} onChange={changeInput} />
                            <label htmlFor="photo4" >
                                <div className={style.wrapImg}>
                                    <img src={urlPhoto1} alt="photo3" />
                                </div>

                            </label>
                        </div>
                    </div>
                </div>
                <button className={"btn " + style.btn + (isChecked ? "" : " btn_grey")}>Выбрать</button>
            </form>

        </>
    );
}

export default TestPhoto;