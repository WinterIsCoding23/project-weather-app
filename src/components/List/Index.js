import "./List.css";
import ListItem from "../ListItem";
import WeatherDisplay from "../WeatherDisplay";

export default function List({ activities, weather, onDeleteActivity }) {
  return (
    <section className="list">
      <WeatherDisplay weather={weather} />
      <ul className="list__activities">
        {activities.map((activity) => {
          return (
            <ListItem
              key={activity.id}
              activity={activity}
              onDeleteActivity={onDeleteActivity}
            />
          );
        })}
      </ul>
    </section>
  );
}
