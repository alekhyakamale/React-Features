import { useState } from "react"
import useFetch from '../../Hooks/useFetch'
import { WeatherResponse } from "./interface";

const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m';

export default function WeatherApp(){
    const [city, setCity] = useState('')
    const [weatherResponse, setWeatherResponse] = useState<WeatherResponse | null>(null);
    const {data, loading, error} = useFetch(url)

    return (
        <>
            <input value={city} onChange={(e) => setCity(e.target.value)} />
            {loading && <p>loading...</p>}
            {error && <p>{error.message}</p>}
            <button onClick={() => setWeatherResponse(data as WeatherResponse)} type='submit'>Search</button>
            {weatherResponse && (
                <ul>
                    {weatherResponse.hourly.time.map((time, index) => (
                        <li key={time}>
                            {time}: {weatherResponse.hourly.temperature_2m[index]}{weatherResponse.hourly_units.temperature_2m},{' '}
                            {weatherResponse.hourly.relative_humidity_2m[index]}{weatherResponse.hourly_units.relative_humidity_2m},{' '}
                            {weatherResponse.hourly.wind_speed_10m[index]}{weatherResponse.hourly_units.wind_speed_10m}
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}