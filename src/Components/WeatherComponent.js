import styled from "styled-components";
import React from "react";

export const WeatherInfoIcons = {
    sunset: "/icons/temp.svg",
    sunrise: "/icons/temp.svg",
    humidity: "/icons/humidity.svg",
    wind: "/icons/wind.svg",
    pressure: "/icons/pressure.svg",
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
        font-size: 1.5rem;
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
    margin: 30px 25px 10px;
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
    return (
    <>
        <WeatherCondition>
            <Condition><span>30 C</span> | Cloudy</Condition>
            <WeatherLogo src="/icons/perfect-day.svg"/>
        </WeatherCondition>
        <Location>London, GB</Location>
        <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
        <WeatherInfoContainer>
            <WeatherInfoComponent name="sunrise" value ="06:30"/>
            <WeatherInfoComponent name="humidity" value ="432"/>
            <WeatherInfoComponent name="wind" value ="6 km/hr"/>
            <WeatherInfoComponent name="pressure" value ="35"/>
            <WeatherInfoComponent name="pressure" value ="235"/>
        </WeatherInfoContainer>
    </>
    );
};

export default WeatherComponent;