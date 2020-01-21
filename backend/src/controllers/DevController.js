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
    
         const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location,
        })

        //filtra as conexões que estão à no máximo 10km de distancia
        // e que o novo dev tenha pelo menos uma das tecnologias filtradas

        const sendSocketMessageTo = findConnections(
            {latitude, longitude},
            techsArray,
        )

        sendMessage(sendSocketMessageTo, 'newDev', dev);

        }

        return response.json(dev);
    },
};