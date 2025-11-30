import { useState } from "react";


import "./ItemCounter.css"

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setcount] = useState(quantity);

  const handleAdd = () => {
    setcount(count + 1);
  };

  const handleSubstract = () => {
    if (count === 1) return;
    setcount(count - 1);
  };

  // const handleClick = () => {
  //   console.log(`click en ${name}`);
  // };

  return (
    <section className="item-row">
      <span
      className="item-text"
      style={{
        color: count === 1 ? "red": "black"
      }}
      >
        {name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubstract}>-1</button>
    </section>
  );
};
