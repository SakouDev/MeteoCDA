import axios from 'axios'

const url = `https://api.openweathermap.org`
const API_KEY = "0169ac00ed288d740b1cc9130a2eb45d"
// const API_KEY = "0d6166ddad3768c332e4a2f72242e6ab"

const ApiService = {
    get(lat, lon) {
        return axios
            .get(`${url}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
    }

}

export { ApiService }