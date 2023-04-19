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
    <section className="add-new-activity">
      <h1 className="add-new-activity__title">Add new Activity</h1>
      <form className="add-new-activity__form" onSubmit={handleSubmit}>
        <div>
          <label className="add-new-activity__form__label" htmlFor="name">Name:</label>
          <input className="add-new-activity__form__input" type="text" id="name" name="name" autoFocus></input>
        </div>
        <div>
          <label className="add-new-activity__form__label" htmlFor="good-weather-activity">Good-weather activity:</label>
          <input
            className="add-new-activity__form__input"
            type="checkbox"
            id="good-weather-activity"
            name="isForGoodWeather"
          ></input>
        </div>
        <button className="add-new-activity__button" type="submit">Submit</button>
      </form>
    </section>
  );
}
