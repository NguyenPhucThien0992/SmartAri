const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

//create Schema

const ControlSchema = new Scheme(
  {
    control: [
      {
        fan: {
          type: Boolean,
          isRequired: true
        },
        car: {
          type: Boolean,
          isRequired: true
        },
        humid: {
          type: Boolean,
          isRequired: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("control", ControlSchema);
