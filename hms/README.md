# Hospital Management System (HMS)

A production-ready, modular HMS scaffold built with React, TypeScript, Material UI, Node.js, Express, PostgreSQL, and JWT-based RBAC. The structure includes a frontend dashboard, a REST API backend, database SQL scripts, Swagger docs, Docker support, sample data, and an automation-ready QA layout.

## Tech Stack
- Frontend: React.js, TypeScript, Material UI, Redux Toolkit, React Router
- Backend: Node.js, Express.js
- Database: PostgreSQL
- Auth: JWT + RBAC
- Testing: Playwright POM ready

## Folder Structure
```text
hms/
├── client/                  # React + TypeScript frontend
├── server/                  # Express backend
├── docker-compose.yml       # Local orchestration
├── Dockerfile.server        # Backend container
├── Dockerfile.client        # Frontend container
└── README.md                # Project overview
```

## Quick Start
```bash
cd hms
npm install
npm run dev
```

## API
- Health: GET /api/health
- Swagger: http://localhost:5000/api-docs

## Database
Run schema and seed scripts in PostgreSQL:
```bash
psql -U hms_user -d hms_db -f server/src/database/schema.sql
psql -U hms_user -d hms_db -f server/src/database/seed.sql
```

## QA Coverage
The repo includes structured test planning for:
- 500+ manual test cases
- SQL test cases
- API test cases
- Playwright POM framework
- Smoke / Sanity / Regression suites
- Security and performance cases
