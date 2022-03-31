import React, { useReducer } from 'react';
import wheatherReducer from './useReducer';
import wheatherContext from './useContext';
import axios from 'axios';

const API_KEY = '3825b2c7b71b4a07bef35a7efba58cba'

const WeatherState = (props) => {
    const initialState = {
        currentCity: null,
        selectedCity: null
    }

    const [state, dispatch] = useReducer(wheatherReducer, initialState);

    const getCurrentCity = async () => {
        try {
            const res = await axios.get('http://ip-api.com/json/')
            const { data } = res
            let city = {
                name: data.city,
                lat: data.lat,
                lon: data.lon
            }
            getWeatherCitySelected(city)
            dispatch({
                type: 'CURRENT_CITY',
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getWeatherCitySelected = async (city) => {
        const { name, lat, lon } = city
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${API_KEY}&units=metric`)
            let cityData = {
                name,
                weather: res.data
            }
            dispatch({
                type: 'SELECTED_CITY',
                payload: cityData
            })
        } catch (error) {
            console.log(error)
        }
    }

    const { currentCity, selectedCity } = state

    return (
        <wheatherContext.Provider value={{
            currentCity,
            selectedCity,
            getCurrentCity,
            getWeatherCitySelected
        }}>
            {props.children}
        </wheatherContext.Provider>
    )
}

export default WeatherState;