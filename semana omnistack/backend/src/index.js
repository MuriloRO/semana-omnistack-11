const express = require("express");
const routes = require('./routes');
const cors = require('cors')

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

/*
* GET: buscar uma informacao do back end
* POST: Criar uma informacao no back end
* PUT: Alteraruma informacao no back end
* DELETE: Deletar uma iunformacao no back end
*/

/*
* Tipos de parametros:
* Query params: Parametros nomeados e enviados na rota após o "?"(servem apra filtros, paginação)
* Route params: parametros utilizados para identificar recursos
* Request body: Corpo da requisicao utilizado para criar pu alterar recursos
*/