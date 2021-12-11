import styled from "styled-components";
import React from "react";

export const WeatherInfoIcons = {
    sunset: "/react-weather-app/icons/temp.svg",
    sunrise: "/react-weather-app/icons/temp.svg",
    humidity: "/react-weather-app/icons/humidity.svg",
    wind: "/react-weather-app/icons/wind.svg",
    pressure: "/react-weather-app/icons/pressure.svg",
};

export const WeatherIcons = {
    "01d": "/react-weather-app/icons/sunny.svg",
    "01n": "/react-weather-app/icons/night.svg",
    "02d": "/react-weather-app/icons/day.svg",
    "02n": "/react-weather-app/icons/cloudy-night.svg",
    "03d": "/react-weather-app/icons/cloudy.svg",
    "03n": "/react-weather-app/icons/cloudy.svg",
    "04d": "/react-weather-app/icons/perfect-day.svg",
    "04n": "/react-weather-app/icons/cloudy-night.svg",
    "09d": "/react-weather-app/icons/rain.svg",
    "09n": "/react-weather-app/icons/rain-night.svg",
    "10d": "/react-weather-app/icons/rain.svg",
    "10n": "/react-weather-app/icons/rain-night.svg",
    "11d": "/react-weather-app/icons/storm.svg",
    "11n": "/react-weather-app/icons/storm.svg",
};

const WeatherCondition = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin: 30px auto;
`;

const Condition = styled.span`
    margin: 20px auto;
    font-size: 1.25rem;
    & span {
        font-size: 2rem;
        font-weight: bold;
    };
`;

const WeatherLogo = styled.img`
    width: 100px;
    height: 100px;
    margin: 5px auto;
`;

const Location = styled.span`
    font-size: 1.75rem;
    font-weight: bold;
`;

const WeatherInfoLabel = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 30px 10px;
    text-align: start;
    width: 90%;
`;

const WeatherInfoContainer = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;

const InfoContainer = styled.div`
    display: flex;
    margin: 5px 10px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const InfoIcon = styled.img`
    width: 36px;
    height: 36px;
`;

const InfoLabel = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 1.25rem;
    margin: 15px;
    & span {
        font-size: 1.15rem;
        text-transform: uppercase;
    };
`;

const WeatherInfoComponent = (props) => {
    const { name, value } = props;
    return (
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]} />
            <InfoLabel>
            {value}
            <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
};

const WeatherComponent = (props) => {
    const { weather } = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }

    return (
    <>
        <WeatherCondition>
            <Condition><span>{`${Math.floor(weather?.main.temp - 273)}°C`}</span>{` | ${weather?.weather[0].description}`}</Condition>
            <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]}/>
        </WeatherCondition>
        <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
        <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
        <WeatherInfoContainer>
            <WeatherInfoComponent 
                name={isDay ? "sunset" : "sunrise"} 
                value ={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}
            />
            <WeatherInfoComponent name="humidity" value ={weather?.main?.humidity}/>
            <WeatherInfoComponent name="wind" value ={weather?.wind?.speed}/>
            <WeatherInfoComponent name="pressure" value ={weather?.main?.pressure}/>
        </WeatherInfoContainer>
    </>
    );
};

export default WeatherComponent;