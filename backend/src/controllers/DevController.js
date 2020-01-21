const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response){
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev){

        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
        const { name, avatar_url, bio} = apiResponse.data;
        
        const techsArray = parseStringAsArray(techs);
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }
    
<<<<<<< HEAD
         const dev = await Dev.create({
=======
        dev = await Dev.create({
>>>>>>> d4ea5e4302ca8302e51e48cb3d3f8331376a24cd
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location,
        })
    
        // Filtrar as conexões que estão há no máximo 10km de distância
        // e que o novo dev tenha pelo menos uma das tecnologias filtradas
        
        const sendSocketMessageTo = findConnections(
            { latitude, longitude },
            techsArray,
        )

<<<<<<< HEAD
        //filtra as conexões que estão à no máximo 10km de distancia
        // e que o novo dev tenha pelo menos uma das tecnologias filtradas

        const sendSocketMessageTo = findConnections(
            {latitude, longitude},
            techsArray,
        )

        sendMessage(sendSocketMessageTo, 'newDev', dev);

        }
=======
        sendMessage(sendSocketMessageTo, 'newDev', dev);
    }
>>>>>>> d4ea5e4302ca8302e51e48cb3d3f8331376a24cd

        return response.json(dev);
    },
};