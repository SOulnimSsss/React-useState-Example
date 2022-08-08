import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';

function Desc() {
  return (
    <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </>
  )
}

function Property() {
  //import picture to variables
  const cappuccino = require('./picture/cappuccino.jpg');
  const mellow = require('./picture/kalori-milo.jpg')
  const latte = require('./picture/latte.jpg');
  const nescafe = require('./picture/nescafe.jpg');
  const matcha = require('./picture/matcha.jpg');
  const airkosong = require('./picture/airkosong.jpg')

  const [menu, setMenu] = useState({
    drink1: "Cappucino",
    drink1Price: "RM 12",
    drink1pic: cappuccino,
    drink2: "Latte",
    drink2Price: "RM 18",
    drink2pic: latte,
    drink3: "Matcha",
    drink3Price: "RM 24",
    drink3pic: matcha
  })
  const firstMenu = () => {
    setMenu(previousState => {
      return {...previousState, 
    drink1: "Cappucino",
    drink1Price: "RM 12",
    drink1pic: cappuccino,
    drink2: "Latte",
    drink2Price: "RM 18",
    drink2pic: latte,
    drink3: "Matcha",
    drink3Price: "RM 24",
    drink3pic: matcha}
    })
  };
  const secondMenu = () => {
    setMenu(previousState => {
      return {...previousState, drink1: "Air Mellow",
    drink1Price: "RM 120",
    drink1pic: mellow,
    drink2: "Nescafe Kaw",
    drink2Price: "RM 192",
    drink2pic: nescafe,
    drink3: "Air kosong",
    drink3Price: "RM 9999",
    drink3pic: airkosong
    }
    })
  };

  return (
    <div>
    <div id="products">
      <div id="brod">
        <h1>{menu.drink1} ------ {menu.drink1Price}</h1>
        <img src={menu.drink1pic} alt="cappuccino" />
        <Desc />
        <button id="add">ADD TO  LIST</button>
      </div>
      <div id="bord">
        <h1>{menu.drink2} ------ {menu.drink2Price}</h1>
        <img src={menu.drink2pic} alt="latte" />
        <Desc />
        <button id="add">ADD TO  LIST</button>
      </div>
      <div id="bord">
        <h1>{menu.drink3} ------ {menu.drink3Price}</h1>
        <img src={menu.drink3pic} alt="matcha" />
        <Desc />
        <button id="add">ADD TO  LIST</button>
      </div>
      
    </div>
    <button id="page" onClick={firstMenu}>Page 1</button>
    <button id="page" onClick={secondMenu}>Page 2</button>
    </div>
  )
}

function App() {
  return (
    <>
      <Property id="property"/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
