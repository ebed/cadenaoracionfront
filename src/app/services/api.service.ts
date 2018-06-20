import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ApiService {
  API_URL = 'https://cadenaoracion.herokuapp.com/';
  //API_URL = 'http://localhost:3000/';

  constructor(public http: HttpClient) { }
  // read method
  public get(path): Observable<any> {
    const token = localStorage.getItem('auth-token');
    const authtoken = 'token ' + token;
    const httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', authtoken);

    const endpoint = this.API_URL + path;
    console.log(endpoint);
    return this.http.get(endpoint, {headers: httpHeaders});

  }

  // create method
  public post(path: string, body: any) {
    const token = localStorage.getItem('auth-token');
    const authtoken = 'token ' + token;
    const httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', authtoken);

    const endpoint = this.API_URL + path;


    return this.http.post(endpoint, body,{headers: httpHeaders});

  }
  // delete method
  public delete(path: string) {
    const token = localStorage.getItem('auth-token');
    const authtoken = 'token ' + token;
    const httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', authtoken);

    const endpoint = this.API_URL + path;
    return this.http.delete(endpoint,{headers: httpHeaders});

  }
  // update method
  public update(path: string, body: any) {
    const token = localStorage.getItem('auth-token');
    const authtoken = 'token ' + token;
    const httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', authtoken);

    const endpoint = this.API_URL + path;
    return this.http.put(endpoint, body,{headers: httpHeaders});
  }

  public request(path: string, body: any) {
    const token = localStorage.getItem('auth-token');
    const authtoken = 'token ' + token;
    const httpHeaders = new HttpHeaders()
      .set('Authorization', authtoken);

    const endpoint = this.API_URL + path;
    return this.http.post(endpoint, body,{headers: httpHeaders});
  }
}
