# Deployment Instructions

## Prerequisites
- Docker and Docker Compose installed
- (Optional) SSL certificates for HTTPS (see `frontend/nginx/ssl/`)

## 1. Configure Environment Variables
- Copy `.env.example` to `.env` in the project root and `backend/.env`.
- Edit secrets (e.g., JWT_SECRET) and other values as needed.

## 2. Build and Start Services

```
docker-compose up --build
```

- This will start MongoDB, backend, frontend, and (optionally) Nginx.
- Access the frontend at http://localhost or http://localhost:8080 (if using Nginx).

## 3. SSL (Production Only)
- Place your SSL certs in `frontend/nginx/ssl/`.
- Update `nginx.conf` if needed for your domain.

## 4. Stopping Services

```
docker-compose down
```

## 5. Troubleshooting
- Ensure all referenced files exist (see above).
- Check logs with `docker-compose logs`.
- For database issues, check `mongo-init.js`.

---

For further customization, see the Dockerfiles and `docker-compose.yml`. 