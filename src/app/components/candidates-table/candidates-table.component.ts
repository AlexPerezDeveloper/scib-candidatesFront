import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Candidate, LocalCandidate } from '../../interfaces/candidate';
import { StorageService } from '../../services/localstorage.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-candidates-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidates-table.component.html',
  styleUrl: './candidates-table.component.scss'
})



export class CandidatesTableComponent {
candidates: LocalCandidate[] = [];
storageSubscription: Subscription = new Subscription();

constructor(private storageService: StorageService){
  
}

ngOnInit(): void {
  this.storageSubscription = this.storageService.getStorageObservable().subscribe(data => {
    this.candidates = data;
  });
}

ngOnDestroy(): void {
  this.storageSubscription.unsubscribe();
}

getLocalStorageCandidates(){
  this.candidates = JSON.parse(localStorage.getItem('candidates') || '[]')
}
}
