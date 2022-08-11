import axios from "axios";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';


export default function App() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(null);
  const [description, setDescription] = useState("");

  const apiKey = "452551f2f47c0a064d9bb0322b3b470c";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 

  async function getCurrentWeather(e) {
    e.preventDefault();
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        setTemp(response.data.main.temp);
        setDescription(response.data.weather[0].description);
      } else {
        throw new Error("Error!");
      }

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <div>
        <div>
          <form
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                getCurrentWeather(e);
              }
            }}
          >
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              className="search"
              placeholder="e.g Melbourne, AU"
            />
            <button
              
              onClick={(e) => getCurrentWeather(e)}
              type="submit"
            >
              <SearchIcon/>
            </button>
          </form>
        </div>
        {temp && (
          <div>
            <h4>
              Current Temperature in <span> {`${city}`} </span>
            </h4>
            <p>{Math.round(temp)}°C</p>
            <p>Description: {description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
