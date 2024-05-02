import style from "./Test.module.css"
function Test() {
    return (
        <div className={style.answers}>
            <div className={style.answers__item}>Стажёр</div>
            <div className={style.answers__item}>Стажёр</div>
            <div className={style.answers__item}>Стажёр</div>
        </div>
    );
}

export default Test;