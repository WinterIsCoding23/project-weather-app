import ListItem from "../ListItem";
import WeatherDisplay from "../WeatherDisplay";

export default function List({ activities, weather, onDeleteActivity }) {
  return (
    <section>
      <WeatherDisplay weather={weather}/>
      <ul>
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
