import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/entity/UserModel';
import {UserService } from './service/user.service';
import { ManageModel } from 'src/entity/manageModel';
import { ManageeeService } from './manageee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{  
  
  students:ManageModel[];

 constructor(private service:ManageeeService){}

 ngOnInit(): void {
     this.service.getAllStudents().subscribe(data => {
          this.students = data.body;
          console.log(data.body)
     });
    
     let student:ManageModel = {
       companyname:'String',
       turnover:254,
         ceo:'string',
         Board_of_Directors:'string',
         Listed_in_stock_exchange:'string',
         breif:'string'

     };

     this.service.saveStudent(student).subscribe(data =>{
        console.log(data.body);
     });
     
 }
 title = 'SPB-Test3';
}
