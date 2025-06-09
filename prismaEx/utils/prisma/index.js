import { PrismaClient } from "@prisma/client"


//es6로 생성자를 통해 class생성
export const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
  errorFormat: 'pretty'
});

