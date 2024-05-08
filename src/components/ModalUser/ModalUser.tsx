

import style from "./ModalUser.module.css"


import urlPhoto1 from "../../assets/personsInfo/1.png"
import urlIcon1 from "../../assets/personsInfo/1icons.svg"
import urlPhoto2 from "../../assets/personsInfo/2.png"
import urlIcon2 from "../../assets/personsInfo/2icons.svg"
import urlPhoto3 from "../../assets/personsInfo/3.png"
import urlIcon3 from "../../assets/personsInfo/3icons.svg"
import urlPhoto4 from "../../assets/personsInfo/4.png"
import urlIcon4 from "../../assets/personsInfo/4icons.svg"

import dataUsers from "../../data/personaScreen.json"

interface IProps {
    user: number;
    padding?: boolean
}


const imgArr = [{
    img: urlPhoto1, icon: urlIcon1
}, { img: urlPhoto2, icon: urlIcon2 }, { img: urlPhoto3, icon: urlIcon3 }, { img: urlPhoto4, icon: urlIcon4 }
]
function ModalUser(props: IProps) {
    const { user, padding } = props;


    const data = dataUsers[user]
    const images = imgArr[user]


    return (
        <div className={style.modal + " " + (padding ? style.modalFirst : "")}>
            <h3 className={style.modal__name}>{data.name}</h3>
            <p className={style.modal__text} dangerouslySetInnerHTML={{ __html: data.education }}></p>
            <div className={style.modal__img}>
                <img src={images.img} alt="photo" />
            </div>
            <ul className={style.modal__list}>
                {data.skills.map((item, index) => <li key={index} className={style.list__item}>
                    <span className={style.icon}><img src={images.icon} alt="icon" /></span>
                    <span className={style.modal__text} dangerouslySetInnerHTML={{ __html: item }}></span>
                </li>)}
            </ul>


        </div>
    );
}

export default ModalUser;