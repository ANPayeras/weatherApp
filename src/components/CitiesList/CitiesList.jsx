import { useContext, useEffect, useState } from 'react'
import wheatherContext from '../../context/useContext'
import './citiesList.css'
import { cities } from '../../Data'

const CitiesList = () => {
    const { currentCity, getWeatherCitySelected, selectedCity } = useContext(wheatherContext)

    const [allCities, setAllCities] = useState()

    useEffect(() => {
        if (currentCity) {
            const { city, lat, lon } = currentCity
            let cCity = {
                name: city,
                lat,
                lon
            }
            cities.unshift(cCity)
            setAllCities(cities)
        }
    }, [currentCity])

    const selectCity = (city) => {
        getWeatherCitySelected(city)
    }

    return (
        <div className='listContainer'>
            <div className="listWrapper">
                {
                    allCities?.map((city, i) => (
                        <div
                            key={i}
                            className={`city ${(selectedCity?.name === city.name) ? 'active' : 'inactive'} `}
                            onClick={() => selectCity(city)}>
                            {city.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CitiesList