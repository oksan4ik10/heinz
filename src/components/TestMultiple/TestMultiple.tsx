import { useEffect, useState } from "react";
import style from "./TestMultiple.module.css"
import ScreenBlur from "../ScreenBlur/ScreenBlur";
import Modal from "../Modal/Modal";

import { IPropsTask1Test } from "../../models/type";

import { useAppDispatch } from "../../store/store";
import { setIsScroll } from "../../store/reducers/scrollReducer";

function TestMultiple(props: IPropsTask1Test) {

    const { answers, stateAnswer, stateUserArr, funcCheckUserAnswer, scrollWindow } = props;

    const dispatch = useAppDispatch();

    const [checked, setChecked] = useState<number[]>(stateUserArr)
    useEffect(() => {
        setChecked(stateUserArr)
    }, [stateUserArr])
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
        funcCheckUserAnswer(checked)
    }

    const [isModal, setIsModal] = useState(-1);
    const clickInfo = (i: number) => {

        setIsModal(i)
        dispatch(setIsScroll(false))

    }
    const closeModal = () => {
        setIsModal(-1)
        dispatch(setIsScroll(true))
        if (scrollWindow) scrollWindow();
    }



    return (
        <>
            <ScreenBlur screen={Boolean(isModal !== -1)}>
                <div className={"modal__start " + style.modalStart}>
                    <Modal border={false} btnText="Продолжить" text={isModal === -1 ? "" : answers[isModal].info} funcBtn={closeModal}></Modal>
                </div>
            </ScreenBlur>
            <form onSubmit={clickBtn} className={style.form}>
                <div className={style.answers}>
                    {answers.map((item, index) => <div key={index} className={style.infoElem}>
                        <input type="checkbox" name={`check${index}`} id={`item${index}`} className={style.inputCheck + " " + style.inputRadio} checked={checked.indexOf(index) !== -1} onChange={() => changeInput(index)} disabled={stateAnswer !== "wait" ? true : false} />
                        <label htmlFor={`item${index}`} className={style.answers__item + " " + ((stateAnswer === "wait" || (stateUserArr.indexOf(index) === -1)) ? "" : (stateUserArr.indexOf(index) !== -1 && item.isWin) ? style.success : style.error) + " " + (((stateAnswer === "errorMiddle") && (item.isWin) && (stateUserArr.indexOf(index) === -1)) ? style.middle : "")}>
                            <div className={style.answer__wrapper}>
                                <span className={style.square}></span>
                                <span dangerouslySetInnerHTML={{ __html: item.text }}></span>

                            </div>
                        </label>
                        {item.info && <span className={style.info} onClick={() => clickInfo(index)}>
                            {/* <img src={urlInfoIcon} alt="info" /> */}
                        </span>}
                    </div>)}




                </div>
                {stateAnswer === "wait" && <button className={"btn " + style.btn + (checked.length !== 0 ? "" : " btn_grey")}>Выбрать</button>}

            </form>
        </>
    );
}

export default TestMultiple;