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

function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <div>
        <button
          onClick={() => {
            onStatus(true);
          }}
        >
          I want to be Open
        </button>
        <h2>Welcome to this Home - {openStatus ? "Open" : "Closed"}</h2>
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
  const [status, setStatus] = useState(true);

  return (
    <div>
      <h1>The restaurant is currently {status ? "open" : "closed"}</h1>

      <button
        onClick={() => {
          setStatus(!status);
        }}
      >
        {status ? "Close" : "Open"} Reataurant
      </button>
      <Header name="Emmanuel" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} openStatus={status} onStatus={setStatus} />
    </div>
  );
}

export default App;
