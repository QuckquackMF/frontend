import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs'; // Import Observable
import { JsonPipe } from "@angular/common";

@Injectable({
    providedIn: 'root'
})
export class ApiserviceService { // Corrected class name to be consistent

    constructor(public _http: HttpClient) { }

    getdata(): Observable<any> { // Correct method definition and return type
        return this._http.get('https://5000-quckquackmf-esercitazio-8e0t047eilh.ws-eu118.gitpod.io/random');
    }
}