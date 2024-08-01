import Contact from '../models/form.model.js'


export const form = async (req, res) => {
  const { first_name, last_name, phone, country, message } = req.body;

  if (!first_name || !last_name || !phone || !country || !message) {
      return res.status(400).json({ error: 'All fields are required' });
  }

  const newContact = new Contact({
      first_name,
      last_name,
      phone,
      country,
      message
  });

  try {
      await newContact.save();
      res.status(201).json({ message: 'Contact details submitted successfully', contact: newContact });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};