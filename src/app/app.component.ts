import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CandidatesFormComponent } from './components/candidates-form/candidates-form.component';
import { CandidatesTableComponent } from "./components/candidates-table/candidates-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CandidatesFormComponent, CandidatesTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'candidates-front';
}
