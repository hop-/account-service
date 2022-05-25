import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from './schemas/account.schema';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<AccountDocument>,
  ) {}

  public async findAll(): Promise<Account[]> {
    return this.accountModel.find().exec();
  }

  public async findOne(id: string): Promise<Account> {
    return this.accountModel.findById(id).exec();
  }
}
