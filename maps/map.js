let axios = require("axios");

const getLugarLatLng = async (direccion) => {

    let encodeUrl = encodeURI(direccion);

    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl}&key=AIzaSyBGQHe0YYadKNVfJu0hnDSBYgm3_-Ffo8o`);

    if(respuesta.data.status === "ZERO_RESULTS"){
        throw new Error(`No hay resultados para la ciudad ${encodeUrl}`);
    }

    let location = respuesta.data.results[0].geometry.location;
    let address = respuesta.data.results[0].formatted_address;
    console.log('Lat :',location.lat);
    console.log('Long :',location.lng);
    console.log('Dirección :',address);

    return {
        direccion: address,
        lat: location.lat,
        lng: location.lng
    };
};

module.exports = {
    getLugarLatLng
};





