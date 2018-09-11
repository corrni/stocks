import { Component, Input } from '@angular/core';

@Component({
  /* tslint:disable component-selector */
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  @Input() stock: any;

  isNegative() {
    return (this.stock && this.stock.change < 0);
  }

  isPositive() {
    return (this.stock && this.stock.change > 0);
  }
}
