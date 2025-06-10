import { Component } from '@angular/core';
import { LocalStoreService } from '../../../service/local-store.service';
import { SharedModule } from '../../../modules/shared.module';

@Component({
  selector: 'app-admin-dashboard',
  imports: [SharedModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {
  idStats = {
    total: 0,
    active: 0,
    pending: 0,
    rejected: 0,
  };
  constructor(private localstorageService: LocalStoreService) {}
  ngOnInit(): void {
    const data = this.localstorageService.getArray('idCreationDataArray') || [];
    console.log('data', data);
    this.idStats.total = data.length;
    this.idStats.active = data.filter(
      (item: any) => item.status === 'Approved',
    ).length;
    this.idStats.pending = data.filter(
      (item: any) => item.status === 'Pending',
    ).length;
    this.idStats.rejected = data.filter(
      (item: any) => item.status === 'Rejected',
    ).length;
  }
}
