import React from "react";
import styled from "styled-components";

const WeatherLogo = styled.img`
width: 140px;
height: 140px;
margin: 40px 25px auto;
`

const ChooseCityLabel = styled.span`
color: black;
font-size: 1.15rem;
font-weight: bold;
margin: 10px auto;
`

const SearchBox = styled.form`
display: flex;
flex-direction: row;
border: 1px solid black;
border-radius: 2px;
color: black;
font-size: 1.15rem;
font-weight: bold;
margin: 20px auto;

& input {
    padding: 10px;
    font-size: 16px;
    border: none;
    font-weight: bold;
    outline: none;
}

& button {
    padding: 10px;
    font-size: 16px;
    color: white;
    background: #3C887E;
    border: none;
    font-weight: bold;
    cursor: pointer;
}
`

const CityComponent = (props) => {
    const {setCity, fetchWeather} = props;
    return (
        <>
        <WeatherLogo src="/icons/perfect-day.svg"/>
        <ChooseCityLabel>Find weather of city</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
            <input placeholder="Enter city here" onChange={(e)=>setCity(e.target.value)}/>
            <button type="submit">Search</button>
        </SearchBox>
        </>
    )
};

export default CityComponent;