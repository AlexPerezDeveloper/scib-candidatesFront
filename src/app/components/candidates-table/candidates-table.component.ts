import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface Candidate{
  firstName: string,
  lastName: string,
  seniority: string,
  years: number,
  availability:boolean,
}
@Component({
  selector: 'app-candidates-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidates-table.component.html',
  styleUrl: './candidates-table.component.scss'
})



export class CandidatesTableComponent {
dummyCandidates: Candidate[] = [
  {firstName: "Alex", lastName: "Pérez", seniority: "senior", years: 8, availability: true},
  {firstName: "Pepe", lastName: "Marzo", seniority: "junior", years: 1, availability: false},
  {firstName: "Maria", lastName: "Martinez", seniority: "senior", years: 4, availability: false},
  {firstName: "Ana", lastName: "Ramirez", seniority: "junior", years: 3, availability: true},
]
}
