import express from 'express';
import { accountRouter } from './routes/accountRouter.js';
import dotenv from 'dotenv';

import { db } from './models/index.js';
const app = express();

dotenv.config();

(async () => {
  try {
    console.log('Conectando ao MongoDB...');
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('Conectado com sucesso ao MongoDB...');
  } catch (error) {
    console.log('Erro ao conectar no MongoDB. ' + error);
  }
})();

app.use(express.json());
app.use(accountRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log('API Bank Started ...');
});
