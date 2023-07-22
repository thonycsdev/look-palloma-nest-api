import { Injectable } from '@nestjs/common';
import { ExpenseRepository } from './expense.repository';
import Expense from 'src/Entities/Expense';

@Injectable()
export class ExpenseService {
  constructor(private expenseRepository: ExpenseRepository) {}

  async getAllExpenses() {
    return await this.expenseRepository.getExpenses();
  }

  async CreateExpense(expense: Expense) {
    await this.expenseRepository.CreateExpense(expense);
  }
}
