import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SharedModule } from '../../modules/shared.module';
import { NgPrimeModule } from '../../modules/ngprime.module';
@Component({
  selector: 'app-contact',
  imports: [SharedModule,NgPrimeModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [MessageService]
})
export class ContactComponent {
   visible: boolean = false;
  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private messageService: MessageService) {}

  showDialog() {
    this.visible = true;
  }

  submitForm() {
    // Form validation would go here
    this.messageService.add({
      severity: 'success',
      summary: 'Message Sent',
      detail: 'We will get back to you soon!',
      
      
    });
    this.visible = false;
    this.formData = { name: '', email: '', message: '' };
  }

}
