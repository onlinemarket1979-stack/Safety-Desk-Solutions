# SafetyDesk AI - Deployment & Getting Started Guide

## Prerequisites

- Node.js 18+
- npm 9+
- Docker & Docker Compose
- Git
- PostgreSQL client (psql) - optional but recommended

## Local Development Setup

### 1. Clone Repository

```bash
git clone https://github.com/onlinemarket1979-stack/Safety-Desk-Solutions.git
cd Safety-Desk-Solutions
```

### 2. Start Infrastructure Services

```bash
# Start PostgreSQL, Redis, and MinIO
docker-compose up -d

# Verify services are running
docker-compose ps
```

Expected output:
```
NAME                     STATUS
safetydesk-postgres      Up (healthy)
safetydesk-redis         Up (healthy)
safetydesk-minio         Up (healthy)
```

### 3. Backend Setup

```bash
cd backend

# Copy environment file
cp .env.example .env

# Install dependencies
npm install

# Start development server
npm run dev
```

Backend running at: `http://localhost:5000`

**API Endpoints Available**:
- GET `/health` - Health check
- GET `/api/docs` - API documentation

### 4. Frontend Setup (New Terminal)

```bash
cd frontend

# Copy environment file
cp .env.example .env

# Install dependencies
npm install

# Start development server
npm start
```

Frontend running at: `http://localhost:3000`

**Default Routes**:
- `/auth/login` - Login page
- `/auth/register` - Registration page
- `/dashboard` - Main dashboard

### 5. Access Services

| Service | URL | Credentials |
|---------|-----|-------------|
| Frontend | http://localhost:3000 | — |
| Backend API | http://localhost:5000 | — |
| API Docs | http://localhost:5000/api/docs | — |
| PostgreSQL | localhost:5432 | safetydesk / safetydesk_dev_password |
| Redis | localhost:6379 | — |
| MinIO Console | http://localhost:9001 | minioadmin / minioadmin |

## Database Setup (Optional - After Implementation)

```bash
# Run migrations (when implemented)
cd backend
npm run db:migrate

# Seed data (when implemented)
npm run db:seed
```

## Testing

### Backend Tests

```bash
cd backend

# Run all tests
npm test

# Watch mode
npm test:watch

# Coverage
npm test -- --coverage
```

### Frontend Tests

```bash
cd frontend

# Run tests
npm test

# Coverage
npm test -- --coverage
```

## Code Quality

### Backend

```bash
cd backend

# Lint code
npm run lint
```

### Frontend

```bash
cd frontend

# Lint code
npm run lint
```

## Building for Production

### Backend Build

```bash
cd backend
npm run build  # When build script is added
```

### Frontend Build

```bash
cd frontend
npm run build
```

Outputs to `frontend/build/`

## Docker Production Build

### Build Images

```bash
# Build backend image
docker build -t safetydesk-api:1.0.0 -f backend/Dockerfile .

# Build frontend image
docker build -t safetydesk-web:1.0.0 -f frontend/Dockerfile .
```

### Run Production Stack

```bash
docker-compose -f docker-compose.prod.yml up -d
```

## Environment Configuration

### Backend .env Variables

```env
NODE_ENV=development|production
PORT=5000
BASE_URL=http://localhost:5000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=safetydesk_dev
DB_USER=safetydesk
DB_PASSWORD=safetydesk_dev_password

REDIS_URL=redis://localhost:6379

JWT_SECRET=your-secure-secret-key
JWT_EXPIRES_IN=7d

OPENAI_API_KEY=your-openai-key
OPENAI_MODEL=gpt-4
```

### Frontend .env Variables

```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_ENV=development|production
REACT_APP_VERSION=1.0.0
```

## Troubleshooting

### Port Already in Use

```bash
# Find process on port
lsof -i :5000  # Backend
lsof -i :3000  # Frontend

# Kill process
kill -9 <PID>
```

### Docker Services Not Starting

```bash
# Check logs
docker-compose logs postgres
docker-compose logs redis

# Rebuild
docker-compose down
docker-compose up -d --build
```

### Database Connection Issues

```bash
# Test PostgreSQL connection
psql -h localhost -U safetydesk -d safetydesk_dev

# Check Redis connection
redis-cli -h localhost ping
```

### npm Dependencies Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Development Workflow

### Creating Features

1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes and test locally
3. Commit with clear message: `git commit -m "[FEAT] Your feature description"`
4. Push and create PR: `git push origin feature/your-feature`

### Commit Message Format

- `[FEAT]` - New feature
- `[FIX]` - Bug fix
- `[DOCS]` - Documentation
- `[TEST]` - Tests
- `[REFACTOR]` - Code refactoring
- `[CHORE]` - Configuration changes

## Next Steps

1. **Implement Database Migrations** - Create Knex migrations for all 8 tables
2. **Build Authentication** - JWT login/register with bcryptjs
3. **Create Controllers** - Business logic for each module
4. **Integrate Frontend** - Connect React forms to API
5. **Add Testing** - Jest + Supertest for coverage
6. **CI/CD Pipeline** - GitHub Actions for automated testing/deployment

## Support & Resources

- **API Documentation**: `/api/docs` (when running)
- **Architecture Docs**: `/docs/ARCHITECTURE.md`
- **Database Schema**: `/docs/DATABASE.md`
- **API Reference**: `/docs/API.md`
- **GitHub Issues**: Report bugs or request features

## Production Deployment Checklist

- [ ] Set production environment variables
- [ ] Configure database backups
- [ ] Set up SSL/HTTPS
- [ ] Configure CDN for static assets
- [ ] Set up monitoring & logging
- [ ] Configure automated backups
- [ ] Test disaster recovery
- [ ] Set up CI/CD pipeline
- [ ] Review security settings
- [ ] Load test the application

---

**Ready to develop?** Start with the Backend/Frontend setup above and begin implementing the database layer! 🚀
