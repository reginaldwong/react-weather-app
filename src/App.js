import React from "react";
import styled from "styled-components"
import CityComponent from "./Components/CityComponent";
import WeatherComponent from "./Components/WeatherComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  background: #E0F2E9;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color:  black;
  font-size: 1.25rem;
  font-weight: bold;
`;

function App() {
  return <Container>
    <AppLabel>React Weather App</AppLabel>
    <WeatherComponent/>
  </Container>;
};

export default App;
