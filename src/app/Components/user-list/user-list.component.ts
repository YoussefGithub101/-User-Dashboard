 
import { Component, OnInit, ViewChild } from '@angular/core';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import {IUser,ApiResponse} from "../../interfaces/users-interface"
import {UserDataService} from '../../services/user-data.service'
import { ButtonModule } from 'primeng/button';
import {RouterLink} from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import {NgIf} from '@angular/common';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [ InputTextModule,TableModule,ButtonModule,RouterLink,SkeletonModule,NgIf],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  userdata!:IUser[];
  rows:number=0;
  total:number=0;
  errorMessage: any;
  isLoaded:boolean = true;
constructor(private UserDataService:UserDataService){}

  ngOnInit(): void {
    
  }

 


getUsers($event:TableLazyLoadEvent) {
   
  this.UserDataService.getuser(($event.first!/$event.rows!)+ 1 || 0).subscribe({
   
    next:(User:ApiResponse)=>{
       this.userdata=User.data;
       this.rows=User.data.length;
      this.total=User.total
      setTimeout(() => {
        this.isLoaded = false; // Setting isLoaded to false after 2 seconds
        
      }, 500);
     },error:error=>{
      this.errorMessage=error;
      this.isLoaded = false; // Setting isLoaded to false 
    }
  })

}
 
}
