const axios = require('axios');


const getClima= async (lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=af445e6a7e3b265a3d2abed0531d96cc`);
    return resp.data.main.temp;
}

module.exports= {
    getClima
}