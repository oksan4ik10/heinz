// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile/Profile'
import urlSheet from "./assets/4sheet.png"

function App() {

  return (
    <>
      <div className="container scroll__elem">
        <div className="wrapper">
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
          <section className="answers">
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
