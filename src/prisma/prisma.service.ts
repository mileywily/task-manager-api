import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  // En Prisma 5, no pasamos nada al super() para que use el .env por defecto
  constructor() {
    super();
  }

  async onModuleInit() {
    try {
      await this.$connect();
      console.log('✅ Conexión a PostgreSQL exitosa');
    } catch (error) {
      console.error('❌ La base de datos no está lista, revisa Docker.');
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}