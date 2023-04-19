export default function ListItem({ activity, onDeleteActivity }) {
  function handleClick() {
    onDeleteActivity(activity);
  }
  return (
    <li>
      {activity.name}
      <button onClick={handleClick}>X</button>
    </li>
  );
}
