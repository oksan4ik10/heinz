import { useEffect, useRef, useState } from 'react'

import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import Profile from "../../components/Profile/Profile"

import urlSheet from "../../assets/4sheet.png"
import urlBgStar from "../../assets/4bg-star.svg"
import urlBgCircle from "../../assets/4bg-circle.svg"


import ScreenBlur from '../../components/ScreenBlur/ScreenBlur'
import Modal from '../../components/Modal/Modal'

import style from "./Screen4.module.css"

interface IAnswerUser {
    id: number,
    text: string,
    check: boolean,
    hover: boolean, //при наведении элемента из ответов
    hoverAnswer: boolean, //при перестановке разделов
    win: boolean
}
interface IAnswerCoordinate {
    top: number,
    bottom: number,
}

interface IProps {
    changeScreen: () => void;
}

function Screen4(props: IProps) {
    const { changeScreen } = props;

    //логика по таску
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

        win: false,
        hoverAnswer: false
    }, {
        id: 0,
        text: ``,
        check: false,
        hover: false,

        win: false,
        hoverAnswer: false
    },
    {
        id: 0,
        text: ``,
        check: false,
        hover: false,

        win: false,
        hoverAnswer: false
    },
    {
        id: 0,
        text: ``,
        check: false,
        hover: false,

        win: false,
        hoverAnswer: false
    },
    {
        id: 0,
        text: ``,
        check: false,
        hover: false,

        win: false,
        hoverAnswer: false
    },
    {
        id: 0,
        text: ``,
        check: false,
        hover: false,

        win: false,
        hoverAnswer: false
    },
    ]);
    //координаты разделов
    const [answersListCoordinate, setAnswersListCoordinate] = useState<IAnswerCoordinate[]>([]);
    useEffect(() => {
        if (!refSection.current || !refWrapperElem.current) return

        let defSectionWrapper = refSection.current.getBoundingClientRect().top - refWrapperElem.current.getBoundingClientRect().top - 1;
        refErrorModal.current?.style.setProperty("--top-section", defSectionWrapper + "px")

        const arr: IAnswerCoordinate[] = []
        for (let index = 1; index < 7; index++) {
            const bottom = (index === 1) ? defSectionWrapper + 43 : ((index === 6)) ? defSectionWrapper + 43 : defSectionWrapper + 37;
            const obj: IAnswerCoordinate = {
                top: Math.floor(defSectionWrapper),
                bottom: Math.floor(bottom),
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
                text: "Интересные <br />факты о себе",
                check: false
            },
            {
                id: 2,
                text: "Отзывы <br />работодателей",
                check: false
            },
            {
                id: 3,
                text: "Хобби",
                check: false
            },
        ],
        [
            {
                id: 4,
                text: "Образование и дополнительные курсы",
                check: false
            },
        ],
        [
            {
                id: 5,
                text: "Опыт работы",
                check: false
            },
            {
                id: 6,
                text: "Навыки",
                check: false
            },
            {
                id: 7,
                text: "Фотография",
                check: false
            },
        ],
        [
            {
                id: 8,
                text: "Сертификаты",
                check: false
            },
            {
                id: 9,
                text: "Желаемая <br />должность",
                check: false
            },
        ],
        [
            {
                id: 10,
                text: "Личная и контактная информация",
                check: false
            },
        ]
    ])


    const [targetFackeElem, setTargetFackeElem] = useState<HTMLElement | undefined>(undefined);
    const [targetElem, setTargetElem] = useState<HTMLElement | undefined>(undefined);

    const [userAnswers, setUserAnswers] = useState<number[]>([])
    // let cursor: HTMLElement | undefined;

    const createFackeElem = (classFacke: string, id: string, target: HTMLElement, iduser?: string, isCursor?: boolean) => {
        const fackeElem = document.createElement("div");
        fackeElem.className = classFacke;

        const { width, height, left, top } = target.getBoundingClientRect();
        target.classList.add(style.none);

        setTargetElem(target)


        fackeElem.setAttribute("data-id", id);
        if (iduser) fackeElem.setAttribute("data-iduser", iduser);
        fackeElem.style.width = width + "px";
        fackeElem.style.height = height + "px";
        fackeElem.style.left = left - answerCoordinate.x + 16 + "px";
        fackeElem.style.opacity = "1";
        fackeElem.style.top = top - wrapperCoordinate.y + "px";
        fackeElem.innerHTML = target.innerHTML;
        fackeElem.style.zIndex = "99";
        if (isCursor) {
            const newCursor = document.createElement("div");
            newCursor.classList.add(style.cursor);
            fackeElem.append(newCursor);
            refFackeElem.current = fackeElem;
        }

        refWrapperElem.current?.append(fackeElem);

        setTargetFackeElem(fackeElem)

    }


    const [idAnswerCheck, setIdAnswerCheck] = useState(0); //для перезаписи ответа
    const startClick = useRef("");

    const startMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const targetDrag = e.target as HTMLElement;
        if (targetDrag.closest(`.${style.answer__item}`)) {
            startClick.current = "answers";
            start(targetDrag)
        }
        if (targetDrag.closest(`.${style.section__item}`)) {
            const targetDiv = targetDrag.closest(`.${style.answer}`) as HTMLElement;
            if (!targetDiv) return
            startClick.current = "section";
            startAnswer(targetDiv);

        }


    }
    const moveMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!startClick.current) return

        if (startClick.current === "answers") move(e.pageX, e.pageY, targetFackeElem, targetElem);
        if (startClick.current === "section") moveAnswer(e.pageX, e.pageY);
    }
    const outMouse = () => {


        if (!startClick.current) return;

        if (startClick.current === "answers") {
            startClick.current = "";
            end()
            return
        }
        startClick.current = "";
        endAnswer()
    }
    const endMouse = () => {

        if (!startClick.current) return
        if (startClick.current === "answers") {
            startClick.current = "";
            end()
            return
        }
        startClick.current = "";
        endAnswer()
    }

    const startTouch = (e: React.TouchEvent<HTMLSpanElement>) => {
        const targetDrag = e.changedTouches[0].target as HTMLElement;
        start(targetDrag)

    }

    const start = (targetDrag: HTMLElement) => {

        const target = targetDrag.closest(`.${style.answer__item}`) as HTMLElement;

        if ((!target) || (target.matches(`.${style.none}`))) return;
        const id = target.dataset.id ? target.dataset.id : "0";
        createFackeElem(`${style.facke__elem} ${style.answer__item}`, id, target)

    }

    const moveTouch = (e: React.TouchEvent<HTMLDivElement>) => {

        const data = e.changedTouches[0];
        move(data.clientX, data.clientY, targetFackeElem, targetElem)


    }
    const move = (xUser: number, yUser: number, elemFacke: HTMLElement | undefined, elem: HTMLElement | undefined) => {

        if (!elemFacke || !elem || !refWrapperSection.current || !refAnswerElem.current) return;

        const clientX = xUser;
        const clientY = yUser;

        let y = clientY - wrapperCoordinate.y - (elemFacke.offsetHeight / 2);
        let x = clientX - wrapperCoordinate.x - (elemFacke.offsetWidth / 2);
        if (x < 0) x = 0
        if (x + elemFacke.clientWidth > wrapperCoordinate.width) x = wrapperCoordinate.width - elemFacke.clientWidth;

        const defWrapperSection = refWrapperSection.current.offsetTop;


        if (y < defWrapperSection) y = defWrapperSection;

        const yTopAnswer = refAnswerElem.current.getBoundingClientRect().y + answerCoordinate.height - wrapperCoordinate.y;
        if (y + elemFacke.clientHeight > yTopAnswer) y = yTopAnswer - elemFacke.clientHeight;
        elemFacke.style.top = y + "px";
        elemFacke.style.left = x + "px";




        setAnswersList(answersList.map((item, index) => {
            const coordinate = answersListCoordinate[index];
            const isGoal = coordinate.top <= y && coordinate.bottom >= y;
            if ((isGoal && item.hover)) return item

            const obj = Object.assign({}, item)
            if (isGoal) {
                obj.hover = true;
                setIdAnswerCheck(0)

            }
            else {
                obj.hover = false
                obj.hoverAnswer = false;
            }
            if (isGoal && obj.id) {
                setIdAnswerCheck(obj.id)
            }


            return obj

        }))
    }
    const endTouch = () => {
        end()
    }
    const end = () => {
        if (!targetFackeElem || !targetElem) return
        const id = targetFackeElem.dataset.id;
        let isWin = false;
        const arr: number[] = []
        setAnswersList(answersList.map((item) => {
            if (item.hover) {
                isWin = true;
                item.hover = false;
                item.id = id ? +id : 0;
                item.check = true;
                item.text = targetFackeElem.textContent ? targetFackeElem.textContent : "";

            }
            arr.push(item.id)
            return item
        }))


        setTargetElem(undefined);
        setTargetFackeElem(undefined)
        targetFackeElem.remove();
        setUserAnswers(arr)
        if (idAnswerCheck && isWin) {
            changeAnswersItem(idAnswerCheck, false)

        }
        if (isWin && id) {
            changeAnswersItem(+id, true)

            return
        }

        targetElem.classList.remove(style.none)
    }



    const [idLast, setIdLast] = useState(-1); //для перестановки ответов в sections

    const startAnswerTouch = (e: React.TouchEvent<HTMLDivElement>) => {
        const targetDrag = e.changedTouches[0].target as HTMLElement;
        const targetDiv = targetDrag.closest(`.${style.answer}`) as HTMLElement;
        startAnswer(targetDiv);

    }

    const [startList, setStartList] = useState([...answersList]);

    const startAnswer = (targetDiv: HTMLElement) => {

        if (!targetDiv) return
        const target = targetDiv.querySelector("span") as HTMLElement;
        if (!target) return;
        const idAnswer = targetDiv.dataset.id ? targetDiv.dataset.id : "-1";
        const iduser = targetDiv.dataset.iduser ? targetDiv.dataset.iduser : "0";
        setIdLast(+idAnswer)
        createFackeElem(`${style.facke__elem} ${style.sectionItem}`, idAnswer, target, iduser)
        setAnswersList(answersList.map((item) => {
            if (item.id === +iduser) {
                item.check = false;
                item.hover = false;
                item.hoverAnswer = true;
                item.id = +iduser;
                item.text = "";
            }
            return item
        }))
        setStartList([...answersList])
    }

    const [isMove, setIsMove] = useState(false);
    const moveAnswerTouch = (e: React.TouchEvent<HTMLDivElement>) => {
        const data = e.changedTouches[0];
        moveAnswer(data.clientX, data.clientY)

    }
    const moveAnswer = (userX: number, userY: number) => {
        if (!targetFackeElem || !targetElem || !refWrapperSection.current || !refAnswerElem.current) return;
        setIsMove(true)
        const clientX = userX;
        const clientY = userY;

        let y = clientY - wrapperCoordinate.y - (targetFackeElem.offsetHeight / 2);
        let x = clientX - wrapperCoordinate.x - (targetFackeElem.offsetWidth / 2);
        if (x < 0) x = 0
        if (x + targetFackeElem.clientWidth > wrapperCoordinate.width) x = wrapperCoordinate.width - targetFackeElem.clientWidth;

        const defWrapperSection = refWrapperSection.current.offsetTop;


        if (y < defWrapperSection) y = defWrapperSection;

        const yTopAnswer = refAnswerElem.current.getBoundingClientRect().y + answerCoordinate.height - wrapperCoordinate.y;
        if (y + targetFackeElem.clientHeight > yTopAnswer) y = yTopAnswer - targetFackeElem.clientHeight;
        y = Math.floor(y)
        targetFackeElem.style.top = y + "px";
        targetFackeElem.style.left = x + "px";
        let id = -1;
        let goal = false;
        setAnswersList(answersList.map((item, index) => {
            const coordinate = answersListCoordinate[index];
            const isGoal = coordinate.top <= y && coordinate.bottom >= y;
            const obj = Object.assign({}, item)
            if (isGoal) {
                goal = true;
                obj.hoverAnswer = true;
                id = index
            } else {
                obj.hoverAnswer = false
            }
            return obj

        }))


        if ((id !== -1) && (idLast !== id) && (idLast !== -1)) {
            // const idEmpty = answersList.findLastIndex((item) => !item.check)
            // const arr = answersList.slice(idEmpty + 1, answersList.length)
            // const t = [...answersList];
            // console.log([...t]);

            // const a = t.splice(idEmpty + 1, arr.length);
            // console.log(idEmpty);
            // console.log(a);

            const t = [...answersList]


            const temp1 = t[id]; //куда answersList[id]
            // console.log(temp1);
            console.log(answersList[idLast]);


            t[id] = t[idLast]; //facke answersList[idLast]
            t[idLast] = temp1;
            setAnswersList(t)
            setIdLast(id)
            return
        }
        if ((id !== -1) && (idLast === -1)) {
            const idEmpty = answersList.findLastIndex((item) => !item.check)
            const arr = answersList.slice(idEmpty + 1, answersList.length)


            const a = answersList.splice(idEmpty + 1, arr.length);

            const arrFinish = [...answersList.slice(0, idEmpty), ...a]
            arrFinish.push({
                id: 0,
                check: false,
                hover: false,
                hoverAnswer: true,
                text: "",
                win: false
            })
            setAnswersList(arrFinish)
            setIdLast(5)


        }

        if (!goal) {
            const iduser = +(targetFackeElem.dataset.iduser ? targetFackeElem.dataset.iduser : "")

            setIdLast(-1)
            setAnswersList(startList.map((item) => {
                if (item.id === iduser) {
                    item.check = false;
                    item.hover = false;
                    item.hoverAnswer = false;
                    item.id = 0;
                    item.text = "";
                }
                return item
            }))

        }
    }
    const endAnswerTouch = () => {
        endAnswer()
    }

    const endAnswer = () => {
        if (!targetFackeElem || !targetElem) return



        const iduser = +(targetFackeElem.dataset.iduser ? targetFackeElem.dataset.iduser : "")

        let isWin = false;

        const arr: number[] = []


        setAnswersList(answersList.map((item) => {

            if (item.hoverAnswer) {

                isWin = true

                item.hoverAnswer = false;
                item.id = iduser;
                item.check = true;
                item.text = targetFackeElem.textContent ? targetFackeElem.textContent : "";


            }
            arr.push(item.id)
            return item
        }))

        if (refWrapperElem.current) {
            refWrapperElem.current.removeChild(targetFackeElem)
        }
        setIdLast(-1)
        setTargetElem(undefined);
        setTargetFackeElem(undefined)

        targetFackeElem.remove();

        setUserAnswers(arr)
        if ((isWin && iduser) || (!isMove)) {
            setIsMove(false)
            targetElem.classList.remove(style.none)

            return
        }
        setIsMove(false)

        changeAnswersItem(iduser, false)
        targetElem.classList.remove(style.none)

    }

    const refErrorModal = useRef<HTMLDivElement>(null);
    const [datakWin, setDataWin] = useState("");
    //алгоритм для кнопки Проверить
    const answersRight = [4, 5, 6, 7, 9, 10];
    const clickCheckWin = () => {

        if (userAnswers.filter((item) => item).length !== 6) return
        const sortUserAnswer = [...userAnswers].sort((a, b) => a - b);


        //если правильность ответов
        let winOrLouser = sortUserAnswer.toString() !== answersRight.toString() ? "loser" : ""


        let countRightAnswer = 0;

        const rightAnswer = [[10, 7], [10, 7], [9], [4], [5], [6]]

        setAnswersList(answersList.map((item, index) => {
            if (rightAnswer[index].indexOf(item.id) !== -1) {
                item.win = true;
                countRightAnswer++
            } else {
                item.win = false
            }
            return item
        }))

        //если все ответы правильные, проверяем очередность
        if (countRightAnswer !== 6 && !winOrLouser) {
            winOrLouser = "hash"
        }
        if (winOrLouser) {
            setDataWin(winOrLouser)
            return
        }

        //переход на следующий экран
        changeScreen()
        enablePageScroll()



    }
    //для появления/исчезновения ответов в answers
    const changeAnswersItem = (id: number, value: boolean) => {
        setAnswersItem(answersItem.map((item) => item.map((i) => {
            if (i.id === id) i.check = value;

            return i
        })))
    }

    //старт таска
    const [isStartGame, setIsStartGame] = useState(true);
    const [isStopGame, setIsStopGame] = useState(false);
    const refAnswer5 = useRef<HTMLDivElement>(null);
    const refAnswerOther = useRef<HTMLDivElement>(null);
    const refFackeElem = useRef<HTMLDivElement | null>(null);
    const startGame = () => {
        setIsStartGame(false);
        disablePageScroll();


        if (!refWrapperSection.current || !refAnswer5.current || !refFackeElem.current) return

        //включить для ожидания окончания анимации
        setIsStopGame(true)

        //из ансверс в сектион start
        const { width, height, left, top } = refAnswer5.current.getBoundingClientRect();
        refAnswer5.current.classList.add(style.none);

        refFackeElem.current.style.setProperty("--fackeWidth", width + "px")
        refFackeElem.current.style.setProperty("--fackeHeight", height + "px")
        refFackeElem.current.style.setProperty("--fackeLeft", left - answerCoordinate.x + 16 + "px")
        refFackeElem.current.style.setProperty("--fackeTop", top - wrapperCoordinate.y + "px")


        refFackeElem.current.style.opacity = "1";



        const topMove = answersListCoordinate[4].top + 10;
        const leftMove = refWrapperSection.current.getBoundingClientRect().width - width + 30
        refFackeElem.current.classList.add(style.transition)
        setTimeout(() => {
            if (!refFackeElem.current) return
            refFackeElem.current.style.setProperty("--fackeLeft", leftMove + "px")
            refFackeElem.current.style.setProperty("--fackeTop", topMove + "px")
        }, 500)
        setTimeout(() => {
            if (!refFackeElem.current) return
            setAnswersList(answersList.map((item, index) => {
                const obj = Object.assign({}, item)
                if (index === 4) {
                    obj.hover = true;
                }
                return obj

            }))

        }, 1000)

        setTimeout(() => {
            if (!refFackeElem.current) return
            refFackeElem.current.classList.remove(style.transition)
            setAnswersList(answersList.map((item, index) => {
                if (index === 4) {
                    item.hover = false;
                    item.id = 4
                    item.check = true;
                    item.text = "Опыт работы";

                }

                return item
            }))

            refFackeElem.current.style.opacity = "0";

        }, 1700)


        setTimeout(() => {
            if (!refFackeElem.current || !refWrapperSection.current) return

            const coordElem = answersListCoordinate[4];
            const topMove = coordElem.top + ((coordElem.bottom - coordElem.top) / 2 - (height / 2)) + 17;
            const leftMove = 16 + (refWrapperSection.current.offsetWidth / 2) - (width / 2)


            refFackeElem.current.classList.remove(style.answer__item)
            refFackeElem.current.classList.add(style.sectionItem)
            setAnswersList(answersList.map((item, index) => {
                if (!refFackeElem.current) return item
                if (index === 4) {
                    item.hoverAnswer = true;
                    item.check = false;
                    item.id = 0;
                    item.text = "";
                    refFackeElem.current.style.setProperty("--fackeLeft", leftMove + "px")
                    refFackeElem.current.style.setProperty("--fackeTop", topMove + "px")
                }
                return item
            }))


            // refFackeElem.current.classList.add("transitionFast")
            refFackeElem.current.style.opacity = "1";

        }, 2200)
        setTimeout(() => {
            if (!refFackeElem.current || !refWrapperSection.current) return

            const coordElem = answersListCoordinate[3];
            const topMove = coordElem.top + ((coordElem.bottom - coordElem.top) / 2 - (height / 2)) + 17;

            setAnswersList(answersList.map((item, index) => {
                if (!refFackeElem.current) return item

                if (index === 3) {

                    item.hoverAnswer = true;

                }
                return item
            }))
            setTimeout(() => {
                setAnswersList(answersList.map((item, index) => {
                    if (index === 4) {
                        item.hoverAnswer = false;
                    }
                    return item
                }))
            }, 400)

            refFackeElem.current.style.setProperty("--fackeTop", topMove + "px")
            refFackeElem.current.classList.add(style.transitionFast)
            refFackeElem.current.classList.add(style.cursorHere)


        }, 2400)

        setTimeout(() => {
            if (!refFackeElem.current || !refWrapperSection.current) return

            setTimeout(() => {
                setAnswersList(answersList.map((item, index) => {
                    if (index === 3) {
                        item.hoverAnswer = false;
                    }
                    return item
                }))
            }, 400)




            refFackeElem.current.classList.remove(style.transitionFast)
            refFackeElem.current.classList.add(style.transition)

            refFackeElem.current.style.setProperty("--fackeLeft", left - answerCoordinate.x + 16 + "px")
            refFackeElem.current.style.setProperty("--fackeTop", top - wrapperCoordinate.y + 16 + "px")

        }, 4000)
        setTimeout(() => {
            if (!refAnswer5.current) return
            refAnswer5.current.classList.remove(style.none);
            refFackeElem.current = null;
            setIsStopGame(false)
        }, 5200)


    }


    return (
        <>

            <div className={style.wrapper + " wrapper"} ref={refWrapperElem} onMouseDown={startMouse}
                onMouseMove={moveMouse}
                onMouseLeave={outMouse}
                onMouseUp={endMouse}>
                {isStopGame && <div className={style.stopGame}></div>}
                {(isStartGame || isStopGame) && <div ref={refFackeElem} className={style.facke__elem + " " + style.answer__item + " " + style.animation} data-id="5">Опыт работы<div className={style.cursor}></div></div>}

                <ScreenBlur screen={isStartGame}>
                    <div className={style.modal__start}>
                        <Modal border={false} btnText="Приступить" funcBtn={startGame} text={"Сначала выбери, из каких разделов будет<br/>состоять резюме. Перетащи необходимые<br/>пункты в правильном порядке. Ты можешь<br/>менять местами и переносить обратно<br/>выбранные ответы."} />
                    </div>
                </ScreenBlur>
                <ScreenBlur screen={Boolean(datakWin)}>
                    <div className={style.error__modal} ref={refErrorModal}>
                        <section className={style.sections}>
                            {answersList.map((item, index) => <div
                                key={index} className={style.section__item + " " + style.answer + " " + style.modalAnswer + " " + (item.win ? style.success : answersRight.indexOf(item.id) === -1 ? style.error : "")}><span>{item.text ? item.text : `Раздел ${index + 1}`}</span></div>)}
                        </section>
                        <Modal border={false} btnText="Исправить ошибки" funcBtn={() => setDataWin("")} text={datakWin === "loser" ? 'В резюме необходимо размещать только<br/>самую важную информацию, которая<br/>поможет HR-специалисту быстро оценить,<br/>насколько твой опыт соответствует<br/>вакансии. Побольше о себе ты сможешь<br/>рассказать на собеседовании :)' : "Ты молодец и выбрал верные разделы,<br/>однако в составлении резюме важно то,<br/>в каком порядке они расположены.<br/>Попробуй поменять местами те заголовки,<br/>которые не загорелись зелёным."} />
                    </div>
                </ScreenBlur>
                <img src={urlBgCircle} alt="circle" className={style.bg__circle + " " + style.bg} />
                <img src={urlBgStar} alt="star" className={style.bg__star + " " + style.bg} />

                <div className={style.head}>
                    <img src={urlSheet} alt="sheet" className={style.img__sheet} />
                    <Profile></Profile>
                </div>
                <div className={style.wrapper__section} ref={refWrapperSection}>
                    <section className={style.sections} ref={refSection}>
                        {answersList.map((item, index) => <div
                            onTouchStart={startAnswerTouch}
                            onTouchMove={moveAnswerTouch}
                            onTouchEnd={endAnswerTouch}
                            data-id={index} data-iduser={item.id} key={index} className={style.section__item + " " + ((item.hover && item.id) ? style.hoverAnswer : item.hover ? style.hover : (item.check && !item.hoverAnswer) ? style.answer : item.hoverAnswer ? style.none : "")}><span>{item.text ? item.text : `Раздел ${index + 1}`}</span></div>)}
                    </section>

                    <section className={style.answers + " " + (datakWin ? style.answersError : "")}
                        ref={refAnswerElem}


                    >
                        {answersItem.map((item, index) => <div className={style.answers__row} key={index}>
                            {item.map(i => <div key={i.id} onTouchStart={startTouch}

                                onTouchMove={moveTouch}
                                onTouchEnd={endTouch} dangerouslySetInnerHTML={{ __html: i.text }} ref={i.id === 5 ? refAnswer5 : refAnswerOther} className={style.answer__item + " " + (i.check ? style.none : "")} data-id={i.id} ></div>)}
                        </div>)}
                    </section>
                    <button className={"btn  " + (userAnswers.filter(item => item).length !== 6 ? "btn_grey" : datakWin ? style.errorBtn : "")} onClick={clickCheckWin}>
                        Проверить
                    </button>
                </div>


            </div>




        </>
    )
}
export default Screen4