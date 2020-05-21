const Covid = require("../models/Covid");

class CovidController {
  async index(req, res) {
    const covids = await Covid.find();

    return res.json(covids);
  }

  async store(req, res) {
    const covid = await Covid.create(req.body);

    return res.json(covid);
  }

  async update(req, resp) {
    const covid = await Covid.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return resp.json(covid);
  }
}

module.exports = new CovidController();
