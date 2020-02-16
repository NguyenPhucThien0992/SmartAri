const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

//create Schema

const AlarmSchema = new Scheme(
  {
    alarm: [
      {
        temperature: {
          type: Object,
          isRequired: true
        },
        humidity: {
          type: Object,
          isRequired: true
        },
        carbonic: {
          type: Object,
          isRequired: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("alarm", AlarmSchema);
