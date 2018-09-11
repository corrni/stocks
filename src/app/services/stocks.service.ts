import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const stocks: Array<string> = ["AAPL", "GOOG", "FB", "AMZN", "TWTR"];
const apiUrl = "https://angular2-in-action-api.herokuapp.com";

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  chnageInPercent: number;
}

@Injectable()
export class StocksService {
  constructor(private http: HttpClient) { }

  get(): Array<string> {
    return stocks.slice();
  }

  add(stock) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols) {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(
        apiUrl + "/stocks/snapshot?symbols=" + symbols.join()
      );
    }
  }
}
