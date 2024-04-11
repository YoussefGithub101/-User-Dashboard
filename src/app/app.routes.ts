import { Routes } from '@angular/router';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { UserListComponent } from './Components/user-list/user-list.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'User list' },
    {path: 'User list', component: UserListComponent},
    {path:'profile/:searchUser',component:UserDetailsComponent}
];
