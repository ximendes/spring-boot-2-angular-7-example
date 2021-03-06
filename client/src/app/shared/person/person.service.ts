import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({  providedIn: 'root'})
export class PersonService {

  public API = '//localhost:8080';
  public CAR_API = this.API + '/cars';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.API + '/all');
  }
}
