import "./ListItem.css";

export default function ListItem({ activity, onDeleteActivity }) {
  function handleClick() {
    onDeleteActivity(activity);
  }

  return (
    <li className="list-item">
      <div className="list-item__activity">{activity.name}</div>
      <button className="list-item__button" onClick={handleClick}>
        X
      </button>
    </li>
  );
}
