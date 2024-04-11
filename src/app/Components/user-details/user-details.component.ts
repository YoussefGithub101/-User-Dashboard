import { Component, OnInit, ViewChild } from '@angular/core';
import {TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import {UserDataService} from '../../services/user-data.service'
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [InputTextModule,TableModule,ButtonModule,CommonModule,SkeletonModule,CardModule,RouterLink],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit  {
  userdata:any=[];
  SearchID:any=0;
  errorMessage: any;
  dataNotFound:boolean=true;
 
constructor(private UserDataService:UserDataService,private activatedRoute: ActivatedRoute, private router:Router ){}


  ngOnInit(): void {
    this.searshParams()
  }

 

searshParams(){
  this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
    this.SearchID=params.get("searchUser")
 
    this.getuserdata()
   })
}
getuserdata(){
  
  this.UserDataService.getuserID(this.SearchID).subscribe({
    next:(data:any)=>{
      this.userdata=data.data
   
      this.dataNotFound=false;
   
    },error:error=>{this.errorMessage=error;
      this.dataNotFound=true;
    }
  })
}
}
 

 
 