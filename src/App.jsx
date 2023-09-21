import React from "react";
import "./App.css";
import EventList from "./routes/EventList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>The NY Jets Offensive Starting Lineup</h1>
      </header>
      <main>
        <EventList />
      </main>
      <footer className="footer">&copy; 2023 NY Jets</footer>
    </div>
  );
}

export default App;
