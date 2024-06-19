import {Inject, Service} from "typedi";
import {Trade, TradeType} from "../entities/Trade.entity";
import {TradeRepository} from "../repositories/Trade.repository";

@Service()
export class TradeService {
  @Inject()
  private readonly tradeRepository: TradeRepository;

  async createTrade(tradeData: Partial<Trade>): Promise<Trade> {
    const { type, shares } = tradeData;

    if (shares < 1 || shares > 100 || !Object.values(TradeType).includes(type as TradeType)) {
      throw new Error('Invalid input');
    }

    return this.tradeRepository.create(tradeData);
  }

  async getAllTrades(type?: string, user_id?: string): Promise<Trade[]> {
    return this.tradeRepository.getAllCached(type, user_id);
  }

  async getTradeById(id: number): Promise<Trade> {
    return this.tradeRepository.findOneOrFail({ where: { id } });
  }
}