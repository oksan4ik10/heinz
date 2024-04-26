import style from "./Profile.module.css"
import urlPhoto from "../../assets/photo1-icon.png"
const Profile = () => {
    return (
        <div className={style.person}>
            <img src={urlPhoto} alt="photo" />

        </div>
    );
};

export default Profile;