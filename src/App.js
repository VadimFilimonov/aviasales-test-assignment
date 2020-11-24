import logo from "./logo.png";
import "./app.css";

function App() {
  return (
    <div className="app">
      <header className="header app__header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <main className="app__main">
        <div>
          <button type="button">Самый дешевый</button>
          <button type="button">Самый быстрый</button>
        </div>
        <section>
          <article>
            <div>13 400 Р</div>
          </article>
        </section>
      </main>
      <aside className="app__aside">
        <h2>Количество пересадок</h2>
        <fieldset>
          <input id="all" value="all" type="checkbox" name="transfers" />
          <label for="all">Все</label>
          <input id="transfer0" value="transfer0" type="checkbox" name="transfers" />
          <label for="transfer0">Без пересадок</label>
          <input id="transfer1" value="transfer1" type="checkbox" name="transfers" />
          <label for="transfer1">1 пересадка</label>
          <input id="transfer2" value="transfer2" type="checkbox" name="transfers" />
          <label for="transfer2">2 пересадки</label>
          <input id="transfer3" value="transfer3" type="checkbox" name="transfers" />
          <label for="transfer3">3 пересадки</label>
        </fieldset>
      </aside>
    </div>
  );
}

export default App;
