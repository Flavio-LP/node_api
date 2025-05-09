import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API com Prisma',
      version: '1.0.0',
      description: 'Documentação da API usando Swagger',
    },
  },
  apis: ['./src/routes/*.ts'], // Onde estão as rotas comentadas com Swagger
};

const specs = swaggerJsdoc(options);

export function setupSwagger(app: Express) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}
