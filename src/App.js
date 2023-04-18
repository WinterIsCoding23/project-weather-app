import "./App.css";
import Form from "./components/Form";
import List from "./components/List/Index";
import { useState } from "react";
import { uid } from "uid";

function App() {
  function handleAddActivity(activity) {
    const id = uid();
    const activityWithId = {...activity, id}
    setActivities([...activities, activityWithId]);
  }

  const [activities, setActivities] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather & Activities App</h1>
      </header>
      <main>
        <List activities={activities} />
        <Form onAddActivity={handleAddActivity} />
      </main>
    </div>
  );
}

export default App;
