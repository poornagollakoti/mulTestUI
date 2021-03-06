import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicejsonService {

  constructor(private http: HttpClient) { }

  getMul(body: Object): Observable<any>{
    return this.http.post('http://localhost:3000/api/mul', body)
  }
}
