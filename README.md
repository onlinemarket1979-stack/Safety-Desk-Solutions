# SafetyDesk AI

**Your AI-Powered Virtual Safety Department**

A comprehensive, multi-tenant platform for construction companies to manage safety, compliance, training, and OSHA operations through AI automation and human virtual safety admin services.

## Vision

Become the "Salesforce of Construction Safety" — enabling contractors to:
- Report incidents and hazards
- Pass OSHA inspections
- Track employee training and certifications
- Manage compliance documentation
- Receive AI-powered safety guidance
- Operate an entire safety department without hiring a full-time safety manager

## Platform Overview

### Core Features
1. **Safety Command Center** — Dashboard, Safety Score, Incidents, OSHA Status, Projects
2. **Incident Management** — Hazard, Injury, Near Miss Reporting with investigations
3. **OSHA Compliance Hub** — 300 Logs, 301 Forms, Audit Tracking, Citation Management
4. **Inspection System** — Mobile inspections, checklists, audits, site scoring
5. **Training Center** — Employee records, certifications, expiration alerts, toolbox talks
6. **Document Control** — Safety plans, SOPs, SDS, PPE records, permits
7. **AI Safety Assistant** — OSHA guidance, report generation, risk recommendations
8. **Virtual Safety Admin** — Compliance monitoring, weekly reviews, audit prep

## Tech Stack

### Backend
- **Framework**: Node.js + Express.js
- **Database**: PostgreSQL (multi-tenant)
- **Cache**: Redis
- **AI/ML**: OpenAI API
- **Authentication**: JWT + OAuth 2.0

### Frontend
- **Framework**: React.js 18+
- **State Management**: Redux Toolkit
- **UI Components**: Material-UI (MUI)
- **Mobile**: React Native

## Quick Start

```bash
# Clone repository
git clone https://github.com/onlinemarket1979-stack/Safety-Desk-Solutions.git
cd Safety-Desk-Solutions

# Setup
docker-compose up -d
cd backend && npm install && npm run dev
cd ../frontend && npm install && npm start
```

Access at `http://localhost:3000`

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Database Schema](docs/DATABASE.md)
- [API Reference](docs/API.md)
- [Contributing](CONTRIBUTING.md)

## Roadmap

### Phase 1: MVP
- Core platform, incident reporting, OSHA logs, training tracking
- Target: 10 paying companies

### Phase 2: Growth
- Mobile app, AI reports, compliance automation, inspections
- Target: 50+ companies

### Phase 3: Scale
- Predictive AI, voice reporting, wearables, white-label
- Target: 200+ companies

## License

Proprietary — SafetyDesk AI. All rights reserved.
