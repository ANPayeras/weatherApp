import './weatherCard.css'
import moment from 'moment'
import 'moment/locale/es';

const WeatherCard = ({ city }) => {
    const date = moment.unix(city?.dt).format('dddd')
    return (
        <div className='cardContainer' >
            <h3>
                {
                    date.slice(0, 1).toUpperCase() + date.slice(1, date.length)
                }
            </h3>
            <div>
                <span>Min: {city?.temp.min}°</span>
                <span>Max: {city?.temp.max}°</span>
            </div>
            <div>
                <img src={`https://openweathermap.org/img/wn/${city?.weather[0].icon}@2x.png`}
                    width='100px' height='auto' alt="" />
            </div >
        </div>
    )
}

export default WeatherCard