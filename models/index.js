import mongoose from 'mongoose';

import accountModel from './accountModel.js';
import dotenv from 'dotenv';
dotenv.config();
const db = {};

db.url = `mongodb+srv://{$process.env.USERDB}:{$process.env.PWDDB}@cluster0.geapb.mongodb.net/bank`;
db.mongoose = mongoose;
db.account = accountModel(mongoose);

export { db };
