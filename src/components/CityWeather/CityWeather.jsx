import { useContext } from 'react'
import wheatherContext from '../../context/useContext'
import WeatherCard from '../WeatherCard/WeatherCard'
import './cityWeather.css'

const CityWeather = () => {

    const { selectedCity } = useContext(wheatherContext)
    const fiveDays = selectedCity?.weather.daily.slice(1, 6)

    return (
        <div className='cityWeatherContainer'>
            <div className="currTemContainer">
                <div className="title">
                    Temperatura actual
                </div>
                <div className="cardsContainer current">
                    <WeatherCard city={selectedCity?.weather.daily[0]} />
                </div>
            </div>
            <div className="forecastContainer">
                <div className="title">
                    Pronostico extendido
                </div>
                <div className="cardsContainer">
                    {
                        fiveDays?.map((e, i) => (
                            <WeatherCard city={e} key={i} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CityWeather