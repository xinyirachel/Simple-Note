import React from "react";
import Clock from "./Utils/Clock";
import Noise from "./Utils/Noise";
import Weather from "./Utils/Weather";
import SearchIcon from "@mui/icons-material/Search";
import CloudIcon from "@mui/icons-material/Cloud";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GoogleIcon from "@mui/icons-material/Google";
import Quotes from "./Utils/Quote";

function Tools() {
  return (
    <div>
      <div className="section-center2" style={{ color: "DimGrey" }}>
        <div className="card">
          <h1>
            Checking Time <AccessTimeIcon />
          </h1>
          <p>What time is it?</p>
          <Clock />
        </div>

        <div className="card">
          <h1>
            Checking Weather <CloudIcon />
          </h1>
          <p>Input "'city name', 'country name abbreviations'".</p>
          <Weather />
        </div>

        <div className="card">
          <Noise />
        </div>

        <div className="card">
          <h1>
            Google Search <GoogleIcon />
          </h1>
          <form action="https://www.google.com/search">
            <input
              className="search"
              type="text"
              placeholder="Search.."
              name="q"
            />
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
        </div>
        <div className="card">
          <Quotes />
        </div>
      </div>
    </div>
  );
}

export default Tools;
