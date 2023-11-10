import React, { useContext, useState} from 'react'
import './SearchBar.css'
import {Container, Form} from 'react-bootstrap'
import { TextContext } from '../../Context/Context'
import axios from 'axios'

function SearchBar() {

  const [inputText,setInputText] = useState('')
  const {setWeatherData} = useContext(TextContext)

  const handleChange = (e)=>{
    let text = e.target.value
    let key = e.key
    setInputText(text)
    if(key === "Enter"){
      fetchData()
    }
  }
  const fetchData = async()=>{
    try{
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&units=metric&appid=1d2f7d171224f3e4fd7b3d3bca5647e9`
      )
      
      setWeatherData(response.data)
    }
    catch(error){
      console.error("Error in Fetching Data: "+error)
    }
  }   
 
  const handleSubmit = (e)=>{
    e.preventDefault()
    
  }
  return (
    <Container >
        <Form.Group onSubmit={handleSubmit}>
          <Form.Control
            type='text'
            onChange={handleChange}
            onKeyDown={handleChange}
          />
          <Form.Text>
            Enter City Name or Coordinate
          </Form.Text>
        </Form.Group>
    </Container>
  )
}

export default SearchBar