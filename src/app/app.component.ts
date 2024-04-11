import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserDetailsComponent } from "./Components/user-details/user-details.component";
import { HeaderComponent } from "./Components/header/header.component";
import { UserListComponent } from "./Components/user-list/user-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, UserDetailsComponent, HeaderComponent, UserListComponent]
})
export class AppComponent {
  title = 'Dashboard';
}
