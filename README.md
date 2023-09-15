### App Playground Kukac
___
Para iniciar o projeto, siga os passos abaixo:

```bash
git clone git@github.com:miguelraatz/app-kukac.git
```
Entre no diretório:
```bash
cd app-kukac
```
___ 

<details><summary>Iniciando Frontend :computer:</summary>

Entre no diretório:
```bash
cd frontend
```
Instale as dependências:
```bash
npm install
```
Inicie o projeto:
```bash
npm run dev
```
</details>

___ 

<details><summary>Iniciando Backend :gear:</summary>

Entre no diretório:
```bash
cd backend
```
Instale as dependências:
```bash
npm install
```
Inicie o projeto:
```bash
npm run dev
```
</details>

___

<details><summary>Rodandos os testes :test_tube:</summary>

Entre no diretório:

:warning: É necessário que o server do backend esteja funcionando
```bash
cd backend
```
Inicie os testes:
```bash
npm run test
```
</details>

___

<details><summary>Documentação API :test_tube:</summary>

**BASE_URL**: `http://localhost:3001/endpoint`

| Endpoints      | Método | Descrição                                                           | Body                                                                                             |
| -------------- | ------ | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `/caixa`       | POST   | Retorna todas as notas possíveis no troco com notas de 1, 10 e 100. | `{ "purchase": number, "money": number }`                                                        |
| `/garagem`     | POST   | Adiciona um carro novo ao JSON.                                     | `{ "vehicle": string, "modelo": string, "year": number, "brand": string, "doors": number }`      |
| `/garagem`     | POST   | Adiciona uma moto nova ao JSON.                                     | `{ "vehicle": string, "modelo": string, "year": number, "brand": string, "passengers": number }` |
| `/palindromos` | POST   | Retorna todos os números palíndromos no intervalo selecionado.      | `{ "start": number, "end": number } `                                                            |
</details>

___
