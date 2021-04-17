import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Data:any;

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get("http://34.198.81.140/attendance.json").subscribe( data => {
        console.log(data);
        this.Data = data;
        
    });
    } 

    
 
  }