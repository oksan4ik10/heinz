// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile/Profile'
import urlSheet from "./assets/4sheet.png"
import { useEffect, useRef, useState } from 'react'

interface IAnswerUser {
  id: number,
  text: string,
  check: boolean,
  hover: boolean, //при наведении элемента из ответов
  hoverAnswer: boolean, //при перестановке разделов
  rightAnswer: number[],
  win: boolean
}
interface IAnswerCoordinate {
  top: number,
  bottom: number,
}

function App() {


  const refFackeElem = useRef<HTMLDivElement>(null);
  const refAnswerElem = useRef<HTMLDivElement>(null);
  const refWrapperElem = useRef<HTMLDivElement>(null);
  const refWrapperSection = useRef<HTMLDivElement>(null);
  const refSection = useRef<HTMLDivElement>(null);



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

  //вычисление координат
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


  //задаем начальные данные для разделов
  const [answersList, setAnswersList] = useState<IAnswerUser[]>([{
    id: 0,
    text: ``,
    check: false,
    hover: false,
    rightAnswer: [10, 7],
    win: false,
    hoverAnswer: false
  }, {
    id: 0,
    text: ``,
    check: false,
    hover: false,
    rightAnswer: [10, 7],
    win: false,
    hoverAnswer: false
  },
  {
    id: 0,
    text: ``,
    check: false,
    hover: false,
    rightAnswer: [9],
    win: false,
    hoverAnswer: false
  },
  {
    id: 0,
    text: ``,
    check: false,
    hover: false,
    rightAnswer: [4],
    win: false,
    hoverAnswer: false
  },
  {
    id: 0,
    text: ``,
    check: false,
    hover: false,
    rightAnswer: [5],
    win: false,
    hoverAnswer: false
  },
  {
    id: 0,
    text: ``,
    check: false,
    hover: false,
    rightAnswer: [6],
    win: false,
    hoverAnswer: false
  },
  ]);
  //координаты разделов
  const [answersListCoordinate, setAnswersListCoordinate] = useState<IAnswerCoordinate[]>([]);
  useEffect(() => {
    if (!refSection.current) return

    let defSectionWrapper = refSection.current.offsetTop - 1;
    const arr: IAnswerCoordinate[] = []
    for (let index = 1; index < 7; index++) {
      const bottom = (index === 1) ? defSectionWrapper + 43 : ((index === 6)) ? defSectionWrapper + 43 : defSectionWrapper + 37;
      const obj: IAnswerCoordinate = {
        top: defSectionWrapper,
        bottom: bottom,
      }
      arr.push(obj)
      defSectionWrapper = bottom + 1

    }
    setAnswersListCoordinate(arr)


  }, [])



  //данные для ответов
  const [answersItem, setAnswersItem] = useState([
    [
      {
        id: 1,
        text: "Хобби",
        check: false
      },
      {
        id: 2,
        text: "Хобби2",
        check: false
      },
      {
        id: 3,
        text: "Хобби3",
        check: false
      },
    ],
    [
      {
        id: 4,
        text: "Хобби3",
        check: false
      },
    ],
    [
      {
        id: 5,
        text: "Хобби3",
        check: false
      },
      {
        id: 6,
        text: "Хобби3",
        check: false
      },
      {
        id: 7,
        text: "Хобби3",
        check: false
      },
    ],
    [
      {
        id: 8,
        text: "Хобби3",
        check: false
      },
      {
        id: 9,
        text: "Хобби3",
        check: false
      },
    ],
    [
      {
        id: 10,
        text: "Хобби3",
        check: false
      },
    ]
  ])


  const [targetFackeElem, setTargetFackeElem] = useState<HTMLElement | undefined>(undefined);
  const [targetElem, setTargetElem] = useState<HTMLElement | undefined>(undefined);
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  // let cursor: HTMLElement | undefined;

  const createFackeElem = (classFacke: string, id: string, target: HTMLElement) => {
    const fackeElem = document.createElement("div");
    fackeElem.className = classFacke;

    const { width, height, left, top } = target.getBoundingClientRect();
    target.classList.add("none");

    setTargetElem(target)

    fackeElem.setAttribute("data-id", id);
    fackeElem.style.width = width + "px";
    fackeElem.style.height = height + "px";
    fackeElem.style.left = left - answerCoordinate.x + 16 + "px";
    fackeElem.style.opacity = "1";
    fackeElem.style.top = top - wrapperCoordinate.y + "px";
    fackeElem.innerHTML = target.innerHTML;
    fackeElem.style.zIndex = "99";

    refWrapperElem.current?.append(fackeElem);
    setTargetFackeElem(fackeElem)

  }

  const startTouch = (e: React.TouchEvent<HTMLSpanElement>) => {
    const targetDrag = e.changedTouches[0].target as HTMLElement;
    const target = targetDrag.closest(".answer__item") as HTMLElement;

    if ((!target) || (target.matches(".none"))) return;
    const id = target.dataset.id ? target.dataset.id : "0";
    createFackeElem("facke__elem answer__item", id, target)


    // const fackeElem = document.createElement("div");
    // fackeElem.className = "facke__elem answer__item";




    // refWrapperElem.current?.append(fackeElem);
    // const newCursor = document.createElement("div");
    // newCursor.classList.add("cursor");

    // const data = e.changedTouches[0];
    // let x = data.clientX - left - 20;
    // if (x < 0) x = targetDrag.offsetLeft
    // let y = data.clientY - top - 20;
    // if (y < 0) y = 0;
    // newCursor.style.left = x + "px";
    // newCursor.style.top = y + "px";
    // fackeElem.append(newCursor);
    // cursor = newCursor;

  }


  const moveTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!targetFackeElem || !targetElem || !refWrapperSection.current || !refAnswerElem.current) return;
    const data = e.changedTouches[0];
    const clientX = data.clientX;
    const clientY = data.clientY;

    let y = clientY - wrapperCoordinate.y - (targetFackeElem.offsetHeight / 2);
    let x = clientX - wrapperCoordinate.x - (targetFackeElem.offsetWidth / 2);
    if (x < 0) x = 0
    if (x + targetFackeElem.clientWidth > wrapperCoordinate.width) x = wrapperCoordinate.width - targetFackeElem.clientWidth;

    const defWrapperSection = refWrapperSection.current.offsetTop;


    if (y < defWrapperSection) y = defWrapperSection;

    const yTopAnswer = refAnswerElem.current.getBoundingClientRect().y + answerCoordinate.height - wrapperCoordinate.y;
    if (y + targetFackeElem.clientHeight > yTopAnswer) y = yTopAnswer - targetFackeElem.clientHeight;
    targetFackeElem.style.top = y + "px";
    targetFackeElem.style.left = x + "px";




    setAnswersList(answersList.map((item, index) => {
      const coordinate = answersListCoordinate[index];
      const isGoal = coordinate.top <= y && coordinate.bottom >= y;
      if ((isGoal && item.hover) || item.id) return item
      const obj = Object.assign({}, item)
      if (isGoal && !obj.id) {
        obj.hover = true;

      } else {
        obj.hover = false
      }

      return obj

    }))






    // if (!cursor) return;
    // let xCursor = clientX - x - wrapperCoordinate.x - 20;
    // if (xCursor < 0) xCursor = 0
    // let yCursor = clientY - y - wrapperCoordinate.y - 20;
    // if (yCursor < 0) yCursor = 0;
    // cursor.style.left = xCursor + "px";
    // cursor.style.top = yCursor + "px";


  }
  const endTouch = () => {

    if (!targetFackeElem || !targetElem) return
    const id = targetFackeElem.dataset.id;
    let isWin = false;
    setAnswersList(answersList.map((item) => {
      if (item.hover) {
        isWin = true;
        item.hover = false;
        item.id = id ? +id : 0;
        item.check = true;
        item.text = targetFackeElem.textContent ? targetFackeElem.textContent : "";
        item.win = (item.rightAnswer.indexOf(id ? +id : 0) !== -1)

      }
      return item
    }))
    setTargetElem(undefined);
    setTargetFackeElem(undefined)
    targetFackeElem.remove();
    if (isWin && id) {
      changeAnswersItem(+id)
      setUserAnswers([...userAnswers, +id])
      return
    }

    targetElem.classList.remove("none")

  }

  //алгоритм для кнопки Проверить
  const clickCheckWin = () => {

    if (userAnswers.length !== 6) return


    const sortUserAnswer = [...userAnswers].sort((a, b) => a - b);

    const answersRight = [4, 5, 6, 7, 9, 10];
    let winOrLouser = sortUserAnswer.toString() !== answersRight.toString() ? "loser" : ""

    if (winOrLouser) {
      console.log(winOrLouser);
      return
      //если есть неверные ответы
    }

    //если все ответы правильные, проверяем очередность
    winOrLouser = answersList.filter((item) => !item.win).length === 0 ? "win" : "hash"


    console.log(winOrLouser);



  }

  const [idLast, setIdLast] = useState(-1); //для перестановки ответов
  const startAnswerTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    const targetDrag = e.changedTouches[0].target as HTMLElement;
    const targetDiv = targetDrag.closest(".answer") as HTMLElement;
    if (!targetDiv) return
    const target = targetDiv.querySelector("span") as HTMLElement;
    if (!target) return;
    const idAnswer = targetDiv.dataset.id ? targetDiv.dataset.id : "-1";
    setIdLast(+idAnswer)
    createFackeElem("facke__elem sectionItem", idAnswer, target)



  }




  const moveAnswerTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!targetFackeElem || !targetElem || !refWrapperSection.current || !refAnswerElem.current) return;
    const data = e.changedTouches[0];
    const clientX = data.clientX;
    const clientY = data.clientY;

    let y = clientY - wrapperCoordinate.y - (targetFackeElem.offsetHeight / 2);
    let x = clientX - wrapperCoordinate.x - (targetFackeElem.offsetWidth / 2);
    if (x < 0) x = 0
    if (x + targetFackeElem.clientWidth > wrapperCoordinate.width) x = wrapperCoordinate.width - targetFackeElem.clientWidth;

    const defWrapperSection = refWrapperSection.current.offsetTop;


    if (y < defWrapperSection) y = defWrapperSection;

    const yTopAnswer = refAnswerElem.current.getBoundingClientRect().y + answerCoordinate.height - wrapperCoordinate.y;
    if (y + targetFackeElem.clientHeight > yTopAnswer) y = yTopAnswer - targetFackeElem.clientHeight;
    targetFackeElem.style.top = y + "px";
    targetFackeElem.style.left = x + "px";
    let id = -1;

    setAnswersList(answersList.map((item, index) => {
      const coordinate = answersListCoordinate[index];
      const isGoal = coordinate.top <= y && coordinate.bottom + 1 >= y;
      const obj = Object.assign({}, item)
      if (isGoal) {
        obj.hoverAnswer = true;
        id = index
      } else {
        obj.hoverAnswer = false
      }
      return obj

    }))
    if ((id !== -1) && (idLast !== id)) {
      const temp1 = answersList[id];
      answersList[id] = answersList[idLast];
      answersList[idLast] = temp1;
      setAnswersList(answersList)
      setIdLast(id)

    }

  }




  const changeAnswersItem = (id: number) => {
    setAnswersItem(answersItem.map((item) => item.map((i) => {
      if (i.id === id) i.check = !i.check;
      return i
    })))
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
          <div className="wrapper__section" ref={refWrapperSection}>
            <section className="sections" ref={refSection}>
              {answersList.map((item, index) => <div
                onTouchStart={startAnswerTouch}
                onTouchMove={moveAnswerTouch}
                onTouchEnd={endTouch}
                data-id={index} key={index} className={"section__item " + (item.hover ? "hover" : (item.id && !item.hoverAnswer) ? "answer" : item.hoverAnswer ? "none" : "")}><span>{item.text ? item.text : `Раздел ${index + 1}`}</span></div>)}
            </section>

            <section className="answers"
              ref={refAnswerElem}
              onTouchStart={startTouch}
              onTouchMove={moveTouch}
              onTouchEnd={endTouch}
            >
              {answersItem.map(item => <div className="answers__row">
                {item.map(i => <div className={"answer__item " + (i.check ? "none" : "")} data-id={i.id}>{i.text}</div>)}
              </div>)}
              {/* <div className="answers__row">
                <div className="answer__item" data-id={1}>Интересные <br />факты о себе</div>
                <div className="answer__item" data-id={2}>Отзывы <br />работодателей</div>
                <div className="answer__item" data-id={3}>Хобби</div>
              </div>
              <div className="answers__row">
                <div className="answer__item" data-id={4}>Образование и дополнительные курсы</div>
              </div>
              <div className="answers__row">
                <div className="answer__item" data-id={5}>Опыт работы</div>
                <div className="answer__item" data-id={6}>Навыки</div>
                <div className="answer__item" data-id={7}>Фотография</div>
              </div>
              <div className="answers__row">
                <div className="answer__item" data-id={8}>Сертификаты <br />с различных конкурсов</div>
                <div className="answer__item" data-id={9}>Желаемая <br />должность</div>
              </div>
              <div className="answers__row">
                <div className="answer__item" data-id={10}>Личная и контактная информация</div>
              </div> */}
            </section>
            <button className={"btn  " + (userAnswers.length !== 6 ? "btn_grey" : "")} onClick={clickCheckWin}>
              Проверить
            </button>
          </div>


        </div>
      </div>



    </>
  )
}

export default App
