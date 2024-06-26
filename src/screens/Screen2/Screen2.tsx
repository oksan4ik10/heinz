import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/effect-coverflow';


import style from "./Screen2.module.css"
import urlIcon from "../../assets/infoIcons.svg"

import ModalUser from "../../components/ModalUser/ModalUser";
import SlideNextButton from '../../components/BtnSlider/BtnSlider';
import { useState } from 'react';

import { useAppDispatch } from '../../store/store';
import { setUser } from '../../store/reducers/personaReducer';


interface IProps {
    changeScreen: () => void
}
function Screen2(props: IProps) {
    const { changeScreen } = props;

    const dispatch = useAppDispatch();

    const arrUser = [1, 2, 0]
    const [activeIndex, setActiveIndex] = useState(0);

    const checkPerson = () => {


        dispatch(setUser(arrUser[activeIndex]))
        changeScreen()
    }



    return <>
        <div className={"wrapper " + style.infoText}>
            <img src={urlIcon} alt="info" />
            <p className={style.text}>Для каждой позиции резюме должно быть разным.<br />Выбери персонажа, вместе с которым ты будешь его составлять:</p>
        </div>
        <div className={style.carusel}>
            <Swiper
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex)
                }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}

                centeredSlidesBounds={false}
                slidesPerView={window.innerWidth >= 600 ? 1.5 : 1.23}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    scale: .9,
                    slideShadows: false,
                }}

                watchSlidesProgress={true}
                initialSlide={2}
                loop={true}
                modules={[EffectCoverflow, Navigation]}
                className="mySwiper"
            >
                {arrUser.map((item, index) =>
                    <SwiperSlide key={index}>
                        <ModalUser padding={true} key={item} user={item}></ModalUser>
                    </SwiperSlide>

                )}

                <SlideNextButton activeIndex={activeIndex}></SlideNextButton>
                <button className={"btn " + style.btn} onClick={checkPerson}>Выбрать</button>
            </Swiper>



        </div >


    </>


}

export default Screen2;