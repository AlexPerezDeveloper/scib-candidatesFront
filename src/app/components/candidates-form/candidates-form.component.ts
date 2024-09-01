import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiFormService } from '../../services/api-form.service';
import { StorageService } from '../../services/localstorage.service';
import { LocalCandidate } from '../../interfaces/candidate';
@Component({
  selector: 'app-candidates-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './candidates-form.component.html',
  styleUrl: './candidates-form.component.scss'
})
export class CandidatesFormComponent {
  candidatesForm: FormGroup;

  constructor(private apiFormService: ApiFormService, private storageService: StorageService){
    this.candidatesForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      file: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('firstName', this.candidatesForm.get('firstName')?.value);
    formData.append('lastName', this.candidatesForm.get('lastName')?.value);

    const fileInput = this.candidatesForm.get('file')?.value as FileList;
    if (fileInput && fileInput.length > 0) {
      formData.append('file', fileInput[0]);
    } else {
      console.error('No file selected');
      return;
    }

    this.apiFormService.postData(formData).subscribe({
      next: (response) => {
        //console.log(response);
        this.addLocalCandidate(response);
        this.candidatesForm.reset();
      },
      error: (error) => console.error(error),
      complete: () => console.log('Request complete')
    });

  }

  addLocalCandidate(response: LocalCandidate): void {
    const newCandidate = response;
    this.storageService.addCandidate(newCandidate);
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {

      this.candidatesForm.patchValue({
        file: input.files
      });
    }
  }
  
}
