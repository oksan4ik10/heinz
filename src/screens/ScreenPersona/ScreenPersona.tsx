import ScreenBlur from "../../components/ScreenBlur/ScreenBlur";
import style from "./ScreenPersona.module.css"

import { useAppDispatch, useAppSelector } from "../../store/store";
import { setIsScreen } from "../../store/reducers/screenPersonaReducser";

import ModalUser from "../../components/ModalUser/ModalUser";

function ScreenPersona() {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.personaReducer).user;
    return (
        <div className={"wrapper " + style.wrapper}>
            <ScreenBlur screen={true}>
                <div className={style.modal}>
                    <ModalUser user={user} />
                    <button className={"btn " + style.btn} onClick={() => dispatch(setIsScreen(false))}>Назад</button>
                </div>

            </ScreenBlur>
        </div>

    );
}

export default ScreenPersona;