import Title from './Title';
import CountButtons from './components/CountButtons/CountButtons';
import Reset from './Reset';
import Count from './Count';
import { useState } from 'react';

export default function Card() {
  const [number, setNumber] = useState(0)
  return (
    <div className="card">
      <Title></Title>
      <Count number={number} setNumber={setNumber} ></Count>
      <Reset number={number} setNumber={setNumber}></Reset>
      <CountButtons number={number} setNumber={setNumber}></CountButtons>
    </div>
  );
}
