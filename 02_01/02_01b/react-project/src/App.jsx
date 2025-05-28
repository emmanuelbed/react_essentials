import { useState } from "react";
import "./App.css";
import Ato from "./images/Ato.jpg";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Home</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = ["Clinic", "Trials", "Home", "Cafe"];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

function Main({ dishes }) {
  return (
    <>
      <div>
        <h2>Welcome to this Home</h2>
      </div>
      <main>
        <img src={Ato} height={200} alt="Image of Ato forson" />

        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyleType: "none" }}>
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
function App() {
  const [status, setStatus] = useState("Open");
  console.log(status);

  return (
    <div>
      <h1>The restaurant is currently {status}</h1>
      <button
        onClick={() => {
          setStatus("Closed");
        }}
      >
        Close Reataurant
      </button>
      <Header name="Emmanuel" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
