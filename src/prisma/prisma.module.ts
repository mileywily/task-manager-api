import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Permite usar PrismaService en cualquier lugar sin volver a importarlo
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Esto es lo que permite que TasksService lo use
})
export class PrismaModule {}