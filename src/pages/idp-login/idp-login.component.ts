import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idp-login',
  imports: [],
  templateUrl: './idp-login.component.html',
  styleUrl: './idp-login.component.css'
})
export class IdpLoginComponent implements OnInit {
  ngOnInit(): void {
    window.location.href = 'https://idp.inetcsc.com/auth/realms/inetcsc/protocol/openid-connect/auth?response_type=code&client_id=inetcsc&state=80739';
  }
}
