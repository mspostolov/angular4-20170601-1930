import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersCurrencyComponent } from './users-currency.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserService } from './user.service';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [UsersCurrencyComponent, UserListComponent, UserCardComponent, CurrencyConverterComponent],
  providers: [UserService]
})
export class UsersCurrencyModule {
}
