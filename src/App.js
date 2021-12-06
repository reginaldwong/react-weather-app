import axios from "axios";
import { React, useState } from "react";
import styled from "styled-components"
import CityComponent from "./Components/CityComponent";
import WeatherComponent from "./Components/WeatherComponent";

const API_KEY = "12a02b4c778046e0d4422276825b5d1c";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  background: #E0F2E9;
  padding: 20px 10px;
  border-radius: 25px;
  width: 420px;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color:  black;
  font-size: 1.8rem;
  font-weight: bold;
`;

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    setWeather(response.data);
    console.log(response);``
    };


  return ( 
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {weather ? (<WeatherComponent weather ={weather} />
      ) : (
      <CityComponent setCity={setCity} fetchWeather={fetchWeather}/>
      )}
    </Container>
  );
};

export default App;
