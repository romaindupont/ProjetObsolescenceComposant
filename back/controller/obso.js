const { list } = require('postcss');
const obso_model = require('../models/obso_model');

const obsoController = {
  search: async (req, res) => {
    try {
      let List = [];
      const response = await obso_model.getData(req.body.search);
      const response1 = await obso_model.getData1(req.body.search);
      const response2 = await obso_model.getData2(req.body.search);
      const response3 = await obso_model.getData3(req.body.search);
      const response4 = await obso_model.getData4(req.body.search);
      const response5 = await obso_model.getData5(req.body.search);
      const response6 = await obso_model.getData6(req.body.search);
      List.push(response, response1, response2, response3, response4, response5, response6)
      return res.status(201).json({
          logging: true,
          message: "c passé",
          List
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};

module.exports = obsoController;
