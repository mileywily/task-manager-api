# Task Manager API (NestJS + Prisma)

### Pasos para ejecutar:
1. **Levantar base de datos**: `docker-compose up -d`
2. **Instalar dependencias**: `npm install --legacy-peer-deps`
3. **Sincronizar Prisma**: `npx prisma generate` y `npx prisma migrate dev --name init`
4. **Iniciar App**: `npm run start:dev`

### Tecnologías:
- NestJS 11, Prisma 5.22 (Estable), PostgreSQL, Docker.