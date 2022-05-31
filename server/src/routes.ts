import { prisma } from './prisma';
import express from 'express';
import nodemailer from 'nodemailer';

export const routes = express.Router();

// Proveniente do mailtrap.io.
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "bf1172e923ca06",
    pass: "c198c1af0f6409"
  }
});

// Também existem outros métodos HTTP, como GET, POST, PUT, PATCH, DELETE.
// GET = Buscar informações;
// POST = Cadastrar informações;
// PUT = Atualizar informações de uma entidade;
// PATCH = Atualizar uma informação única de uma entidade;
// DELETE = Deletar uma informação;

// Eu quero saber quando o usuário acessar o endpoint 'users. Com isso, eu quero rodar algum código.
// Essa é uma operação que possui um tempo de demora até execução. Portanto, é importante usar o async/await.
routes.post('/feedbacks', async (request, response) => {
  const { type, comment, screenshot } = request.body;

  // await faz o express aguardar a operação do banco ser finalizada, para então retornar uma resposta para o cliente.
  const feedback = await prisma.feedback.create({
    data: {
      // quando a chave é igual ao nome da variável de valor, eu posso escrever somente um. Por exemplo, somente um type, ao invés de dois.
      type: type,
      comment: comment,
      screenshot: screenshot
    }
  });

  // Eu quero aguardar que o email seja enviado, portanto uso o "await".
  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Sidnei Farias <sfarias.dev@gmail.com>',
    subject: 'Novo feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`
    ].join('/n')
  });

  // Status 201 é uma resposta de sucesso; nesse caso, é usada para sinalizar que algo foi criado no backend.
  return response.status(201).json({data: feedback});
});