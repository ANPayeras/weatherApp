import CitiesList from '../CitiesList/CitiesList'
import CityWeather from '../CityWeather/CityWeather'
import './body.css'

const Body = () => {
    return (
        <div className='bodyContainer'>
            <CitiesList />
            <CityWeather />
        </div>
    )
}

export default Body