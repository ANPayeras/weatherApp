import React, { useReducer } from 'react';
import wheatherReducer from './useReducer';
import wheatherContext from './useContext';
import axios from 'axios';

const API_KEY = '3825b2c7b71b4a07bef35a7efba58cba'

const WeatherState = (props) => {
    const initialState = {
        currentCity: null,
        selectedCity: null,
        error: null
    }

    const [state, dispatch] = useReducer(wheatherReducer, initialState);

    const getCurrentCity = async () => {
        try {
            const res = await axios.get('http://ip-api.com/json/')
            if (res.status === 200) {
                const { data } = res
                let city = {
                    name: data.city,
                    lat: data.lat,
                    lon: data.lon
                }
                getWeatherCitySelected(city)
                dispatch({
                    type: 'CURRENT_CITY',
                    payload: data
                })
            } else {
                errorHandler('No se pudo determinar su ubicacion.')
            }
        } catch (error) {
            errorHandler('Ocurrio un error de red.')
        }
    }

    const getWeatherCitySelected = async (city) => {
        const { name, lat, lon } = city
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${API_KEY}&units=metric`)
            if (res.status === 200) {
                let cityData = {
                    name,
                    weather: res.data
                }
                dispatch({
                    type: 'SELECTED_CITY',
                    payload: cityData
                })
            } else {
                errorHandler('No se encontraron datos para su ubicacion actual.')
            }
        } catch (error) {
            errorHandler('Ocurrio un error de red.')
        }
    }

    const errorHandler = (error) => {
        const errorMsg = { msg: error }
        dispatch({
            type: 'SET_ERROR',
            payload: errorMsg
        })
    }

    const { currentCity, selectedCity, error } = state

    return (
        <wheatherContext.Provider value={{
            currentCity,
            selectedCity,
            error,
            getCurrentCity,
            getWeatherCitySelected
        }}>
            {props.children}
        </wheatherContext.Provider>
    )
}

export default WeatherState;