import style from "./ModalUser.module.css"

interface IProps {
    funcBtn: () => void;
}



function ModalUser(props: IProps) {
    const { funcBtn } = props;
    const clickBtn = () => {
        funcBtn()
    }
    return (
        <div className={style.modal}>
            <div className={style.modal__text} dangerouslySetInnerHTML={{ __html: "23" }}></div>
            <button className={"btn " + style.btn} onClick={clickBtn}>Назад</button>
        </div>
    );
}

export default ModalUser;