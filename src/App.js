import Header from "./components/Layout/Header";
import { Fragment } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div>
      <Fragment>
        <Cart/>
        <Header />
        <main>
          <Meals />
        </main>
      </Fragment>
    </div>
  );
}

export default App;
