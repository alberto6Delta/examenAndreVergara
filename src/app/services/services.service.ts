import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  login(form: any) {
    return this.http.post(`${url}/auth/login`, form);
  }

  menu() {
    return this.http.get(`${url}/menu/opciones`);
  }
}
