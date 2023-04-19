export default function WeatherDisplay ({weather}){
    return (
        <div>
            <h3>
            {weather.condition} {weather.temperature} °C
            </h3>
            <h3>
            {weather.isGoodWeather
                ? "The weather is awesome! Go outside and:"
                : "Bad weather outside! Here's what you can do now:"}
            </h3>
        </div>
    )
}
