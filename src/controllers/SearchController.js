const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(req, res){
    const {latitude, longitude, techs} = req.query;
    
    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.findOne({
      techs:{
        $in: techsArray,
      },
      location: {
        $near:{
          $geometry:{
            type: 'Point',
            coordenates: [longitude, latitude],
          },
          $maxDistance: 10000,
        }
      }
    });


    return res.json({ devs });
  }

};