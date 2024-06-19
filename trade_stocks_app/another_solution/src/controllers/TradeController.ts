import { Request, Response } from "express";
import {Inject, Service} from 'typedi';
import {Controller, Get, JsonController, Param, Post, Req, Res} from "routing-controllers";
import {TradeService} from "../services/TradeService";

@Controller('/trades')
@Service()
export class TradesController {
  @Inject()
  private readonly tradeService: TradeService;

  @Post('/')
  public async createTrade(@Req() req: Request,
                           @Res() res: Response): Promise<void> {
    try {
      const trade = await this.tradeService.createTrade(req.body);
      res.status(201).json(trade);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  @Get('/')
  public async getAllTrades(@Req() req: Request,
                            @Res() res: Response): Promise<void> {
    try {
      const { type, user_id } = req.query;
      const trades = await this.tradeService.getAllTrades(type as string, user_id as string);
      res.status(200).json(trades);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  @Get('/:id')
  public async getTradeById(@Param('id') id: number,
                            @Res() res: Response): Promise<void> {
    try {
      const trade = await this.tradeService.getTradeById(id);
      res.status(200).json(trade);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}
