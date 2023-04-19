import "./App.css";
import Form from "./components/Form";
import List from "./components/List/Index";
import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  function handleAddActivity(activity) {
    const id = uid();
    const activityWithId = {...activity, id}
    setActivities([...activities, activityWithId]);
  }

  //const [activities, setActivities] = useState([]);
  const [activities, setActivities] = useLocalStorageState("activities", { defaultValue: [] });

  // Filtering the List
  const isGoodWeather = true;
  const filteredActivities = activities.filter(activity => activity.isForGoodWeather === isGoodWeather);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather & Activities App</h1>
      </header>
      <main>
        <List activities={filteredActivities} isGoodWeather={isGoodWeather} />
        <Form onAddActivity={handleAddActivity} />
      </main>
    </div>
  );
}

export default App;
