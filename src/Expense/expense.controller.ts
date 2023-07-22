import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import Expense from 'src/Entities/Expense';

@Controller('/expense')
export class ExpenseController {
  constructor(private expenseService: ExpenseService) {}
  @Get()
  async ExpenseGet() {
    return await this.expenseService.getAllExpenses();
  }

  @Post()
  async CreateExpense(@Body() expense: Expense) {
    await this.expenseService.CreateExpense(expense);
  }
}
