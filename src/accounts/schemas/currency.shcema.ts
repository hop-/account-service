import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CurrencyDocument = Currency & Document;

@Schema()
export class Currency {
  @Prop({ required: true })
  name: string;

  @Prop()
  factor: number;
}

export const CurrencySchema = SchemaFactory.createForClass(Currency);
