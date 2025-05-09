import express, { Request, Response } from 'express';
import { PrismaClient } from './generated/prisma';
import userRoutes from './routes/user.routes';
import { setupSwagger } from './swagger';
import 'dotenv/config';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

setupSwagger(app);
app.use('/users', userRoutes);

app.get('/', (_req: Request, res: Response) => {
  res.send('API Prisma + PostgreSQL com schema personalizado!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando em http://localhost:${PORT}`));