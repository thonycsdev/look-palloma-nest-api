import { Module } from '@nestjs/common';
import { ExpenseController } from './expense.controller';
import { ExpenseService } from './expense.service';
import { ExpenseRepository } from './expense.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ExpenseController],
  imports: [PrismaModule],
  providers: [ExpenseService, ExpenseRepository],
})
export class ExpenseModule {}
