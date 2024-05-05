
import { useAppSelector } from "../../store/store";
import style from "./Screen3.module.css"

import urlArrow from "../../assets/bg-items/3arrow.svg"

interface IProps {
    changeScreen: () => void
}

import Profile from "../../components/Profile/Profile";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

function Screen3(props: IProps) {
    const { changeScreen } = props;

    const arrNames = ["Сашей", "Юлей", "Мишей"]
    const user = useAppSelector((state) => state.personaReducer).user;

    const [isModal1, setIsModal1] = useState(true);

    return (
        <div className={"wrapper " + style.wrapper}>
            <div className={style.head}>
                <div className={style.profile__wrapper}>
                    <Profile></Profile>
                </div>
            </div>
            {isModal1 && <div className={style.modal1}>
                <Modal border={false} btnText="Далее" funcBtn={() => setIsModal1(false)} text={`Секрет вкуса кетчупа Heinz — в&nbsp; спелых<br/>томатах, а&nbsp;секрет идеального резюме&nbsp; —<br/>в&nbsp; понимании того, на&nbsp;что&nbsp;обращает внимание<br/>HR-специалист. Научись составлять резюме вместе с&nbsp;${arrNames[user]}.`}></Modal>

            </div>}
            {!isModal1 && <div className={style.modal2}>
                <div className={style.arrow}>
                    <img src={urlArrow} alt="arrow" />
                </div>
                <Modal border={false} btnText="Далее" funcBtn={changeScreen} text={`Чтобы ещё раз прочитать описание персонажа, нажми сюда`}></Modal>

            </div>}




        </div>
    );
}

export default Screen3;