import style from "./Profile.module.css"
import urlPhoto from "../../assets/photo1-icon.png"

import { useAppDispatch } from "../../store/store";
import { setIsScreen } from "../../store/reducers/screenPersonaReducser";

const Profile = () => {

    const dispatch = useAppDispatch();

    return (
        <div className={style.person} onClick={() => dispatch(setIsScreen(true))}>
            <img src={urlPhoto} alt="photo" />

        </div>
    );
};

export default Profile;