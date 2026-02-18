# demo-palantir-compute-modules-js

JavaScript Palantir Compute Module template/demo with sample handlers for arithmetic, greeting, and environment inspection.

[![Node](https://img.shields.io/badge/Node-20.10.0-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Compute Module](https://img.shields.io/badge/%40palantir%2Fcompute--module-%5E0.2.6-0052CC)](https://www.npmjs.com/package/@palantir/compute-module)
[![Docker](https://img.shields.io/badge/Dockerfile-available-2496ED?logo=docker&logoColor=white)](https://docs.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## What It Does

- Boots a compute module runtime with `@palantir/compute-module`.
- Registers simple sample handlers (`sum`, `hello`, `getEnv`).
- Demonstrates grouping/filtering environment variables for runtime diagnostics.
- Serves as a lightweight template for new JS compute modules.

## How It Works

- `index.js` initializes a `ComputeModule` instance.
- Handlers are registered directly on the module.
- `getEnv` filters noisy prefixes and groups keys by suffix patterns.

## API Surface

| Function | Input | Output | Notes |
|---|---|---|---|
| `sum` | `{ a: number, b: number }` | `string` | Returns sum as string. |
| `hello` | `{ name: string }` | `string` | Returns greeting message. |
| `getEnv` | optional filter/group config object | grouped env object | Intended for debug visibility of runtime env vars. |

## Quick Start

```bash
./startup.sh
source startup.sh
npm install
node index.js
```

## Testing And CI

| Layer | Present | Tooling | Runs in CI |
|---|---|---|---|
| unit | no | none | no |
| integration | no | none | no |
| e2e api | no | none | no |
| e2e web | no | none | no |

No automated tests or CI workflow are currently configured in this repository.

## Deployment And External Services

- Containerized runtime is provided via `Dockerfile`.
- No external service dependency is required by default handlers.

## License

MIT (`LICENSE`).
