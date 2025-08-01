import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import Service from './models/Service.js';
import Portfolio from './models/Portfolio.js';
import Testimonial from './models/Testimonial.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB Connected");
}).catch((err) => {
  console.error(err);
  process.exit(1);
});

const importData = async () => {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'data.json'), 'utf-8'));

    await Service.deleteMany();
    await Portfolio.deleteMany();
    await Testimonial.deleteMany();

    await Service.insertMany(data.services);
    await Portfolio.insertMany(data.portfolio);
    await Testimonial.insertMany(data.testimonials);

    console.log("✅ Data Imported Successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Data Import Failed:", err);
    process.exit(1);
  }
};

importData();

