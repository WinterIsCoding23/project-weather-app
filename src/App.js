import "./App.css";
import Form from "./components/Form";

function App() {
  function handleAddActivity(activity) {
    console.log("handleAddActivity");
    console.log(activity);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather & Activities App</h1>
      </header>
      <main>
        <Form onAddActivity={handleAddActivity} />
      </main>
    </div>
  );
}

export default App;
