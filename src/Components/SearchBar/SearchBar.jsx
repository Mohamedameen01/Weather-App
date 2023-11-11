import React, { useContext, useState} from 'react'
import './SearchBar.css'
import {Container, Form} from 'react-bootstrap'
import { TextContext } from '../../Context/Context'
import axios from 'axios'
import SearchIcon from '@mui/icons-material/Search';

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
  
  const handleClick = ()=>{
    fetchData()
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
  
  return (
      <Container className='search-box w-50 h-50'>
        <Form.Group
          className='h-50 d-flex  justify-content-center align-items-center' 
        >
          <Form.Control
            type='text'
            placeholder='Enter City Name'
            value={inputText}
            onChange={handleChange}
            onKeyDown={handleChange}
            className='search-input w-50 '
          />
          <SearchIcon 
            id='search-icon'
            onClick={handleClick}
          />  
        </Form.Group>
      </Container>
  )
}

export default SearchBar