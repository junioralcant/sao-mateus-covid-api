const mongoose = require("mongoose");

const CovidSchema = new mongoose.Schema({
  confirmados: {
    type: String,
  },

  suspeitos: {
    type: String,
  },

  monitorados: {
    type: String,
  },

  descartados: {
    type: String,
  },

  recuperados: {
    type: String,
  },

  obitos: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Covid", CovidSchema);
