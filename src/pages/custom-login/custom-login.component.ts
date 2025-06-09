import { Component, signal } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { AuthService } from '../../service/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { roles } from '../../constants/enumdata';

@Component({
  selector: 'app-custom-login',
  imports: [SharedModule],
  templateUrl: './custom-login.component.html',
  styleUrl: './custom-login.component.css'
})
export class CustomLoginComponent {
username = signal('');
  password = signal('');
  isLoading = signal(false);

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  onLogin() {
    this.isLoading.set(true);

    // Simulate API call delay
    setTimeout(() => {
      const success = this.authService.login(this.username(), this.password());

      if (success) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Login successful'
        });
        const userRole = this.authService.getCurrentUserRole();
        if( userRole === roles.ADMIN) {
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.router.navigate(['/dashboard']);
        } 
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Invalid credentials'
        });
      }

      this.isLoading.set(false);
    }, 1000);
  }
}
