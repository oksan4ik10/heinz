import style from "./Profile.module.css"
import urlPhoto1 from "../../assets/photo1-icon.png"
import urlPhoto2 from "../../assets/photo2-icon.png"
import urlPhoto3 from "../../assets/photo3-icon.png"
import urlPhoto4 from "../../assets/photo4-icon.png"

import { useAppDispatch, useAppSelector } from "../../store/store";
import { setIsScreen } from "../../store/reducers/screenPersonaReducser";


const arrPhotos = [urlPhoto1, urlPhoto2, urlPhoto3, urlPhoto4]

const Profile = () => {

    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.personaReducer).user;
    const photo = arrPhotos[user]

    return (
        <div className={style.person} onClick={() => dispatch(setIsScreen(true))}>
            <img src={photo} alt="photo" className={user === 1 ? style.person2 : ""} />

        </div>
    );
};

export default Profile;