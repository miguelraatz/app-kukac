import express from 'express';
import cors from 'cors';

const corsOption = {
  origin: ['http://localhost:5173'],
};

class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors(corsOption));
  }
}

export default App;
