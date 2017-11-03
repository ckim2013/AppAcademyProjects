import React from 'react';

class Weather extends React.Component {
  constructor(){
    super();
    this.state = {weather: null};
    this.pollWeather = this.pollWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.pollWeather);
  }

  pollWeather(location) {
    let lat = location.coords.latitude;
    let lon = location.coords.longitude;
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
    let apiKey = '58c9c6f15e15becd25a729913beabce7';
    url += `&APPID=${apiKey}`;
    let xmlRequest = new XMLHttpRequest();
    xmlRequest.onreadystatechange = () => {
      if (xmlRequest.status === 200 && xmlRequest.readyState === XMLHttpRequest.DONE) {
        const weather = JSON.parse(xmlRequest.responseText);
        this.setState({weather});
      }
    };

    xmlRequest.open('GET', url, true);
    xmlRequest.send();

  }

  render() {
    let content;

    if (this.state.weather) {
      let weather = this.state.weather;
      let temp = Math.floor((weather.main.temp - 273.15));

      content = <div>
        <p>{weather.name}</p>
        <p>{temp}°C</p>
      </div>;
    } else {
      content = <div>
        Please wait for the weather...
      </div>;
    }

    return (
      <div>
        <div className='header-container'>
          <h1>Weather</h1>
        </div>
        <div className="weather">
          {content}
        </div>
      </div>
    );
  }
}

export default Weather;
