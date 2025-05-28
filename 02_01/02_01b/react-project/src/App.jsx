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
    <main>
      <img src={Ato} height={200} alt="Image of Ato forson" />
      <img
        src="https://github.com/emmanuelbed.png"
        height={800}
        alt="Image of Ato forson"
      />
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id} style={{ listStyleType: "none" }}>
            {dish.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
function App() {
  return (
    <div>
      <Header name="Emmanuel" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
