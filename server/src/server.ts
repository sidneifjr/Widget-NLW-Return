import express from 'express';
import { routes } from './routes';

// É importante frisar que todos os comandos neste arquivo são sequenciais, ou seja, seguem uma ordem linear de execução.
const app = express();

// Qual o filme que o Express.js não suporta? Sexta-feira 13. Porquê? Por causa do JSON.

// Por padrão, o Express não sabe lidar com JSON; portanto, um middleware é necessário.
app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log('HTTP server running!');
});
