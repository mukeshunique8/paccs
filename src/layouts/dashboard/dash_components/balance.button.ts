import { Component } from '@angular/core';
import { SharedModule } from '../../../modules/shared.module';

@Component({
  selector: 'app-balance-button',
  standalone: true,
  imports: [SharedModule],
  styleUrls: ['./balance.button.css'],
  template: `
    <div>
      <button (click)="checkBalance()" class="balanceCheckbtn">
        <ng-container [ngSwitch]="isShowBalance">
          <span *ngSwitchCase="'default'"
            >{{ 'WALLET.RUPEE_SYMBOL' | translate }}
            {{ 'WALLET.BALANCE' | translate }}</span
          >
          <div *ngSwitchCase="'loading'" class="mini-loader"></div>
          <span *ngSwitchCase="'visible'"
            >₹ {{ balance | number: '1.2-2' }}</span
          >
        </ng-container>
      </button>
    </div>
  `,
})
export class BalanceButton {
  isShowBalance: 'default' | 'loading' | 'visible' = 'default';
  balance = 1250.5;

  checkBalance() {
    this.isShowBalance = 'loading';

    // Simulate loading
    setTimeout(() => {
      this.isShowBalance = 'visible';

      // Hide again after 5 seconds
      setTimeout(() => {
        this.isShowBalance = 'default';
      }, 5000);
    }, 1000); // 1 second loading delay
  }
}
