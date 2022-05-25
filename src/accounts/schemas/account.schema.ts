import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Currency } from './currency.shcema';
import { Owner } from './owner.schema';

export type AccountDocument = Account & Document;

@Schema()
export class Account {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
  owner: Owner;

  @Prop({ required: true, default: 0 })
  balance: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Currency' })
  currency: Currency;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
