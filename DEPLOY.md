# Deploy audioHAZE (free, single service)

**Simplest option:** One app on **Render** (like Heroku used to be). The Node backend serves both the API and the built React frontend, so you don’t need Netlify or CORS. You only need a Postgres URL.

---

## 1. Database (free Postgres)

Create a Postgres database and get a **connection URL**:

- **[Neon](https://neon.tech)** – Free tier, no time limit. Create a project → copy the connection string (e.g. `postgresql://user:pass@ep-xxx.neon.tech/neondb?sslmode=require`).
- **Render Postgres** – In Render: New → PostgreSQL. Free tier expires after 90 days; then you can export and move to Neon.

Use this as `DATABASE_URL` in the next step.

---

## 2. Deploy to Render

1. Push your repo to **GitHub** (if it isn’t already).

2. Go to **[Render](https://render.com)** → **New** → **Web Service**.

3. Connect your GitHub account and select the **audioHAZE** repo.

4. Render can pick up `render.yaml` from the repo and use:
   - **Build command:** `npm install && npm run build --prefix frontend`
   - **Start command:** `npm start --prefix backend`

   If you’re not using the blueprint, set these by hand and leave **Root Directory** blank.

5. **Environment variables** (Dashboard → your service → Environment):
   - `NODE_ENV` = `production`
   - `DATABASE_URL` = your Postgres connection URL (from step 1)
   - `JWT_SECRET` = any long random string (e.g. from `openssl rand -hex 32`)
   - `JWT_EXPIRES_IN` = `604800` (optional)

6. Click **Create Web Service**. Render will install deps, build the frontend, and start the backend.

7. **One-time: run migrations and seed** (from your machine)
   - Copy the **External Database URL** from your Render Postgres dashboard (Internal URL only works from inside Render; use External when running from your computer).
   - Put it in `backend/.env` as `DATABASE_URL=postgresql://...` (include `?sslmode=require` if the URL doesn’t have it).
   - From the **backend** directory, run with production config so Sequelize uses `DATABASE_URL`:
     ```bash
     cd backend
     NODE_ENV=production npx dotenv sequelize db:migrate
     NODE_ENV=production npx dotenv sequelize db:seed:all
     ```
   - When done, you can change `DATABASE_URL` in `.env` back to your local DB if you like.
   - *(Running from repo root doesn’t load `backend/.env`, and without `NODE_ENV=production` Sequelize uses development config and can hit “client password must be a string” if env isn’t loaded.)*

8. Open the URL Render gives you (e.g. `https://audiohaze.onrender.com`). The app should load; API and frontend are on the same origin, so no CORS or extra env vars are needed.

---

## Free tier notes

- **Render free web service:** Spins down after ~15 minutes of no traffic. First request after that can take 30–60 seconds (cold start). Fine for a portfolio.
- **Neon free Postgres:** Stays free; no 90-day cutoff like Render’s free Postgres.
- No credit card required for Render or Neon free tiers.

---

## Optional: AWS for song uploads

If you use S3 (or similar) for uploads, add the same AWS env vars you use locally to the Render service (e.g. in Environment). If you’re not using cloud uploads yet, you can skip this.
