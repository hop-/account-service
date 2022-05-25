import { Controller, Get, Param } from '@nestjs/common';
import { Account } from './schemas/account.schema';

@Controller('account')
export class AccountsController {
  @Get()
  getAll(): Account[] {
    // TODO
    return;
  }

  @Get(':id')
  getOne(@Param('id') id: string): Account {
    // TODO
    return;
  }
}
