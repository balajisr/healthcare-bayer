import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './services/auth/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  usernameInput: string = '';
  currentUser: string | null = null;

  constructor(private authService: AuthServiceService, private router: Router) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      if (!user) {
        this.router.navigate(['/']); // Redirect to home/login if logged out
      }
    });
    this.usernameInput = this.authService.getCurrentUser() || '';
  }

  login(): void {
    if (this.usernameInput.trim()) {
      this.authService.login(this.usernameInput.trim());
      this.router.navigate(['/notifications']); // Navigate to a default page after login
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}