import { useState } from "react";
import style from "./TestMultiple.module.css"
function TestMultiple() {
    const [checked, setChecked] = useState<number[]>([0])
    const changeInput = (c: number) => {
        const clickedCategory = checked.indexOf(c);
        const all = [...checked];

        if (clickedCategory === -1) {
            all.push(c);
        } else {
            all.splice(clickedCategory, 1);
        }
        setChecked(all);

    };

    const clickBtn = (e: React.FormEvent<HTMLFormElement>) => {
        if (checked.length === 0) return
        e.preventDefault();
        console.log(checked);

    }


    return (
        <form onSubmit={clickBtn}>
            <div className={style.answers}>
                <div>
                    <input type="checkbox" name="info1" id="photo1" className={style.inputCheck + " " + style.inputRadio} checked={checked.indexOf(0) !== -1} onChange={() => changeInput(0)} />
                    <label htmlFor="photo1" className={style.answers__item + " " + style.label1}>
                        <div className={style.answer__wrapper}>
                            <span className={style.square}></span>
                            <span>Что следует</span>
                        </div>
                    </label>
                </div>
                <div>
                    <input type="checkbox" name="info2" id="photo2" className={style.inputCheck + " " + style.inputRadio} checked={checked.indexOf(1) !== -1} onChange={() => changeInput(1)} />
                    <label htmlFor="photo2" className={style.answers__item + " " + style.success}>
                        <div className={style.answer__wrapper}>
                            <span className={style.square}></span>
                            <span>Что следует указать в контактной информации в резюме? Выбери несколько пунктов:</span>
                        </div>
                    </label>
                </div>


            </div>
            <button className={"btn " + style.btn + (checked.length !== 0 ? "" : " btn_grey")}>Выбрать</button>

        </form>
    );
}

export default TestMultiple;