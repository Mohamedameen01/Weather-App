import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import Weather from './Components/WeatherDisplay/Weather';
import Text from './Context/Context';

function App() {
  return (
    <div id='main-body'>
      <Text>
       <SearchBar />
       <Weather />      
      </Text>
    </div>
  );
}

export default App;
