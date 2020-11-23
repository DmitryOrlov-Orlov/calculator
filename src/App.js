import { useState } from 'react'

import './App.css';

import Header from './Header';
import Tablo from './Tablo';
import ButtonNumber from './ButtonNumber'
import ButtonAction from './ButtonAction'

function App() {

  const [count, setCount] = useState(0);

  const buttonNumberHandler = (event) => {
    event.preventDefault();

    console.log(event.target.value);
    let countS = count;
    if (count === 0) {
      countS = '';
    }
    countS += event.target.value;
    setCount(countS)
  }


  return (
    <div className="App">
      <Header />
      <Tablo enteredNumber={count} />
      <section className="sectionBtn">
        <ButtonAction action="СЕ" />
        <ButtonAction action="С" />
        <ButtonAction action="DEL" />
        <ButtonAction action="/" />
      </section>
      <section className="sectionBtn">
        <ButtonNumber number={7} buttonNumberHandler={buttonNumberHandler} />
        <ButtonNumber number={8} buttonNumberHandler={buttonNumberHandler} />
        <ButtonNumber number={9} buttonNumberHandler={buttonNumberHandler} />
        <ButtonAction action="*" />
      </section>
      <section className="sectionBtn">
        <ButtonNumber number={4} buttonNumberHandler={buttonNumberHandler} />
        <ButtonNumber number={5} buttonNumberHandler={buttonNumberHandler} />
        <ButtonNumber number={6} buttonNumberHandler={buttonNumberHandler} />
        <ButtonAction action="-" />
      </section>
      <section className="sectionBtn">
        <ButtonNumber number={1} buttonNumberHandler={buttonNumberHandler} />
        <ButtonNumber number={2} buttonNumberHandler={buttonNumberHandler} />
        <ButtonNumber number={3} buttonNumberHandler={buttonNumberHandler} />
        <ButtonAction action="+" />
      </section>
      <section className="sectionBtn">
        <ButtonAction />
        <ButtonNumber number={0} buttonNumberHandler={buttonNumberHandler} />
        <ButtonNumber number="." buttonNumberHandler={buttonNumberHandler} />
        <ButtonAction action="=" />
      </section>

    </div>
  );
}

export default App;
