import React, { useContext, useState} from 'react'
import './SearchBar.css'
import {Form} from 'react-bootstrap'
import { TextContext } from '../../Context/Context'
import axios from 'axios'


function SearchBar() {

  const [inputText,setInputText] = useState()
  const {setWeatherData} = useContext(TextContext)

  const handleChange = (e)=>{
    let text = e.target.value
    setInputText(text)
    let key = e.key
    if(key === "Enter"){
      fetchData()
      setInputText('')
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
      alert("Error in Fetching Data: "+error)
    }
  }   
  
  return (
      <div className='search-box h-50'>
        <Form.Group
          className='h-50 d-flex justify-content-center align-items-center position-relative' 
        >
          <Form.Control
            type='text'
            placeholder='Enter City Name'
            value={inputText}
            onChange={handleChange}
            onKeyDown={handleChange}
            className='search-input'
          />
        </Form.Group>      
      </div>
  )
}

export default SearchBar