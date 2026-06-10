# SafetyDesk AI - Architecture Overview

## System Architecture

### High-Level Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                      CLIENT LAYER                           │
├─────────────────────────────────────────────────────────────┤
│  React Web App    │  React Native Mobile    │  Admin Portal │
└────────────────────────────┬────────────────────────────────┘
                             │
                       HTTP/WebSocket
                             │
┌─────────────────────────────────────────────────────────────┐
│                      API LAYER (Node.js)                    │
├─────────────────────────────────────────────────────────────┤
│  Express.js Router                                          │
│  ├─ Authentication & Authorization                          │
│  ├─ Request Validation                                      │
│  ├─ Rate Limiting & Security                                │
│  └─ Response Formatting                                      │
└────────────────────────────┬────────────────────────────────┘
         │                    │                    │
    Business Logic    Real-time Updates      AI Processing
         │                    │                    │
┌────────────────────────────────────────────────────────────┐
│                    SERVICE LAYER                            │
├────────────────────────────────────────────────────────────┤
│  • User Service          • Incident Service                 │
│  • Company Service       • OSHA Service                     │
│  • Training Service      • Inspection Service               │
│  • AI Service            • Document Service                 │
└────────────────────────────┬─────────────────────────────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
     Database            Cache            External APIs
         │                   │                   │
    PostgreSQL            Redis         OpenAI, SendGrid,
  (Multi-tenant)        (Sessions)       AWS S3, etc.
```

## Core Modules

### 1. Authentication & Authorization
- JWT-based token authentication
- OAuth 2.0 (Google, Microsoft)
- Role-based access control (RBAC)
- Multi-tenant isolation

### 2. Incident Management
- Hazard reports
- Injury reports
- Near-miss reports
- Investigation workflows
- Root cause analysis
- Corrective actions

### 3. OSHA Compliance
- OSHA 300 Log management
- OSHA 301 Form generation
- Compliance calendar
- Audit tracking
- Citation management

### 4. Training & Certifications
- Course management
- Certification tracking
- Expiration alerts
- Digital certificates
- Toolbox talks

### 5. Inspections
- Mobile inspection forms
- Checklist templates
- Photo/video uploads
- Real-time scoring
- Deficiency tracking

### 6. AI Engine
- GPT-4 integration for safety assistant
- OCR for document processing
- Pattern detection for risk analysis
- Predictive analytics
- Report generation

## Data Flow

### Incident Reporting Flow
1. Employee submits incident via mobile/web
2. System validates and stores incident
3. AI analyzes incident for patterns
4. Notifications sent to supervisors
5. Investigation workflow initiated
6. AI generates suggested corrective actions
7. Follow-up tasks created
8. OSHA log automatically updated

### Multi-Tenancy
- Database: Schema-based isolation
- Cache: Redis keyspace prefixing
- API: Company ID in auth token
- Storage: S3 folder-based organization
