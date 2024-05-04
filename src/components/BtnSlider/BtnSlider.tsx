
import { useSwiper } from 'swiper/react';
import urlArrow from "../../assets/5arrow-prev.svg"

import style from "./BtnSlider.module.css"
import { useEffect } from 'react';

interface IProps {
    activeIndex: number
}

export default function SlideNextButton(props: IProps) {
    const { activeIndex } = props;
    const swiper = useSwiper();
    let slide = 0;
    useEffect(() => {

        if ((!activeIndex) && activeIndex !== 0) {
            slide = 0
            return
        }
        slide = (activeIndex === 2) ? 0 : activeIndex + 1
    })


    return (
        <div className={style.buttons}>
            <button className={style.arrow + " " + style.reviewNext} onClick={() => swiper.slidePrev()}>
                <img src={urlArrow} alt="arrow" />
            </button>
            <button className={style.arrow + " " + style.reviewPrev} onClick={() => swiper.slideToLoop(slide)}>
                <img src={urlArrow} alt="arrow" />
            </button>
        </div>


    );
}