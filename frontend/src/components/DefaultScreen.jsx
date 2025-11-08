import React from "react";
import CardLayout from "./ui/CardLayout";
import Sun from "../assets/images/sun.svg";
import Tempreature from "../assets/images/temperature.svg";
import Eye from "../assets/images/eye.svg";
import ThermoMini from "../assets/images/temperature-mini.svg";
import Windy from "../assets/images/windy.svg";
import Water from "../assets/images/water.svg";
import Cloud from "../assets/images/cloud.svg";
import Search from "../assets/images/search.svg";

const DefaultScreen = () => {
  return (
    <div className="home-main-div">
      <div className="default-home-container">
        <CardLayout>
          <>
            {/* place, sunny day and date */}
            <div className="default-card-city">
              <img src={Sun} alt="sunny" />
              <div>
                <p className="city-name">New Delhi</p>
                <p className="date-today">Thrus 17/02/2025</p>
              </div>
            </div>

            {/* temp container */}
            <div className="temp-container">
              <img src={Tempreature} alt="thermometer range" />
              <div>
                <p style={{ fontSize: "144px" }}>48</p>
                <p className="text-capitalize">Clear Sky</p>
              </div>
              <p
                style={{
                  fontSize: "24px",
                  alignSelf: "start",
                  paddingTop: "45px",
                }}
              ></p>
            </div>

            {/* visibility and feels like */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "60px",
                width: "100%",
                columnGap: "16px",
              }}
            >
              <div className="weather-info-subtile">
                <div className="flex">
                  <img src={Eye} alt="" />
                  <p className="weather-params-label">Visibility</p>
                </div>
                <p>24 km</p>
              </div>
              <p>|</p>
              <div className="weather-info-subtile">
                <div className="flex">
                  <img src={ThermoMini} alt="" />
                  <p className="weather-params-label">Feels like</p>
                </div>
                <p>45 ℃</p>
              </div>
            </div>

            {/* Humility and wind */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "24px",
                width: "100%",
                columnGap: "16px",
              }}
            >
              <div className="weather-info-subtile">
                <div className="flex">
                  <img src={Water} alt="" />
                  <p className="weather-params-label">Humidity</p>
                </div>
                <p>24%</p>
              </div>
              <p>|</p>
              <div className="weather-info-subtile">
                <div className="flex">
                  <img src={Windy} alt="" />
                  <p className="weather-params-label">Wind</p>
                </div>
                <p>5 km/hr</p>
              </div>
            </div>
          </>
        </CardLayout>

        {/* Search card layout */}
        <CardLayout>
          <div className="search-card">
            {/* cloud image */}
            <div className="flex justify-center">
              <img src={Cloud} alt="" />
            </div>

            {/* searchicon and inout tag */}
            <div className="search-city-container city-results">
              <img src={Search} alt="" />
              <input
                type="text"
                className="city-input"
                placeholder="Search City"
              />
            </div>

            {/* suggestions */}
            <div className="search-city-suggestions">
              <p className="suggested-label">Bengaluru</p>
            </div>
          </div>
        </CardLayout>
      </div>
    </div>
  );
};

export default DefaultScreen;
