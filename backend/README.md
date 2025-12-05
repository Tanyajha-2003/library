# Backend - NestJS + Prisma (scaffold)

Files included:
- Prisma schema and seed file
- Basic NestJS module/controller/service scaffolding for Users, Authors, Books, Borrows, and Auth (JWT)

Notes:
- Run `npm install` then `npx prisma generate` and `npx prisma migrate dev --name init` to set up DB.
- Use .env to set DATABASE_URL and JWT_SECRET.