import { ItemCounter } from "./shoping-cart/itemCounter";

interface ItemInCard {
  productName: string;
  quantity?: number;
}

const itemsInCart: ItemInCard[] = [
  { productName: "play station 5", quantity: 5 },
  { productName: "tv sansung", quantity: 1 },
  { productName: "laptop lenovo", quantity: 2 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>TIENDA VIRTUAL</h1>
      {itemsInCart.map(({productName, quantity}) => (
        < ItemCounter key = {productName} name= {productName} quantity={quantity} />
      ))}
      {/* <ItemCounter name="play station 5" quantity={10} />
      <ItemCounter name="tv sansung" quantity={5} />
      <ItemCounter name="laptop lenovo" quantity={0} /> */}
    </>
  );
}
