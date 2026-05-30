# WTWR (What to Wear?): Back End

## Description

The back-end project is focused on creating a server for the WTWR application — a full-stack app that recommends clothing based on the current weather. Users can sign up, log in, create clothing items tagged by weather type, and like or remove items.

This sprint deploys the application to a Google Cloud VM with full production hardening: centralized error handling, request validation, structured logging, environment-based configuration, an NGINX reverse proxy, and HTTPS via Let's Encrypt.

## Deployed Project

- Frontend: https://johns-wtwr.ignorelist.com
- API: https://api.johns-wtwr.ignorelist.com
- Frontend repository: https://github.com/john-beast-engineer/se_project_react

## Technologies Used

**Application stack**

- Node.js (v22 LTS)
- Express.js
- MongoDB / Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- CORS

**Middleware**

- celebrate + Joi (request validation)
- validator (URL & email validation)
- winston + express-winston (request and error logging)
- dotenv (environment variable management)

**Deployment**

- Google Cloud Compute Engine (Ubuntu 24.04 LTS)
- PM2 (process management with reboot survival)
- NGINX (reverse proxy + SPA static serving)
- Let's Encrypt / Certbot (SSL/TLS certificates)
- FreeDNS (subdomain registration)

## Architecture

Three subdomains share one VM:

- `johns-wtwr.ignorelist.com` and `www.johns-wtwr.ignorelist.com` serve the React frontend (static files)
- `api.johns-wtwr.ignorelist.com` proxies to the Node application

All traffic is automatically upgraded to HTTPS. The Node process is managed by PM2 with automatic crash recovery and startup-on-reboot via systemd.

## Running Locally

`npm install` — install dependencies

`npm run start` — launch the server on `localhost:3001`

`npm run dev` — launch the server with hot reload via nodemon

`npm run lint` — run ESLint

## Project Pitch Videos

- - [Sprint 15 — Full-Stack Deployment](https://www.loom.com/share/7427d26d32de47f89f4343fc1431c887) — A walkthrough of the deployed application, the deployment architecture, and a few challenges I faced along the way.

- [Sprint 13 — Authentication Walkthrough](https://www.loom.com/share/c6dab64aff9b4d499d5635b5107f78cc) — An earlier video covering the JWT authentication flow.
