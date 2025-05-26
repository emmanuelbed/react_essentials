import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Home</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header name="Emmanuel" year={new Date().getFullYear()} />
      <main>
        <h2>We are the best Home</h2>
      </main>
    </div>
  );
}

export default App;
