import { AuthService } from './shared/auth.service';





import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'immediaid-final-release';
  constructor(public authService: AuthService) {}

  
}