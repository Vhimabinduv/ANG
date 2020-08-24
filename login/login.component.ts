import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators, FormControl} from '@angular/forms';
import { UserModel } from 'src/entity/UserModel';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
  users:UserModel[];
//username: string;
//password: string;

myForm2: FormGroup;
  
  //submitted:true;
  constructor(private router:Router,private service:UserService) { }

  ngOnInit(): void {
    this.service.getAllUser().subscribe(data => {
         this.users = data.body;
         console.log(data.body);
    });

    {
      this.myForm2=new FormGroup({
        username:new FormControl(''),
        password:new FormControl('')
      }
      );
    }

  
}
onSubmit(form:FormGroup){
  var k=0;
  for(var i=0;i<this.users.length;i++)
  {
    if(this.users[i].username==form.value.username&&
      this.users[i].password==form.value.password
      ){
        k=1;
        if(this.users[i].type=="admin"){ this.router.navigate(['/adminlanding']);break;}
        if(this.users[i].type=="user"){ this.router.navigate(['/userlanding']);break;}
      }
  }
  if(k==0){
    alert("invalid input");
  }
  
 
}

   
    // this.submitted=true;
    

  
}
