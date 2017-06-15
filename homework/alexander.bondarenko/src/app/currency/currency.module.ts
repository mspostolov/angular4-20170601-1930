import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeWidgetComponent } from './exchange-widget/exchange-widget.component';
import { CurrencyConverterService } from './currency-converter.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExchangeWidgetComponent],
  providers: [CurrencyConverterService]
})
export class CurrencyModule { }
