// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile/Profile'
import urlSheet from "./assets/4sheet.png"
import { useEffect, useRef, useState } from 'react'

function App() {


  const refFackeElem = useRef<HTMLDivElement>(null);
  const refAnswerElem = useRef<HTMLDivElement>(null);
  const refWrapperElem = useRef<HTMLDivElement>(null);

  const [answerCoordinate, setAnswerCoordinate] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  })
  const [wrapperCoordinate, setWrapperCoordinate] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  })
  useEffect(() => {
    if (!refAnswerElem.current || !refWrapperElem.current) return
    const dataAnswer = refAnswerElem.current.getBoundingClientRect();
    setAnswerCoordinate({
      x: dataAnswer.left,
      y: dataAnswer.top,
      width: dataAnswer.width,
      height: dataAnswer.height
    })
    const dataWrapper = refWrapperElem.current.getBoundingClientRect();
    setWrapperCoordinate({
      x: dataWrapper.left,
      y: dataWrapper.top,
      width: dataWrapper.width,
      height: dataWrapper.height
    })

  }, [])

  let targetElem: HTMLElement | undefined;
  let cursor: HTMLElement | undefined;

  const startTouch = (e: React.TouchEvent<HTMLSpanElement>) => {
    const targetDrag = e.changedTouches[0].target as HTMLElement;
    const target = targetDrag.closest(".answer__item") as HTMLElement;
    const fackeElem = refFackeElem.current;
    if ((!target) || (!fackeElem)) return
    const { width, height, left, top } = target.getBoundingClientRect()

    fackeElem.style.width = width + "px";
    fackeElem.style.height = height + "px";
    fackeElem.style.left = left - answerCoordinate.x + 16 + "px";
    fackeElem.style.opacity = "1";
    fackeElem.style.top = top - wrapperCoordinate.y + "px";
    fackeElem.innerHTML = target.innerHTML;
    fackeElem.style.background = "red";
    target.style.opacity = "0";
    const newCursor = document.createElement("div");
    newCursor.classList.add("cursor");

    const data = e.changedTouches[0];
    let x = data.clientX - left - 20;
    if (x < 0) x = targetDrag.offsetLeft
    let y = data.clientY - top - 20;
    if (y < 0) y = 0;
    newCursor.style.left = x + "px";
    newCursor.style.top = y + "px";
    fackeElem.append(newCursor);
    cursor = newCursor;
    targetElem = fackeElem;
  }

  const moveTouch = (e: React.TouchEvent<HTMLDivElement>) => {

    if (!targetElem) return;
    const data = e.changedTouches[0];
    const clientX = data.clientX;
    const clientY = data.clientY;

    let y = clientY - wrapperCoordinate.y - (targetElem.offsetHeight / 2);
    let x = clientX - wrapperCoordinate.x - (targetElem.offsetWidth / 2);
    if (x < 0) x = 0

    if (x + targetElem.clientWidth > wrapperCoordinate.width) x = wrapperCoordinate.width - targetElem.clientWidth;
    if (y < 0) y = 0;
    console.log(y, targetElem.clientHeight, wrapperCoordinate.height);
    console.log(y + targetElem.clientHeight > wrapperCoordinate.height);


    if (y < 0) y = 0;
    if (y + targetElem.clientHeight > wrapperCoordinate.height - 46) y = wrapperCoordinate.height - targetElem.clientHeight - 46;
    targetElem.style.top = y + "px";
    targetElem.style.left = x + "px";

    if (!cursor) return;
    let xCursor = clientX - x - wrapperCoordinate.x - 20;
    if (xCursor < 0) xCursor = 0
    let yCursor = clientY - y - wrapperCoordinate.y - 20;
    if (yCursor < 0) yCursor = 0;
    cursor.style.left = xCursor + "px";
    cursor.style.top = yCursor + "px";


  }

  return (
    <>
      <div className="container scroll__elem">
        <div className="wrapper" ref={refWrapperElem}>
          <div className="facke__elem answer__item" ref={refFackeElem}><div className='cursor'></div></div>
          <div className="head">
            <img src={urlSheet} alt="sheet" className="img__sheet" />
            <Profile></Profile>
          </div>
          <section className="sections">
            <div className="section__item answer"><span>Сертификаты с различных конкурсов</span></div>
            <div className="section__item"><span>Раздел 1</span></div>
            <div className="section__item"><span>Раздел 1</span></div>
            <div className="section__item"><span>Раздел 1</span></div>
            <div className="section__item"><span>Раздел 1</span></div>
            <div className="section__item"><span>Раздел 1</span></div>
          </section>
          <section className="answers" ref={refAnswerElem} onTouchStart={startTouch} onTouchMove={moveTouch}>
            <div className="answers__row">
              <div className="answer__item">Интересные<br />факты о себе</div>
              <div className="answer__item">Отзывы<br />работодателей</div>
              <div className="answer__item">Хобби</div>
            </div>
            <div className="answers__row">
              <div className="answer__item">Образование и дополнительные курсы</div>
            </div>
            <div className="answers__row">
              <div className="answer__item">Опыт работы</div>
              <div className="answer__item">Навыки</div>
              <div className="answer__item">Фотография</div>
            </div>
            <div className="answers__row">
              <div className="answer__item">Сертификаты<br />с различных конкурсов</div>
              <div className="answer__item">Желаемая<br />должность</div>
            </div>
            <div className="answers__row">
              <div className="answer__item">Личная и контактная информация</div>
            </div>





          </section>
          <button className="btn btn_grey">
            Проверить
          </button>

        </div>
      </div>



    </>
  )
}

export default App
