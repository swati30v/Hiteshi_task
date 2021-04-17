import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules, ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  worker =[]
  emp = []
  sum : any;
  dataD : any;
  constructor( private api: ApiService, private http:HttpClient) { }

  MyData: any
  my(){
    this.http.get("http://34.198.81.140/attendance.json").subscribe(data => {
      this.MyData = data;
      this.dataD = this.MyData.filter(i => i.designation == 'Worker')
      let total_salary = [];
      this.dataD.forEach(element => {
        total_salary.push(element.basic_salary);
      });
      setTimeout( () => {
        this.sum = total_salary.reduce(function(a,b){
          return a+b;
        },0);
        console.log(this.sum)
      })
    });
  }
  ngOnInit(): void {
    this.my();
  }


  // Emp(){
  //   this.worker = this.MyData.filter(item => item.designation == 'Worker')
  //   console.log(this.worker)
  // }
}
