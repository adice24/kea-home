# KEA Portal Backend Service

Express.js REST API providing candidate result verification, PGCET notices, and circulars data for the Karnataka Examinations Authority (KEA) Portal.

---

## Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Default `.env` settings:
```env
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

### 3. Run Locally
```bash
# Development (Node watch mode)
npm run dev

# Production
npm start
```
Server runs at `http://localhost:5000`.

---

## API Endpoints Reference

| Method | Endpoint | Description | Sample Parameters / Body |
|---|---|---|---|
| `GET` | `/api/health` | Server health & uptime status | - |
| `GET` | `/api/candidates` | List sample candidates or query | `?appNo=205223&dob=2005-06-23` |
| `GET` | `/api/candidates/:applicationNo` | Get single candidate by Application No | Path parameter |
| `POST` | `/api/candidates/verify` | Authenticate & verify candidate result | `{"applicationNo": "205223", "dob": "2005-06-23"}` |
| `GET` | `/api/notices` | List published KEA notices & circulars | `?category=PGCET-2026` |
| `GET` | `/api/notices/flash` | Retrieve flash news marquee items | - |

### Pre-loaded Sample Roll Numbers for Testing
- **App No:** `205223` / `26652841` | **DOB:** `23/06/2005` (SHILPASHREE K - MCA Rank 11558)
- **App No:** `266100824` | **DOB:** `15/08/2002` (ANANYA R HEGDE - MCA Rank 42)
- **App No:** `266205912` | **DOB:** `24/03/2001` (MOHAMMED ZAYAN KHAN - MBA Rank 118)
- **App No:** `266308119` | **DOB:** `10/11/2000` (VIKRAM PATIL - M.Tech Rank 15)
- **App No:** `2026101` | **DOB:** `15/04/2002` (RAHUL SHARMA - MBA Rank 1420)

---

## How to Deploy Backend on Render

You can deploy the backend to Render either using **Method A (Render Blueprint - Recommended)** or **Method B (Manual Dashboard)**:

### Method A: Render Blueprint (Automatic via `render.yaml`)
1. Push your repository to **GitHub** or **GitLab**.
2. Log into [Render Dashboard](https://dashboard.render.com).
3. Click **"New +"** and select **"Blueprint"**.
4. Connect your GitHub repository.
5. Render reads the root `render.yaml` file and automatically sets up:
   - The backend **Web Service** (`kea-backend-api`)
   - The frontend **Static Site** (`kea-frontend-portal`)
   - Configures all build commands, start commands, health check path, and environment variables automatically.
6. Click **"Apply"**.

---

### Method B: Manual Web Service Deployment on Render
If you prefer creating the backend service manually:

1. Log into your [Render Dashboard](https://dashboard.render.com).
2. Click **"New +"** in the top-right corner and select **"Web Service"**.
3. Choose **"Build and deploy from a Git repository"** and connect your repository.
4. Fill in the following service details:
   - **Name:** `kea-backend-api` (or your chosen name)
   - **Region:** Singapore / Frankfurt / Oregon (choose closest to India, e.g. Singapore)
   - **Branch:** `main` (or your active branch)
   - **Root Directory:** `backend` *(Crucial: specify `backend` because this is a monorepo)*
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** `Free`
5. Expand **"Advanced"**:
   - **Health Check Path:** `/api/health`
6. Under **"Environment Variables"**, add:
   | Key | Value | Purpose |
   |---|---|---|
   | `NODE_ENV` | `production` | Enables production mode optimizations |
   | `PORT` | `5000` | Render assigns its own port, but 5000 is our fallback |
   | `CORS_ORIGIN` | `*` (or your frontend Render/Vercel URL) | Allows your deployed frontend to make API calls |
7. Click **"Create Web Service"**.
8. Render will build and deploy your service. Once finished, Render gives you an HTTPS URL, for example:
   ```text
   https://kea-backend-api.onrender.com
   ```
9. Verify by opening in browser:
   ```text
   https://kea-backend-api.onrender.com/api/health
   ```

---

### Connecting Backend URL to Frontend

Once your backend is live on Render:
1. Copy your backend Render URL: `https://<your-backend-name>.onrender.com`.
2. In your frontend deployment (on Render, Vercel, or Netlify):
   - Set the environment variable:
     ```env
     VITE_API_BASE_URL=https://<your-backend-name>.onrender.com
     ```
3. Trigger a redeploy of the frontend so Vite bakes in the production backend URL.
