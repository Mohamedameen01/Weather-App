import React, { useContext, useEffect } from 'react'
import './Weather.css'
import { Col, Container, Row } from 'react-bootstrap'
import { TextContext } from '../../Context/Context'


function Weather() {
  const {weatherData} = useContext(TextContext)

  useEffect(()=>{
      console.log(weatherData)
  })
   
  return (
    <Container>
      {weatherData &&
      <Row>
        <Col>Weather Location  : {weatherData.name}</Col>
        <Col>Weather Feel Like : {weatherData.main.feels_like}°C</Col>
        <Col>Weather Humidith  : {weatherData.main.humidity}%</Col>
        <Col>Weather Pressure  : {weatherData.main.pressure}</Col>
        <Col>Weather Temperature: {weatherData.main.temp}°C</Col>
        <Col>Weather Sunrise  :{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-US')}</Col>
        <Col>Weather Sunset   :{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-US')}</Col>
        <Col>Wind Speed : {weatherData.wind.speed} m/s</Col>
        <img 
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} 
          alt="Weather Status Icon"
          width={500} 
        />
      </Row>}
    </Container>
  )
}

export default Weather