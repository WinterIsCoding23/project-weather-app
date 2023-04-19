

export default function List ({activities, isGoodWeather}){
    return (
        <>
            <h3>{isGoodWeather ? "Good" : "Bad"}</h3>
            <ul>
                {activities.map((activity)=> {
                    return <li key={activity.id}>{activity.name}</li>;
                })}
            </ul>
        </>
    );
}