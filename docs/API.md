# SafetyDesk AI - API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All endpoints (except auth) require JWT token in Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### Register
```
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePassword123",
  "company_name": "Acme Construction"
}

Response: { token, user }
```

#### Login
```
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePassword123"
}

Response: { token, user }
```

### Companies

#### Get Company Dashboard
```
GET /companies/:id

Response: {
  id, name, industry, size, subscription_tier,
  safety_score, open_incidents, compliance_status
}
```

### Incidents

#### Report Incident
```
POST /incidents
Content-Type: application/json

{
  "type": "injury",
  "title": "Cut on hand",
  "description": "Employee cut hand on equipment",
  "location": "Site A, Building 2",
  "severity": "moderate",
  "photos": [...]
}

Response: { id, created_at, status }
```

#### Get Incidents
```
GET /incidents?status=open&limit=50

Response: [{ id, type, title, severity, status, created_at }, ...]
```

### OSHA

#### Get OSHA 300 Log
```
GET /osha/logs?year=2026

Response: [{ id, employee_name, injury_type, date, case_number }, ...]
```

#### Add OSHA Log Entry
```
POST /osha/logs
Content-Type: application/json

{
  "employee_name": "John Smith",
  "injury_type": "Laceration",
  "date_of_incident": "2026-06-10",
  "part_of_body": "Hand"
}

Response: { id, case_number }
```

### Training

#### Get Training Records
```
GET /training/certifications?user_id=xxx

Response: [{ id, course_name, completion_date, expiration_date }, ...]
```

#### Record Certification
```
POST /training/certifications
Content-Type: application/json

{
  "user_id": "xxx",
  "course_name": "OSHA 30 Hour",
  "completion_date": "2026-06-01",
  "expiration_date": "2028-06-01"
}

Response: { id }
```

### AI Assistant

#### Ask Safety Question
```
POST /ai/ask
Content-Type: application/json

{
  "question": "What are the OSHA requirements for fall protection?"
}

Response: { answer, sources, confidence }
```

#### Generate Incident Summary
```
POST /ai/incident-summary
Content-Type: application/json

{
  "incident_id": "xxx"
}

Response: { summary, root_causes, recommendations }
```
