import { Component } from '@angular/core';
import { SharedModule } from '../../../modules/shared.module';
import { NgPrimeModule } from '../../../modules/ngprime.module';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-p-content',
  imports: [SharedModule,NgPrimeModule,ChartModule],
  templateUrl: './p-content.component.html',
  styleUrl: './p-content.component.css'
})
export class PContentComponent {
 stats = [
    { title: 'Total Users', value: '2,420', change: '+12%', icon: 'pi pi-users', color: 'bg-blue-100 text-blue-600' },
    { title: 'Revenue', value: '$9,340', change: '+8.2%', icon: 'pi pi-wallet', color: 'bg-green-100 text-green-600' },
    { title: 'Tasks', value: '142', change: '-3%', icon: 'pi pi-check-square', color: 'bg-purple-100 text-purple-600' },
    { title: 'Pending', value: '24', change: '+4%', icon: 'pi pi-clock', color: 'bg-yellow-100 text-yellow-600' }
  ];

  recentActivities = [
    { user: 'Sarah Johnson', action: 'created new project', time: '2 mins ago' },
    { user: 'Mike Williams', action: 'completed task', time: '1 hour ago' },
    { user: 'Emma Davis', action: 'uploaded files', time: '3 hours ago' }
  ];
}
