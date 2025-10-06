import express from 'express';
import routes from './routes.js';
import './config/database.js';
import { sequelize } from './config/database.js';
import { Endereco } from './models/endereco.js';

const app = express();

app.use(express.json());

app.use(routes);

(async () => {
    try {
        await sequelize.authenticate();
        Endereco.init(sequelize);
        await Endereco.sync()
        await sequelize.sync({ alter: true });
        console.log("Banco sincronizado!");

        app.listen(1335, () => console.log("server is running"));
    } catch (err) {
        console.error("Erro ao sincronizar banco:", err);
    }
})();
