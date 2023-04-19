import "./App.css";
import Form from "./components/Form";
import List from "./components/List/Index";
import { useEffect, useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  function handleAddActivity(activity) {
    const id = uid();
    const activityWithId = { ...activity, id };
    setActivities([...activities, activityWithId]);
  }

  //const [activities, setActivities] = useState([]);
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const [weather, setWeather] = useState({});

  const weatherApiUrl = "https://example-apis.vercel.app/api/weather/europe";

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(weatherApiUrl);
      const weather = await response.json();
      setWeather(weather);
    }

    fetchWeather();
  }, []);

  // Filtering the List
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather.isGoodWeather
  );

  // Delete ListItem
  function handleDeleteActivity (activity){
    const idToBeDeleted = activity.id;
    setActivities(activities.filter((activity)=>activity.id !== idToBeDeleted)); 
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather & Activities App</h1>
      </header>
      <main>
        <List activities={filteredActivities} weather={weather} onDeleteActivity={handleDeleteActivity}/>
        <Form onAddActivity={handleAddActivity} />
      </main>
    </div>
  );
}

export default App;
