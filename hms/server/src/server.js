import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { createRequire } from 'module';
import modulesRouter from './routes/modules.routes.js';

const require = createRequire(import.meta.url);
const pkg = require('../package.json');

dotenv.config();

const app = express();
const requestedPort = Number(process.env.PORT || 5000);

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hospital Management System API',
      version: pkg.version,
      description: 'Production-ready HMS API documentation',
    },
  },
  apis: ['./src/**/*.js'],
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'hms-server' });
});

app.get('/api/modules', (_req, res) => {
  res.json({
    modules: [
      'Dashboard',
      'Patients',
      'Appointments',
      'Doctors',
      'Beds',
      'Billing',
      'Reports'
    ]
  });
});

app.use('/api/modules', modulesRouter);

const startServer = (port = requestedPort) => {
  const server = app.listen(port, () => {
    console.log(`HMS server listening on port ${port}`);
  });

  server.on('error', (error) => {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'EADDRINUSE') {
      console.warn(`Port ${port} is busy. Retrying on ${port + 1}...`);
      server.close(() => startServer(port + 1));
      return;
    }

    console.error(error);
  });
};

startServer();
