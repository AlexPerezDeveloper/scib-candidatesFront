import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../interfaces/candidate';
import { environment } from '../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class ApiFormService {
  
  constructor(private http: HttpClient) {}

  postData(candidatesData: FormData): Observable<any>{
    console.log(candidatesData);
    return this.http.post<any>(environment.apiUrl+'/candidates', candidatesData);
  }
}
