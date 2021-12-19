# 😪 NAP - Next-Auth Prisma

A template you can set up in your sleep.

## For local development

First run 
```terminal
npm install
```

Make a copy of `.env.template` and rename it to `.env`. If you use the services below like I have then you'll need to set their respective configuration values in your `.env`.

Next we need to set u prisma and create your tables in the databse.

```terminal
npx prisma migrate dev --name init
```
This will create the tables, sync them with your models found in `/prisma/schema.prisma` and create your migration sql script in `/prisma/migrations`.

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
| NEXTAUTH_URL | `http://localhost:3000` |    👍     |
| SECRET       |        `secret`         |    👍     |

### ORM - Prisma [🔗](https://www.prisma.io)

Prisma is a pretty nifty tool and next-auth has a nice [adapter](https://next-auth.js.org/adapters/prisma) to make using prisma even easier.

I'm using Supabase as a database provider. More on that below. Feel free to use your favorite provider.

Environment Variables

| Name         | Required |
| ------------ | :------: |
| DATABASE_URL |    👍     |

## Optional Integrations

### Database - Supabase [🔗](https://supabase.io)

Supabase has there own authorizations and instant backend services. The best thing about using it is getting a database up and running is super easy and that's the only feature I need for now. Migration to Supabase for it's other features is always an option if the use case calls for it. For now I like next-auth.

Create an account by signing in with Github. Create a project and use the connection string in the `DATABASE_URL` env variable for prisma.

### Mail server - Mailtrap [🔗](https://mailtrap.io)

Used for email login with next-auth (aka: magic links). Really great for testing anything related to sending emails. Feel free to use your own mailserver.

Environment Variables

| Name       | Required |
| ---------- | :------: |
| EMAIL_HOST |    👍     |
| EMAIL_PORT |    👍     |
| EMAIL_USER |    👍     |
| EMAIL_PASS |    👍     |
| EMAIL_FROM |          |
