import { Router, Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();
const router = Router();


/**
 * @openapi
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado
 */
router.post('/', async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({ data: { name, email } });
  res.status(201).json(user);
});


// CREATE

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     responses:
 *       200:
 *         description: Lista de usuários
 */

// READ ALL
router.get('/', async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

/**
 * @openapi
 * /users/{id}:
 *   get:
 *     summary: Listar usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *     responses:
 *       200:
 *         description: Listar usuário
 */


// READ ONE
router.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = await prisma.user.findUnique({ where: { id } });
  res.json(user);
});

/**
 * @openapi
 * /users:
 *   puts:
 *     summary: Alterar usuário
 *     responses:
 *       200:
 *         description: Alterar usuário
 */

// UPDATE
router.put('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  const user = await prisma.user.update({
    where: { id },
    data: { name, email },
  });
  res.json(user);
});

/**
 * @openapi
 * /users:
 *   delete:
 *     summary: Deletar usuário
 *     responses:
 *       200:
 *         description: Deletar usuário
 */


// DELETE
router.delete('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = await prisma.user.delete({ where: { id } });
  res.json(user);
});

export default router;
