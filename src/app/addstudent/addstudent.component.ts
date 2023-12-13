import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Student{
  id:number,
  name : string ,
  email : string ,
  gender : string
};

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  
  studentForm: FormGroup;
  isEditing: boolean = false;
  editingIndex: number = -1;


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


  submit(): void{

    if(!this.isEditing){

this.students.push({
  id: this.studentName.value,
  name: this.studentName.value,
  email: this.studentEmail.value,
  gender: this.studentGender.value,
})
  }

  else {
    this.students[this.editingIndex].name = this.studentName.value
    this.students[this.editingIndex].email = this.studentEmail.value
    this.isEditing = false
    this.editingIndex = -1
  }
  
  console.log(this.studentForm.value)
  this.studentForm.reset();}



  ngOnInit(): void {
    this.studentForm = new FormGroup({
      studentName: new FormControl(''),
      studentEmail: new FormControl(''),
      studentGender: new FormControl(''),
    });
  }
}
