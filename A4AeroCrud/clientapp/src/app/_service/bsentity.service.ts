import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BsentityService {

  baseurl = environment.apiUrl + 'BusinessEntity/';
  constructor(private http: HttpClient) {
  }
  AddUser(model: any) {
    console.log(this.baseurl);
    return this.http.post(this.baseurl, model);
  }
  UpdateUser(model:any){
    return this.http.put(this.baseurl, model);
  }
  deleteUser(id:number){
    return this.http.delete(this.baseurl+'?id='+id);
  }
  getUser(id: number) {
    return this.http.get(this.baseurl + 'details/?id=' + id);
  }
  getUsers(pageNumber: number) {
    return this.http.get(this.baseurl + '?pageNumber=' + pageNumber);
  }
}
