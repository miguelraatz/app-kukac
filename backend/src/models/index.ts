import * as fs from 'fs/promises';
import { join } from 'path';

const path = '../database/data.json';

const initialData = {
  moto: [],
  carro: [],
};

class Model {
  public readJsonFile = async () => {
    try {
      const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
      return JSON.parse(contentFile);
    } catch (error) {
      return initialData;
    }
  };

  public writeJsonFile = async (content) => {
    try {
      const completePath = join(__dirname, path);
      await fs.writeFile(completePath, JSON.stringify(content));
    } catch (e) {
      console.error('Erro ao salvar o arquivo', e.message);
      return null;
    }
  };
}

export default Model;