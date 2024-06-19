import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

export enum TradeType {
  Buy = 'buy',
  Sell = 'sell'
}

@Entity()
export class Trade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  user_id: string;

  @Column()
  symbol: string;

  @Column()
  shares: number;

  @Column()
  price: number;

  @Column()
  timestamp: number;
}