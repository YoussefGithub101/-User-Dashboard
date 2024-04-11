import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import {ApiResponse} from "../interfaces/users-interface"
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userdata:string;
  private userID:string;
  constructor(private http: HttpClient) { 
    this.userdata = environment.userData;
    this.userID = environment.userID;
  }


  getuser(page: number): Observable<ApiResponse> {

    return this.http.get<ApiResponse>(`${this.userdata}${page}`).pipe(catchError((err) => {
      return throwError(() => err.message || "Server error")
    }));
  }

  getuserID(ID: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.userID}${ID}`).pipe(catchError((err) => {
      return throwError(() => err.message || "Server error")
    }));
  }
}
