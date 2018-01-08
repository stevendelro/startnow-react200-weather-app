import { FETCH_WEATHER, CITY_TEXT_INPUT } from '../actions/index';

const INITIAL_STATE = {
  temperature: '',
  pressure: '',
  humidity: '',
  lowTemp: '',
  highTemp: '',
  windSpeed: '',
  icon: '',
  selectedCity: '',
  displayedCity: '',
  lat: '',
  lon: '',
  noResult: false,
  firstRender: true,
  pending: false,
  empty: true
};

//convert kelvin to fahrenheit
function tempConvert(k) {
  return 9 / 5 * (k - 273) + 32;
}
//convert hPa to inHg
function pressureConvert(hPa) {
  return 0.02953 * hPa;
}

export default function(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case `${FETCH_WEATHER}_FULFILLED`:
      return {
        ...state,
        temperature: `${tempConvert(payload.data.list[0].main.temp).toFixed(0)} F°`,
        pressure: `${pressureConvert(payload.data.list[0].main.pressure).toFixed(1)} in`,
        humidity: `${payload.data.list[0].main.humidity}%`,
        lowTemp: `${tempConvert(payload.data.list[0].main.temp_min).toFixed(1)} F°`,
        highTemp: `${tempConvert(payload.data.list[0].main.temp_max).toFixed(1)} F°`,
        windSpeed: `${payload.data.list[0].wind.speed.toFixed(1)} mph`,
        icon: payload.data.list[0].weather[0].icon,
        selectedCity: '',
        displayedCity: payload.data.city.name,
        lat: `${payload.data.city.coord.lat.toFixed(2)}`,
        lon: `${payload.data.city.coord.lon.toFixed(2)}`,
        pending: false,
        noResult: false,
        firstRender: false,
        pending: false,
        empty: false
      };
      break;
    case `${FETCH_WEATHER}_PENDING`:
      return {
        ...state,
        pending: true
      };
      break;
    case CITY_TEXT_INPUT:
      return {
        ...state,
        selectedCity: action.text
      };
      break;
    default: {
      return state;
    }
  }
}
