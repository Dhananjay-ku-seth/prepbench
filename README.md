# PrepBench

**Aptitude shortcuts and practice — 9 topics, instant feedback, no sign-up needed.**

**Live demo:** https://prepbench.vercel.app/

## What it does

A free, standalone reference-and-practice tool for competitive-exam aptitude prep (placements, government exams, etc.) — a separate brand from [LabBench](https://labbench-hub.vercel.app/) (LabBench is ECE/engineering demos; PrepBench is general quantitative aptitude, a much broader audience).

9 topics, each with two modes:
- **Reference** — dense formula + worked-example cards (Percentage, Profit & Loss, Time & Work, Speed-Distance-Time, Number System, Probability, Squares & Cubes, Geometry, Data Interpretation).
- **Practice** — procedurally-generated questions (fresh numbers every time, not a static question bank) with instant numeric-answer checking, a live streak counter, and running accuracy. Data Interpretation gets its own mini exercise: a randomly-generated bar chart where you compute what percentage one category represents of the rendered total — a genuine chart-reading drill, not just a formula plug-in.

## Monetization

A **PrepBench Cheat Sheets** PDF (all 9 topics, dense reference tables, no prose) is sold via a Razorpay Payment Page. `api/fulfill.js` verifies the Razorpay webhook signature (HMAC-SHA256, constant-time compare) and emails the PDF automatically — same pattern as LabBench's PDF fulfillment, adapted standalone for this brand (own webhook secret, own product match string `"prepbench cheat sheet"`).

**Not yet done (you do this in the Razorpay dashboard):** create the Payment Page for the Cheat Sheets PDF, then set `GMAIL_USER` / `GMAIL_APP_PASSWORD` / `RAZORPAY_WEBHOOK_SECRET` in Vercel and register the webhook pointing at `/api/fulfill`, same flow as LabBench's products. Until then the "Get the PDF" button intentionally shows "(coming soon)" rather than a guessed URL.

## Tech

React + TypeScript + Vite, no backend needed for the free tool (fully client-side, no accounts). The webhook is a single Vercel serverless function, same nodemailer/raw-body pattern as LabBench.

## Run locally
```sh
npm install
npm run dev
```

_Built by Dhananjay Kumar Seth._
