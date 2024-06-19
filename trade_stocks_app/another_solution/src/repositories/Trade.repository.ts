import {  Repository } from 'typeorm';
import { Inject, Service } from 'typedi';
import { Trade } from '../entities/Trade.entity';

@Service()
export class TradeRepository extends Repository<Trade> {
  @Inject()
  // ofc we want to use cache store here (redis, memorydb etc)
  private readonly cache: Map<string, Trade[]>;

  async getAllCached(type?: string, user_id?: string): Promise<Trade[]> {
    const cacheKey = `all_trades_${type}_${user_id}`;

    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }


    const trades = await this.createQueryBuilder('trade')
      .where('type =: type', { type: type })
      .andWhere('user_id = :user_id', { user_id })
      .getMany();

    this.cache.set(cacheKey, trades);

    return trades;

  }
}