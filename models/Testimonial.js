import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  name: String,
  role: String,
  quote: String,
  image: String
});

export default mongoose.model('Testimonial', testimonialSchema);
