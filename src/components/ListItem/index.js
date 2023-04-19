

export default function ListItem ({activity, onDeleteActivity}){
    function handleClick (){
        onDeleteActivity(activity);
    }
    return (
        <li key={activity.id}>
            {activity.name}
            <button onClick={handleClick}>X</button>
        </li>
    )
}