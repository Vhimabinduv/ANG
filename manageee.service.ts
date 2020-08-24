import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ManageModel } from 'src/entity/manageModel';

type EntityResponseType1 = HttpResponse<ManageModel[]>;

@Injectable({
  providedIn: 'root'
})
export class ManageeeService {
 constructor(private http:HttpClient) { }
getAllStudents():Observable<EntityResponseType1>{
  //return this.http.get<StudentModel[]>("http://localhost:8084/students", {observe: 'response'});
  return this.http.get<ManageModel[]>("http://localhost:8094/students", {observe: 'response'});
}

saveStudent(studentModel:ManageModel){
 return this.http.post<ManageModel>("http://localhost:8093/student", studentModel, {observe: 'response'});
}
updateStudent(companyModel:ManageModel){
  return this.http.put<ManageModel>("http://localhost:8093/student", companyModel, {observe: 'response'});
 }
 deleteStudent(id){
  return this.http.delete<ManageModel>("http://localhost:8093/student/"+id);
 }
 getById(id){
  //return this.http.get<StudentModel[]>("http://localhost:8084/students", {observe: 'response'});
  return this.http.get<ManageModel[]>("http://localhost:8093/student/"+id);
}
}