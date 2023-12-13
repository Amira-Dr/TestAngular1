import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface Student{
  id:number,
  name : string ,
  email : string ,
  gender : string
};

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  studentForm: FormGroup;
  get studentId() {
    return this.studentForm.get('studentId')
  }
  get studentName() {
    return this.studentForm.get('studentName')
  }

  get studentEmail() {
    return this.studentForm.get('studentEmail')
  }
  get studentGender() {
    return this.studentForm.get('studentGender')
  }

  students: Student[] = [
      {  
    "id": 1,  
    "name": "Jack",  
    "email": "jack@gmail.com",  
    "gender": "male"  
  },  
  {  
    "id": 2,  
    "name": "Peter",  
    "email": "peter@gmail.com",  
    "gender": "male"  
  },  
  {  
    "id": 3,  
    "name": "Mary",  
    "email": "mary@gmail.com",  
    "gender": "female"  
  },  
  {  
    "id": 4,  
    "name": "Smith",  
    "email": "smith@gmail.com",  
    "gender": "male"  
  },  
  {  
    "id": 5,  
    "name": "John",  
    "email": "john@gmail.com",  
    "gender": "male"  
  }  
  ]
}
