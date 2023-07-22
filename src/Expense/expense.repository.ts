import { Injectable } from '@nestjs/common';
import Expense from 'src/Entities/Expense';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExpenseRepository {
  constructor(private prismaService: PrismaService) {}

  async getExpenses() {
    const result = await this.prismaService.despesa.findMany();
    return result;
  }

  async CreateExpense(expense: Expense) {
    await this.prismaService.despesa.create({
      data: {
        userId: expense.userId,
        name: expense.name,
        description: expense.description,
        purchaseDate: expense.purchaseDate,
        price: expense.price,
      },
    });
  }
}
