import { Component, OnInit } from '@angular/core';
import { StockInterface, StocksService } from '../../services/stocks.service';

@Component({
  /* tslint:disable component-selector */
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stocks: Array<StockInterface>;
  symbols: Array<string>;

  constructor(private stocksService: StocksService) {
    this.symbols = this.stocksService.get();
  }

  ngOnInit() {
    this.stocksService.load(this.symbols)
      .subscribe(stocks => this.stocks = stocks);
  }
}
