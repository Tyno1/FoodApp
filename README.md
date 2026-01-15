# BiteScout

Multi-surface restaurant platform built as a Turborepo monorepo with a Next.js admin web app, a React Native mobile client, an Express API, and a dedicated NestJS media service.

## Why It Stands Out

- **Clear service boundaries**: API handles business logic, media service handles asset processing, frontend orchestrates the flow.
- **Shared contracts**: OpenAPI-driven TypeScript types live in `packages/shared` and are consumed by web and backend.
- **Performance-first builds**: Turbo caching, parallel tasks, and incremental builds keep iteration fast.
- **Production-ready deployment**: Dockerized services and a Render deployment guide are included.
- **CI gates**: GitHub Actions installs deps, runs tests, and validates a Docker build on every PR.

## Architecture At A Glance

```
apps/web (Next.js 15)   apps/mobile (Expo)
          |                    |
          |  orchestrates      |
          v                    v
apps/backend (Express + TS)  apps/media-service (NestJS + TS)
          |                    |
          | MongoDB            | MongoDB + Cloudinary/S3
```

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Mobile**: React Native + Expo
- **API**: Express.js + TypeScript
- **Media**: NestJS + TypeScript, Cloudinary/S3 integration
- **Contracts**: OpenAPI spec and generated shared types
- **Infra**: Docker, Render deployment

## Project Structure

```
BiteScout/
├── apps/
│   ├── web/              # Next.js web application
│   ├── mobile/           # React Native/Expo mobile app
│   ├── backend/          # Node.js/Express API server
│   └── media-service/    # NestJS media management microservice
├── packages/
│   └── shared/           # Shared types and utilities
├── package.json          # Root workspace configuration
└── turbo.json            # Turborepo configuration
```

## Services Overview

### Web Application (`apps/web`)
- **Framework**: Next.js 15 with App Router
- **Port**: 3001 (development)
- **Focus**: Restaurant management dashboard, authentication, catalog management

### Backend API (`apps/backend`)
- **Framework**: Express.js with TypeScript
- **Port**: 5002 (development)
- **Focus**: REST API, auth, restaurant and user management

### Media Service (`apps/media-service`)
- **Framework**: NestJS with TypeScript
- **Port**: 3002 (development)
- **Focus**: Upload, processing, optimization, multi-provider support (Cloudinary/AWS S3)
- **API Docs**: `http://localhost:3002/api`

### Mobile Application (`apps/mobile`)
- **Framework**: React Native with Expo
- **Focus**: Cross-platform restaurant management

## Getting Started

### Prerequisites

- Node.js 18.18+ (CI uses Node 20)
- npm 10+ (repo uses `packageManager` in `package.json`)

### Installation

```bash
npm install
```

### Development

```bash
# Start all applications
npm run dev

# Start a specific app
npm run dev -- --filter=web
npm run dev -- --filter=backend
npm run dev -- --filter=mobile
npm run dev -- --filter=media-service
```

### Building

```bash
# Build all applications
npm run build

# Build a specific app
npm run build -- --filter=web
npm run build -- --filter=backend
npm run build -- --filter=media-service
```

### Testing

```bash
# Run all tests
npm test
```

### Linting

```bash
# Lint all packages
npm run lint
```

## Docker And Deployment

- **Local dev with Docker**: `npm run docker:dev`
- **Production build**: `npm run docker:prod`
- **Deployment guide**: `DEPLOYMENT.md`

## Documentation

- **Architecture index**: `docs/README.md`
- **Hybrid media architecture**: `docs/HYBRID_MEDIA_ARCHITECTURE.md`
- **Media service guide**: `docs/MEDIA_SERVICE.md`
- **OpenAPI spec**: `packages/shared/openapi/spec.yaml`

## Development Workflow

1. **Start services**: `npm run dev`
2. **Edit any package**: Turbo handles task dependency ordering
3. **Generate types**: `npx turbo run generate-types` when OpenAPI changes
4. **Build**: `npm run build`
5. **Test**: `npm test`

## Troubleshooting

### Cache Issues

```bash
npx turbo clean
```
