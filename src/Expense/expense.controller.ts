import { Controller, Get } from '@nestjs/common';
import { ExpenseService } from './expense.service';

@Controller('/expense')
export class ExpenseController {
  constructor(private expenseService: ExpenseService) {}
  @Get()
  async ExpenseGet() {
    return await this.expenseService.getAllExpenses();
  }
}
