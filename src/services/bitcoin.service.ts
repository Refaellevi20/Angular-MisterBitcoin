import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  public getRate() {
    const url = 'https://blockchain.info/tobtc?currency=USD&value=1';
    return this.getResult('RATE', url);
  }

  public getMarketPrice() {
    const url =
      'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true';
    return this.getResult('MARKET_PRICE', url);
  }

  public getAvgBlockSize() {
    const url =
      'https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true';
    return this.getResult('AVG_BLOCK_SIZE', url);
  }

  public getTradeVolume() {
    const url =
      'https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true';
    return this.getResult('TRADE_VOLUME', url);
  }

  public getConfirmedTransactions() {}

  private getResult(type: string, url: string) {
    const result = this.storageService.loadFromStorage(type);
    if (result) return Promise.resolve(result);
    return lastValueFrom(
      this.http
        .get<{ answer: string }>(url)
        .pipe(tap((res) => this.storageService.saveToStorage(type, res)))
    );
  }
}
