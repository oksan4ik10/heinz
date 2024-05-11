import style from "./Modal.module.css"

interface IProps {
    text: string;
    btnText: string;
    funcBtn: () => void;
    border: boolean;
    minFont?: boolean;

}



function Modal(props: IProps) {
    const { border, text, funcBtn, btnText, minFont } = props;
    const clickBtn = () => {
        funcBtn()
    }
    return (
        <div className={style.modal + " " + (border ? style.border : "")}>
            <div className={style.modal__text + " " + (minFont ? style.fontText : "")} dangerouslySetInnerHTML={{ __html: text }}></div>
            <button className={"btn " + style.btn} onClick={clickBtn}>{btnText}</button>
        </div>
    );
}

export default Modal;