import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Service from './models/Service.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Service.deleteMany({});
    console.log('✅ Services cleared!');
    process.exit();
  })
  .catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
  });
