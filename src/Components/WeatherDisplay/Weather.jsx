import React, { useContext} from 'react'
import './Weather.css'
import { Row} from 'react-bootstrap'
import { TextContext } from '../../Context/Context'
import { WiHorizonAlt,WiHorizon } from "react-icons/wi";

function Weather() {
  const {weatherData} = useContext(TextContext)
 
  return (
    <div id='weather-status' className='fw-medium m-0 p-0 '>
      {weatherData &&
        <>
          <Row className='text-center'>
              <h3 className='col'>{weatherData.name.toUpperCase()},{weatherData.sys.country}</h3>
          </Row>

          <Row id='icon-box' style={{height:"80px"}} >
            <div className='col pl-1 d-flex align-items-center justify-content-center'>
              <img 
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} 
                alt="Weather Status Icon"
                width={100}
              />
              <h3>{weatherData.main.temp}°</h3>
            </div>
          </Row>

          <Row>
            <h4 className='col ml-5 pr-1 text-center font-monospace text-capitalize '>
              {weatherData.weather[0].description}
            </h4>
          </Row>

          <Row id='status' className='mt-4 '>
            <div className='col d-flex justify-content-center justify-content-sm-end'>  
              <h4>Max-Temp</h4>
            </div>
            <div className='col d-flex justify-content-center '>
              <h4>Feel Like</h4>     
            </div>
            <div className='col d-flex justify-content-center justify-content-sm-start'>
              <h4>Min-Temp</h4>
            </div>
          </Row>

          <Row id='status-scale'>
            <div className='col  d-flex justify-content-center justify-content-sm-end'>  
              <h5>{weatherData.main.temp_max}°</h5>
            </div>
            <div className='col  d-flex justify-content-center'>  
              <h5>{weatherData.main.temp_max}°</h5>
            </div>
            <div className='col  d-flex justify-content-center justify-content-sm-start'>  
              <h5>{weatherData.main.temp_max}°</h5>
            </div>
          </Row>

          <Row id='status' className='mt-4 '>
            <div className='col  d-flex justify-content-center justify-content-sm-end '>  
              <h4>Humidity</h4>
            </div>
            <div className='col d-flex justify-content-center'>
              <h4>Pressure</h4>    
            </div>
            <div className='col d-flex justify-content-center justify-content-sm-start'>
              <h4>Wind Speed</h4>
            </div>
          </Row>

          <Row id='status-scale' >
            <div className='col d-flex justify-content-center justify-content-sm-end'>  
              <h5>{weatherData.main.humidity}%</h5>
            </div>
            <div className='col d-flex justify-content-center'>
              <h5>{weatherData.main.pressure} hPa</h5>
            </div>
            <div className='col d-flex justify-content-center justify-content-sm-start'> 
              <h5>{weatherData.wind.speed} m/s</h5>
            </div>
          </Row>

          <Row className='mt-4'>
            <div id='sun-status' className='col d-flex justify-content-center justify-content-sm-end align-items-end '>
              <WiHorizonAlt size={40}/>
              <h5>Rise :</h5>
              <h5 className='pl-2 pr-3 border-right border-5'> {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-US')}</h5>            
            </div>
            <div id='sun-status' className='col d-flex justify-content-center justify-content-sm-start align-items-end '>
              <WiHorizon size={40}/>
              <h5>Set :</h5>
              <h5 className= 'pl-2 pr-3 border-right border-5'>{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-US')}</h5>              
            </div>
          </Row>
        </>
      }
    </div>
  )
}

export default Weather