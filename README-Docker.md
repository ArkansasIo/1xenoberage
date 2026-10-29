# Docker deployment quick start

For the full guide, see [docs/docker-deployment.md](docs/docker-deployment.md).

```sh
cp .env.example .env
# Edit .env and set unique strong passwords/secrets.
docker compose up -d --build
docker compose ps
```

Open http://localhost:8080. The first run may require the existing game setup wizard to initialize the database. Back up existing game data before performing setup or reset operations.

The static GitHub Pages preview under docs/ is separate from the PHP/MySQL multiplayer game; GitHub Pages cannot execute PHP.
