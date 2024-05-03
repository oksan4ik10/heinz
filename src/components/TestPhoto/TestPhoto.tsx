import style from "./TestPhoto.module.css"

import urlPhoto1 from "../../assets/photosTest/1men-1.png"
import urlPhoto2 from "../../assets/photosTest/1men-2.png"
import { useState } from "react"

function TestPhoto() {
    const [isChecked, setIsChecked] = useState("")
    console.log(isChecked);


    const clickBtn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = new FormData(form);
        let valueTest = ""
        for (const value of data.values()) {
            valueTest = value as string
        }
        if (!valueTest) return
        console.log(valueTest);//функция для записи ответа


    }
    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.value)
    }
    return (
        <>
            <form onSubmit={clickBtn}>
                <div className={style.photosWrapper}>
                    <div className={style.photos}>
                        <input type="radio" name="photo" id="photo1" className={style.inputRadio1 + " " + style.inputRadio} value={"photo1"} checked={isChecked === "photo1"} onChange={changeInput} />
                        <label htmlFor="photo1" className={style.photos__item + " " + style.label1}>
                            <div className={style.wrapImg}>
                                <img src={urlPhoto1} alt="photo3" />
                            </div>

                        </label>
                        <input checked={isChecked === "photo2"} onChange={changeInput} type="radio" name="photo" id="photo2" className={style.inputRadio2 + " " + style.inputRadio} value={"photo2"} />
                        <label htmlFor="photo2" className={style.photos__item + " " + style.label2}>
                            <div className={style.wrapImg}>
                                <img src={urlPhoto2} alt="photo3" />
                            </div>

                        </label>
                        <input checked={isChecked === "photo3"} onChange={changeInput} type="radio" name="photo" id="photo3" className={style.inputRadio3 + " " + style.inputRadio} value={"photo3"} />
                        <label htmlFor="photo3" className={style.photos__item + " " + style.label3}>
                            <div className={style.wrapImg}>
                                <img src={urlPhoto2} alt="photo3" />
                            </div>

                        </label>
                        <input checked={isChecked === "photo4"} onChange={changeInput} type="radio" name="photo" id="photo4" className={style.inputRadio4 + " " + style.inputRadio} value={"photo4"} />
                        <label htmlFor="photo4" className={style.photos__item + " " + style.label4}>
                            <div className={style.wrapImg}>
                                <img src={urlPhoto2} alt="photo3" />
                            </div>

                        </label>
                    </div>
                </div>
                <button className={"btn " + style.btn + (isChecked ? "" : " btn_grey")}>Выбрать</button>
            </form>

        </>
    );
}

export default TestPhoto;