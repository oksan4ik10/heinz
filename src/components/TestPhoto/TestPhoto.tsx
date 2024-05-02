import style from "./TestPhoto.module.css"

import urlPhoto1 from "../../assets/photosTest/1men-1.png"
import urlPhoto2 from "../../assets/photosTest/1men-2.png"

function TestPhoto() {
    return (
        <div className={style.photosWrapper}>


            <div className={style.photos}>
                <div className={style.photos__item}>
                    <div className={style.wrapImg}>
                        <img src={urlPhoto1} alt="photo3" />
                    </div>

                </div>
                <div className={style.photos__item}>
                    <div className={style.wrapImg}>
                        <img src={urlPhoto2} alt="photo3" />
                    </div>

                </div>
                <div className={style.photos__item}>
                    <div className={style.wrapImg}>
                        <img src={urlPhoto2} alt="photo3" />
                    </div>

                </div>
                <div className={style.photos__item}>
                    <div className={style.wrapImg}>
                        <img src={urlPhoto2} alt="photo3" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default TestPhoto;