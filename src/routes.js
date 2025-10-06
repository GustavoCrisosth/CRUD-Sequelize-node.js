import express from "express";
import { ClienteController } from './controllers/ClienteController.js';
import { validarCliente, verificarClienteExiste } from "./middlewares/clienteMiddleware.js";
import { ProdutoController } from "./controllers/ProdutoController.js";
import { validarProduto } from './middlewares/produtoMiddleware.js';
import { EnderecoController } from "./controllers/EnderecoController.js";
import { validarEndereco } from "./middlewares/enderecoMiddleware.js";
import { CompraController } from "./controllers/CompraController.js";
import { validarCompra } from "./middlewares/compraMiddleware.js";


const routes = express.Router();

routes.get('/clientes', ClienteController.findAll);
routes.get('/clientes/:id', verificarClienteExiste, ClienteController.findByPk);
routes.post('/clientes', validarCliente, ClienteController.create);
routes.put('/clientes/:id', verificarClienteExiste, validarCliente, ClienteController.update);
routes.delete('/clientes/:id', verificarClienteExiste, ClienteController.delete);


routes.get('/produtos', ProdutoController.findAll);
routes.get('/produtos/:id', ProdutoController.findByPk);
routes.post('/produtos', validarProduto, ProdutoController.create);
routes.put('/produtos/:id', validarProduto, ProdutoController.update);
routes.delete('/produtos/:id', ProdutoController.delete);

routes.get("/enderecos", EnderecoController.findAll);
routes.get("/enderecos/:id", EnderecoController.findByPk);
routes.post("/enderecos", validarEndereco, EnderecoController.create);
routes.put("/enderecos/:id", validarEndereco, EnderecoController.update);
routes.delete("/enderecos/:id", EnderecoController.delete);


routes.get("/compras", CompraController.findAll);
routes.post("/compras", validarCompra, CompraController.create);

routes.get("/clientes/:id/produtos", CompraController.findByCliente);
routes.get("/clientes/:id/com-endereco", ClienteController.buscarClienteComEndereco);

export default routes;