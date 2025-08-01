import Contact from '../models/Contact.js';

export const submitContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send message.' });
  }
};
