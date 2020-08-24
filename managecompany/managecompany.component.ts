import { Component, OnInit } from '@angular/core';
import { ManageeeService } from '../manageee.service';
import { ManageModel } from 'src/entity/manageModel';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managecompany',
  templateUrl: './managecompany.component.html',
  styleUrls: ['./managecompany.component.css']
})
export class ManagecompanyComponent implements OnInit {
  myForm2: FormGroup;
  company:ManageModel[];
  use:any;
  
  constructor(private router:Router,private service:ManageeeService) { }

 
  ngOnInit(): void {
    this.service. getAllStudents().subscribe(data => {
         this.company = data.body;
         console.log(data.body)
    });
  }
  ons(){
    this.router.navigate(['/']);
  }
  createcompany(){
    this.router.navigate(['/createcompany']);
  }
  updateStudent(id: number){
    

    this.router.navigate(['/update']);
  }
  deleteStudent(id):void{
    console.log(id);
    this.service.deleteStudent(id).subscribe(data=>
      this.use=data);
  }
}