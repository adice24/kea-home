# Karnataka Examinations Authority (KEA) Portal

Official-styled Karnataka Examinations Authority (KEA) web portal with PGCET/KCET candidate provisional result verification, notices, circulars, and administrative services.

## Project Structure

```text
KEA WEBSITE/
├── frontend/               # React + TypeScript + Tailwind CSS (Vite)
│   ├── src/
│   │   ├── components/     # TopHeader, KarnatakaEmblem, KeaBot, FlashNews, etc.
│   │   ├── pages/          # HomePage, PgcetNoticesPage, ResultSearchPage, ResultDisplayPage
│   │   ├── services/       # api.ts (backend API client with offline fallback)
│   │   ├── data/           # mockCandidates.ts
│   │   └── index.css       # Tailwind 4 design system & custom styles
│   ├── public/             # Static assets (favicons, logos)
│   ├── .env.example        # Frontend environment variables template
│   ├── package.json        # Frontend dependencies & scripts
│   └── vite.config.ts      # Vite configuration with /api proxy to backend
│
├── backend/                # Node.js + Express REST API
│   ├── src/
│   │   ├── routes/         # Candidate verification & Notices APIs
│   │   └── server.js       # Express server entry point
│   ├── .env.example        # Backend environment template
│   ├── package.json        # Backend dependencies & scripts
│   └── README.md           # Backend documentation & endpoint references
│
├── render.yaml             # Render Blueprint for 1-click full-stack deployment
├── package.json            # Root workspace convenience scripts (concurrent dev)
└── README.md               # Monorepo documentation
```

---

## Getting Started

### 1. Install Dependencies
You can install dependencies for both applications from the root folder:
```bash
npm run install:all
```
Or install them individually:
```bash
cd frontend && npm install
cd ../backend && npm install
```

### 2. Environment Setup
- **Frontend**: Copy `frontend/.env.example` to `frontend/.env`
- **Backend**: Copy `backend/.env.example` to `backend/.env`

---

## Running Locally

### Run Both Frontend and Backend Concurrently (Recommended):
From the root workspace directory, run:
```bash
npm run dev
```
This concurrently starts:
- **Backend Server** on: **`http://localhost:5000/`**
- **Frontend Dev Server** on: **`http://localhost:5173/`**

### Or Run Individually:
- **Frontend:** `npm run dev:frontend` *(runs at `http://localhost:5173/`)*
- **Backend:** `npm run dev:backend` *(runs at `http://localhost:5000/`)*

### Testing Endpoints:
- Frontend Portal: `http://localhost:5173`
- Backend Healthcheck: `http://localhost:5000/api/health`
- Candidates API: `http://localhost:5000/api/candidates`
- Notices API: `http://localhost:5000/api/notices`
- Flash News API: `http://localhost:5000/api/notices/flash`

---

## Test Roll Numbers & Date of Birth
Try any of these pre-loaded records on the Provisional Result search page:
1. **Application No:** `205223` | **DOB:** `23/06/2005` (SHILPASHREE K - MCA Rank 11558)
2. **Application No:** `26652841` | **DOB:** `24/06/2005` (SHILPASHREE K - MCA Rank 11558)
3. **Application No:** `266100824` | **DOB:** `15/08/2002` (ANANYA R HEGDE - MCA Rank 42)
4. **Application No:** `266205912` | **DOB:** `24/03/2001` (MOHAMMED ZAYAN KHAN - MBA Rank 118)
5. **Application No:** `266308119` | **DOB:** `10/11/2000` (VIKRAM PATIL - M.Tech Rank 15)

---

## How to Deploy Backend on Render

### Option 1: Automatic Deployment using Render Blueprint (`render.yaml`)
1. Push your code to your GitHub / GitLab repository.
2. In the [Render Dashboard](https://dashboard.render.com), click **New +** → **Blueprint**.
3. Select your repository.
4. Render will read [`render.yaml`](./render.yaml) and automatically configure both the backend web service and the frontend static site with correct paths, start commands, health checks, and cross-service environment variables.
5. Click **Apply**.

### Option 2: Manual Web Service Setup on Render Dashboard
1. Go to [dashboard.render.com](https://dashboard.render.com) and click **New +** → **Web Service**.
2. Connect your Git repository.
3. Configure the settings:
   - **Name:** `kea-backend-api`
   - **Region:** Choose a region close to your users (e.g. Singapore)
   - **Root Directory:** `backend` *(Essential!)*
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** `Free`
4. In **Advanced Settings**:
   - **Health Check Path:** `/api/health`
5. In **Environment Variables**:
   - `NODE_ENV`: `production`
   - `PORT`: `5000`
   - `CORS_ORIGIN`: `*` (or your production frontend URL)
6. Click **Create Web Service**.
7. Once deployed, note down your backend URL (e.g., `https://kea-backend-api.onrender.com`).
8. Add this URL to your frontend's environment variable `VITE_API_BASE_URL` on your hosting platform (Vercel, Render, Netlify, etc.) and redeploy the frontend!
