

export default function Form ({onAddActivity}){
    function handleSubmit(event){
        event.preventDefault();
        console.log("Clicked the button");
    }

    return (
        <div>
            <h1>Add new Activity</h1>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name"></input>
                <label htmlFor="good-weather-activity">Good-weather activity:</label>
                <input type="checkbox" id="good-weather-activity"></input>
                <button onClick={handleSubmit} type="submit">Submit</button>
            </form>
        </div>
    )
}