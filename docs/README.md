# Xenobe Rage — GitHub Pages demo

This directory is a static frontend preview that preserves the compact, classic browser MMO command-center style.

## What works in the demo
- Responsive classic sci-fi dashboard
- Command, Galaxy, Ship Systems, Trade, Missions, and Empire sections
- Local sector selection
- Local-only simulated trade balance and mission acceptance
- Mobile layout

## What does not work
GitHub Pages serves static files. This demo does not connect to the PHP/MySQL backend and does not implement accounts, persistent saves, real market transactions, combat, warp operations, rankings, or multiplayer turns. Do not enter real passwords or sensitive information.

## Deployment
The workflow at `.github/workflows/pages.yml` publishes the contents of `docs/` when changes reach `master`.

1. Merge the Pages implementation into `master`.
2. In repository **Settings → Pages**, set the source to **GitHub Actions** if it is not already selected.
3. Open **Actions → Deploy Xenobe Rage Pages** and verify the deployment succeeded.
4. The project site should be available at `https://arkansasio.github.io/1xenoberage/`.

If Pages is disabled or repository settings prevent workflow deployment, an owner/admin must enable GitHub Pages and allow Actions deployments.
