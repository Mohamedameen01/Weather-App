import {Container} from 'react-bootstrap';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import Weather from './Components/WeatherDisplay/Weather';
import Text from './Context/Context';

function App() {
  return (
    <Container>
      <Text>
       <SearchBar />
       <Weather />      
      </Text>
    </Container>
  );
}

export default App;
