import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Home</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = ["Clinic", "Trials", "Home"];

function Main({ dishes }) {
  return (
    <ul>
      {dishes.map((dish) => (
        <li style={{ listStyleType: "none" }}>{dish}</li>
      ))}
    </ul>
  );
}
function App() {
  return (
    <div>
      <Header name="Emmanuel" year={new Date().getFullYear()} />
      <Main dishes={items} />
    </div>
  );
}

export default App;
