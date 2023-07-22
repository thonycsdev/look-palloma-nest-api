import { Injectable } from '@nestjs/common';
import { ExpenseRepository } from './expense.repository';

@Injectable()
export class ExpenseService {
  constructor(private expenseRepository: ExpenseRepository) {}

  async getAllExpenses() {
    return await this.expenseRepository.getExpenses();
  }
}
