import "./App.css";

import { useEffect, useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

import Header from "./components/Header";
import AddNewActivity from "./components/AddNewActivity";
import List from "./components/List/Index";
import Footer from "./components/Footer";

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

    const timer = setInterval(fetchWeather, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Filtering the List
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather.isGoodWeather
  );

  // Delete ListItem
  function handleDeleteActivity(activity) {
    const idToBeDeleted = activity.id;

    window.confirm("Are you sure you want to delete this wonderful activity?") &&
    setActivities(
      activities.filter((activity) => activity.id !== idToBeDeleted)
    );
  }

  // Set background-color according to weather
  const containerClassForWeather = weather.isGoodWeather
    ? "container--sunny"
    : "container--rainy";

  return (
    <div className={`container ${containerClassForWeather}`}>
      <Header />
      <main>
        <AddNewActivity onAddActivity={handleAddActivity} />
        <List
          activities={filteredActivities}
          weather={weather}
          onDeleteActivity={handleDeleteActivity}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
