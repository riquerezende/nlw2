import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
//console.log(request.body);
//console.log(request.params) /:id
//console.log(request.query)  /?name=Henrique&age=23
//const users = [
//    { name: 'Diego', age: 25 },
//    { name: 'Vini', age: 25 }
//]

// GET, POST, PUT, DELETE
// www.minhaapi.com.br:3333/users 
// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação
app.listen(3333);
