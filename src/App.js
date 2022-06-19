import Header from "./components/Layout/Header";
import { Fragment } from "react";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <div>
      <Fragment>
        <Header />
        <main>
          <Meals />
        </main>
      </Fragment>
    </div>
  );
}

export default App;
