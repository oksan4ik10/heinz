import ScreenBlur from "../../components/ScreenBlur/ScreenBlur";
import style from "./ScreenPersona.module.css"

import { useAppDispatch } from "../../store/store";
import { setIsScreen } from "../../store/reducers/screenPersonaReducser";

function ScreenPersona() {
    const dispatch = useAppDispatch();
    return (
        <div className={"wrapper " + style.wrapper}>
            <ScreenBlur screen={true}>
                <p>TEST</p>
                <button className="btn" onClick={() => dispatch(setIsScreen(false))}>Назад</button>
            </ScreenBlur>
        </div>

    );
}

export default ScreenPersona;