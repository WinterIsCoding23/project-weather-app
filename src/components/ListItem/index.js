import "./ListItem.css";

export default function ListItem({ activity, onDeleteActivity }) {
  function handleClick() {
    onDeleteActivity(activity);
  }

  return (
    <li className="list-item">
      <div className="list-item__activity">{activity.name}</div>
      <button className="list-item__button" onClick={handleClick}>
        <img src={require("./icons8-delete-400.png")} style={{width:"28px"}} alt="Delete-button" />
      </button>
    </li>
  );
}
