import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Candidate } from '../../interfaces/candidate';


@Component({
  selector: 'app-candidates-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidates-table.component.html',
  styleUrl: './candidates-table.component.scss'
})



export class CandidatesTableComponent {
dummyCandidates: Candidate[] = [
  
]
}
