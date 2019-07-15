import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http:HttpClient) { }

  getBikes() {
    // forwards based on the proxy.conf.json to the spring boot app (i.e. /server/...
    return this.http.get('/server/api/v1/bikes');
  }
}
