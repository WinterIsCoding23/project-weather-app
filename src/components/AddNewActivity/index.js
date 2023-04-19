import "./AddNewActivity.css";

export default function AddNewActivity({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);
    // const activity = {
    //   name: data.name,
    //   isForGoodWeather: data.isForGoodWeather ? true : false,
    // };

    const formElements = event.target.elements;

    const activity = {
      name: formElements.name.value,
      isForGoodWeather: formElements.isForGoodWeather.checked,
    };

    onAddActivity(activity);

    event.target.reset();
    formElements.name.focus();
  }

  return (
    <section className="form">
      <h1>Add new Activity</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" autoFocus></input>
        <label htmlFor="good-weather-activity">Good-weather activity:</label>
        <input
          type="checkbox"
          id="good-weather-activity"
          name="isForGoodWeather"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
