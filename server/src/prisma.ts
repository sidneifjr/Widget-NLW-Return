import { PrismaClient } from "@prisma/client";

// Este arquivo prisma.ts é utilizado para acessar o banco de dados.
export const prisma = new PrismaClient({
  log: ['query'], // a cada operação realizada pelo Prisma no banco de dados, a mesma será exibida no console.
});
