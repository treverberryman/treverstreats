Next:

Can you convert this website I already made with Astro into a cooking website? The main three pages would be the landing page and for the navigation bar and routes it will be:

Recipes, Gear, About

I don't want you to change any functionality for now, just make it look similar to this blog:

## TODO

- [ ] Set up deployment at `treats.treverberryman.com` (option 2: subdomain of personal site) for Trever's Treats.

## Branching Best Practices

This project follows a modern, professional branching strategy:

- **main**: Production branch. Only stable, deployable code. Protected—no direct commits, only merges from staging or release branches.
- **staging**: Pre-production branch. Used for QA, UAT, and final review before merging to main. Receives merges from dev.
- **dev**: Main development branch. All new features, bugfixes, and experiments branch off from here. Regularly merged into staging.
- **feature/xyz**: Short-lived branches for individual features or fixes. Merged into dev when complete.

**Usage:**
- Only merge to `main` from `staging`.
- Only merge to `staging` from `dev`.
- Only merge to `dev` from feature branches.

**Cleanup:**
- Remove or archive legacy branches (e.g., `master`, old feature branches) to keep the repo clean.
- Protect `main` and `staging` branches in your GitHub repo settings to prevent accidental direct commits.

This structure helps keep your codebase stable, organized, and easy for contributors to understand.
