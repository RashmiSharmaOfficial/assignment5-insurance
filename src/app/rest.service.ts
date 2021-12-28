import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Insurance } from './insurance';
import { insuranceFetch } from './insurance-fetch';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  URL = "http://localhost:3000/insurance";

  getUsers():Observable<any>{
    return this.http.get(this.URL);
  }

  insertData(userObj:Insurance):Observable<any>{
    let header = {'content-type': 'application/json'};
    let body = JSON.stringify(userObj);

    console.log("Data to be inserted is"+ body);
    return this.http.post(this.URL, body, {'headers': header});
  }

  deleteRecord(iRecord: string):Observable<any>{
    let deleteURL = this.URL + "/" + iRecord;

    console.log("Url: "+ deleteURL);
    return this.http.delete(deleteURL);
  }

  getupdateRecord(id:number){
    let updateURL = this.URL + "/" + id;
    return this.http.get(updateURL);
  }

  updateRecord(insObj:insuranceFetch){
    let updateURL = this.URL + "/" + insObj.id;
    let header = {'content-type': 'application/json'};
    // let body = JSON.stringify(insObj);
    return this.http.put(updateURL, insObj, {'headers': header}).pipe(
      map(() => insObj)
    );
  }
}
