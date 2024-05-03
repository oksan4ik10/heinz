import style from "./Screen5Test.module.css"
interface IProps {
    infoSection: string;
}

import Profile from "../../components/Profile/Profile";
// import Modal from "../../components/Modal/Modal";

import urlArrow from "../../assets/5arrow-prev.svg"
import urlInfoIcon from "../../assets/infoIcons.svg"

import bgStart from "../../assets/5bg-starTest.svg"
import bgCircle from "../../assets/5bg-circleTest.svg"
import bgCircle2 from "../../assets/5bg-circle2Test.svg"
import bgTomato from "../../assets/5bg-tomatoTest.png"
import bgTomato2 from "../../assets/5bg-tomatoTest2.png"
import bgSheet from "../../assets/5bg-sheetTest.png"

// import TestPhoto from "../../components/TestPhoto/TestPhoto";
// import Test from "../../components/Test/Test";
import TestMultiple from "../../components/TestMultiple/TestMultiple";
function Screen5Test(props: IProps) {
    const { infoSection } = props;
    console.log(infoSection);

    return (
        <div className={style.wrapper + " wrapper"}>
            <img src={bgCircle} alt="circle" className={style.bgCircle} />
            <img src={bgCircle2} alt="circle" className={style.bgCircle2} />
            <img src={bgStart} alt="star" className={style.bgStart} />
            <img src={bgTomato} alt="tomato" className={style.bgTomato} />
            <img src={bgTomato2} alt="tomato" className={style.bgTomato2} />
            <img src={bgSheet} alt="sheet" className={style.bgSheet} />
            <div className={style.head}>
                <div className={style.arrow}>
                    <img src={urlArrow} alt="arrow" />
                </div>
                <Profile></Profile>
            </div>
            <div className={style.question}>
                <img src={urlInfoIcon} alt="icon" />
                <p className={style.question__text}>Выбери, какой из этих вариантов [имя] стоит вписать в раздел «Желаемая должность»:</p>
            </div>
            <TestMultiple></TestMultiple>
            {/* <TestPhoto></TestPhoto> */}
            {/* <Test></Test> */}


            {/* <Modal border={true} btnText="Выбрать заново" text="блаблаблаблаблабла" funcBtn={() => console.log(23)
            } /> */}



        </div>
    );
}

export default Screen5Test;