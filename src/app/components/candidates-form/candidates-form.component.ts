import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidates-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './candidates-form.component.html',
  styleUrl: './candidates-form.component.scss'
})
export class CandidatesFormComponent {
  candidatesForm: FormGroup;

  constructor(){
    this.candidatesForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      userExcel: new FormControl('', [Validators.required]),

    })
  }
  onSubmit(){
    if(this.candidatesForm.valid){
      console.log(this.candidatesForm.value);
    }else{
      console.error("Error: Existe un problema con la validación de los campos del formulario.");
    }
  }
  
}
