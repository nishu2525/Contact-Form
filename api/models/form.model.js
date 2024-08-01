import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    }
  }, {
    timestamps: true
  });
  

const Contact = mongoose.model('Contact', contactSchema);


export default Contact;