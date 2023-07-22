import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExpenseRepository {
  constructor(private prismaService: PrismaService) {}

  async getExpenses() {
    const result = await this.prismaService.user.findMany();
    return result;
  }
}
