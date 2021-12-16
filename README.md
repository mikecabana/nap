# 😪 NAP - Next-Auth Prisma

A template you can set up in your sleep.

## For local development

Make a copy of `.env.template` and rename it to `.env`. If you use the services below like I have then you'll need to set their respective configuration values in your `.env`.

### To run

The project includes a launch profile for VS Code. Just hit `F5` or run

```terminal
npm run dev
```

## Integrations

### Auth - Next-Auth [🔗](https://next-auth.js.org)

Environment Variables

| Name         |         Default         | Required |
| ------------ | :---------------------: | :------: |
| NEXTAUTH_URL | `http://localhost:3000` |    👍    |
| SECRET       |        `secret`         |    👍    |

### Database - Supabase [🔗](https://supabase.io)

I know Supabase has there own auth thing going but getting up and running quickly using only their databases is so nice. Migration to Supabase auth is always an option if the use case calls for it. For now I like next-auth.

Create an account. Signing in with Github is the easiest. Create a project and use the connection string in the `DATABASE_URL` env variable for prisma outlined below.

### ORM - Prisma [🔗](https://www.prisma.io)

Again I know Supabase has their own client and using it is always an option but Prisma tooling is pretty nifty.

Next-auth also has a nice [adapter](https://next-auth.js.org/adapters/prisma) to make using prisma even easier.

Environment Variables

| Name         | Required |
| ------------ | :------: |
| DATABASE_URL |    👍    |

### Mail server - Mailtrap [🔗](https://mailtrap.io)

Used for email login with next-auth (aka: magic links).

Environment Variables

| Name       | Required |
| ---------- | :------: |
| EMAIL_HOST |    👍    |
| EMAIL_PORT |    👍    |
| EMAIL_USER |    👍    |
| EMAIL_PASS |    👍    |
| EMAIL_FROM |          |
