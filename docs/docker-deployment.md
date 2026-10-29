# Xenobe Rage: Docker + PHP + MySQL

This deployment keeps the existing classic PHP game interface and routes. It does not replace the legacy game with the static GitHub Pages preview.

## Requirements

- Docker Engine or Docker Desktop with the Compose plugin
- A copy of this repository
- The existing Xenobe Rage setup flow and compatible ADOdb files from the repository

## Start

1. Copy .env.example to .env.
2. Set unique, strong values for MYSQL_PASSWORD, DB_PASSWORD (they must match), MYSQL_ROOT_PASSWORD, and ADODB_CRYPT_KEY. Do not commit .env.
3. Build and start containers:

   ```sh
   docker compose up -d --build
   docker compose ps
   docker compose logs --tail=100 app db
   ```

4. Open http://localhost:8080 (or the port selected by HTTP_PORT).
5. If the game database has not been initialized, follow the repository's existing setup flow at create_universe.php. Read setup prompts carefully and back up the database before initialization against an existing database.
6. After initialization, restrict or disable public access to setup/install pages using the project's documented installation guidance before opening the server to players.

## Useful commands

- Stop services: `docker compose down`
- Follow logs: `docker compose logs -f app db`
- PHP version: `docker compose exec app php -v`
- Database backup: `docker compose exec -T db sh -c 'exec mysqldump -uroot -p"$MYSQL_ROOT_PASSWORD" "$MYSQL_DATABASE"' > xenoberage-backup.sql`

## Notes and limitations

- The game is a legacy PHP/ADOdb application. The container enables common extensions (mysqli, PDO MySQL, GD, mbstring, ZIP, and XML), but an image build does not prove all old PHP code is compatible with PHP 8.2.
- Database schema creation is intentionally not automated: the existing setup wizard and schema behavior must be validated before destructive or game-specific initialization is automated.
- The xenoberage_db named volume persists data between container restarts. `docker compose down -v` permanently deletes that volume.
- MySQL is not exposed on a host port by default. Do not publish it publicly.
- Change example secrets before deployment. Use HTTPS through a reverse proxy for public production hosting.
- The app health check verifies that Apache accepts a local TCP connection; it does not validate game login or database schema health.
- Scheduled gameplay processes are not yet wired to a dedicated scheduler service. Review the legacy scheduler and configure it as one controlled process to avoid duplicate turn processing.

## Validation status

The repository's files were inspected before adding this deployment scaffold. Docker build/start and in-game smoke tests must be run in an environment with Docker available and after the legacy schema/setup process is confirmed.
