import { useEffect, useState } from 'react';
import './App.css';
import json from './data.json'

function App() {

  const [groupsSize, setGroupsSize] = useState({
    geo: 0,
    geoKF: 0,
    python: 0,
    pythonKF: 0,
    china: 0,
    chinaKF: 0,
    energ: 0,
    energKF: 0,
    blender: 0,
    blenderKF: 0,
    shop: 0,
    shopKF: 0,
    business: 0,
    businessKF: 0,
    compass: 0,
    compassKF: 0,
    graphics: 0,
    graphicsKF: 0,
    radio: 0,
    radioKF: 0,
    chemistry: 0,
    chemistryKF: 0,
    digitalSimulation: 0,
    digitalSimulationKF: 0,
    electronics: 0,
    electronicsKF: 0,
    future: 0,
    futureKF: 0
  });

  const obj = {
    data: [],
    sizes: {}
  }

  const groups = {
    geo: [],
    python: [],
    china: [],
    energ: [],
    blender: [],
    shop: [],
    business: [],
    compass: [],
    graphics: [],
    radio: [],
    chemistry: [],
    digitalSimulation: [],
    electronics: [],
    future: [],
    unknown: []
  }

  json.map((e) => {
    const user = {}
    user.id = e[0][1]
    user.name = e[3][1]
    user.email = e[4][1]
    user.phone = e[5][1]
    user.class = e[6][1]
    user.school = e[7][1]
    user.choice1 = e[8][1]
    user.choice2 = e[9][1]
    user.choice3 = e[10][1]
    obj.data.push(user);
  })

  const distribution = () => {

    obj.data.map(e => {
      if (e.choice1 === "Геодезия" && groups.geo.length < groupsSize.geo * groupsSize.geoKF) {
        groups.geo.push(e)
      }
      else if (e.choice1 === 'Основы программирования на PYTHON' && groups.python.length < groupsSize.python * groupsSize.python) {
        groups.python.push(e)
      }
      else if (e.choice1 === 'Весёлый китайский язык' && groups.china.length < groupsSize.china * groupsSize.chinaKF) {
        groups.china.push(e)
      }
      else if (e.choice1 === 'Современная энергетика' && groups.energ.length < groupsSize.energ * groupsSize.energKF) {
        groups.energ.push(e)
      }
      else if (e.choice1 === '3D-моделирование в программе Blender' && groups.blender.length < groupsSize.blender * groupsSize.blenderKF) {
        groups.blender.push(e)
      }
      else if (e.choice1 === "Основы рыночных механизмов" && groups.shop.length < groupsSize.shop * groupsSize.shopKF) {
        groups.shop.push(e)
      }
      else if (e.choice1 === "Технологическое предпринимательство" && groups.business.length < groupsSize.business * groupsSize.businessKF) {
        groups.business.push(e)
      }
      else if (e.choice1 === "Инженерный дизайн в программе Компас" && groups.compass.length < groupsSize.compass * groupsSize.compassKF) {
        groups.compass.push(e)
      }
      else if (e.choice1 === "Будущее науки: янглийский язык для международных образовательных проектов" && groups.future.length < groupsSize.future * groupsSize.futureKF) {
        groups.future.push(e)
      }
      else if (e.choice1 === "Инженерная графика" && groups.graphics.length < groupsSize.graphics * groupsSize.graphicsKF) {
        groups.graphics.push(e)
      }
      else if (e.choice1 === "Методы и средства измерений в радиоэлектронных системах" && groups.radio.length < groupsSize.radio * groupsSize.radioKF) {
        groups.radio.push(e)
      }
      else if (e.choice1 === "Экспериментальная химия" && groups.chemistry.length < groupsSize.chemistry * groupsSize.chemistryKF) {
        groups.chemistry.push(e)
      }
      else if (e.choice1 === "Цифровое моделирование городской среды" && groups.digitalSimulation.length < groupsSize.digitalSimulation * groupsSize.digitalSimulationKF) {
        groups.digitalSimulation.push(e)
      }
      else if (e.choice1 === "Электроника и схемотехника" && groups.electronics.length < groupsSize.electronics * groupsSize.electronicsKF) {
        groups.electronics.push(e)
      }
      else {
        groups.unknown.push(e)
      }
    })
  }

  function inputHandler(e) {
    setGroupsSize(groupsSize => ({
      ...groupsSize,
      [e.target.id]: parseInt(e.target.value)
    }))
    console.log(groupsSize)
  }
  return (
    <>
      <form>
        <div>
          <label htmlFor="blender">3D-моделирование в программе Blender</label>
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество учеников в группе" id="blender" type="text" />
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество групп" id="blenderKF" type="text" />
        </div>
        <div>
          <label htmlFor="business">Технологическое предпринимательство</label>
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество учеников в группе" id="business" type="text" />
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество групп" id="businessKF" type="text" />
        </div>
        <div>
          <label htmlFor="chemistry">Экспериментальная химия</label>
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество учеников в группе" id="chemistry" type="text" />
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество групп" id="chemistryKF" type="text" />
        </div>
        <div>
          <label htmlFor="china">Весёлый китайский язык</label>
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество учеников в группе" id="china" type="text" />
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество групп" id="chinaKF" type="text" />
        </div>
        <div>
          <label htmlFor="compass">Инженерный дизайн в программе Компас</label>
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество учеников в группе" id="compass" type="text" />
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество групп" id="compassKF" type="text" />
        </div>
        <div>
          <label htmlFor="digitalSimulation">Цифровое моделирование городской среды</label>
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество учеников в группе" id="digitalSimulation" type="text" />
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество групп" id="digitalSimulationKF" type="text" />
        </div>
        <div>
          <label htmlFor="electronics">Электроника и схемотехника</label>
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество учеников в группе" id="electronics" type="text" />
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество групп" id="electronicsKF" type="text" />
        </div>
        <div>
          <label htmlFor="energ">Современная энергетика</label>
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество учеников в группе" id="energ" type="text" />
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество групп" id="energKF" type="text" />
        </div>
        <div>
          <label htmlFor="geo">Геодезия</label>
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество учеников в группе" id="geo" type="text" />
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество групп" id="geoKF" type="text" />
        </div>
        <div>
          <label htmlFor="graphics">Инженерная графика</label>
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество учеников в группе" id="graphics" type="text" />
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество групп" id="graphicsKF" type="text" />
        </div>
        <div>
          <label htmlFor="python">Основы программирования на PYTHON</label>
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество учеников в группе" id="python" type="text" />
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество групп" id="pythonKF" type="text" />
        </div>
        <div>
          <label htmlFor="radio">Методы и средства измерений в радиоэлектронных системах</label>
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество учеников в группе" id="radio" type="text" />
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество групп" id="radioKF" type="text" />
        </div>
        <div>
          <label htmlFor="shop">Основы рыночных механизмов</label>
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество учеников в группе" id="shop" type="text" />
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество групп" id="shopKF" type="text" />
        </div>
        <div>
          <label htmlFor="future">Будущее науки: янглийский язык для международных образовательных проектов</label>
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество учеников в группе" id="future" type="text" />
          <input
            onChange={(e) => { inputHandler(e) }}
            required placeholder="Колличество групп" id="futureKF" type="text" />
        </div>
      </form>
      <button onClick={distribution}>Рассчитать</button>
    </>
  );
}

export default App;
