
import "./App.css";
import { ChaiCard } from "./components/ChaiCard";
import ChaiList from "./components/ChaiList";
import { Counter } from "./components/Counter";
import { OrderForm } from "./components/OrderForm";
import type { Chai } from "./components/types";

const menu: Chai[] = [
  {id:1, name: "masala", price: 20},
  {id:2, name: "ginger" , price:25},
  {id:3, name: "eleachi", price: 30}
]

function App() {

  return (
    <>
      <div>
    <ChaiCard name= "Head Phones" price={5000} />
    <ChaiCard name= "Iphone" price={80000} />
    <Counter/>
    <ChaiList items={menu} />
    <OrderForm onSubmit={(order) => {
      console.log("placed", order.name, order.cups)
    }} />
      </div>

    </>
  );
}

export default App;
