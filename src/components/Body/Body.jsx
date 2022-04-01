import { useContext } from 'react'
import wheatherContext from '../../context/useContext'
import CitiesList from '../CitiesList/CitiesList'
import CityWeather from '../CityWeather/CityWeather'
import ErrorMsg from '../ErrorMsg/ErrorMsg'
import './body.css'

const Body = () => {
    const { error } = useContext(wheatherContext)

    return (
        <div className='bodyContainer'>
            {
                error ? <ErrorMsg error={error} /> :
                    <>
                        <CitiesList />
                        <CityWeather />
                    </>
            }
        </div>
    )
}

export default Body